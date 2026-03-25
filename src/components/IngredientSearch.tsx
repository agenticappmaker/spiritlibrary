import { useState, useMemo, useCallback } from 'react';
import { X, ChefHat, Plus, ArrowRight } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { motion, AnimatePresence } from 'framer-motion';
import cocktailsData, { FlavorTag } from '@/data/cocktails';
import CocktailCard from './CocktailCard';
import AddToListModal from './AddToListModal';

const allFlavorTags: FlavorTag[] = [
  'Spirit-forward', 'Citrus', 'Sweet', 'Bitter', 'Herbal', 'Smoky',
  'Tropical', 'Creamy', 'Spicy', 'Floral', 'Fruity', 'Refreshing',
  'Rich', 'Dry', 'Effervescent'
];

// Extract all unique ingredient names from cocktails
const allIngredientNames = Array.from(
  new Set(
    cocktailsData.flatMap(c =>
      c.ingredients.map(i => i.item.toLowerCase())
    )
  )
).sort();

// Synonym groups — ingredients in the same group match each other
const synonymGroups: string[][] = [
  ['bourbon', 'whiskey', 'whisky', 'rye whiskey', 'rye', 'american whiskey', 'tennessee whiskey'],
  ['scotch', 'scotch whisky', 'blended scotch', 'single malt scotch'],
  ['honey', 'honey syrup', 'honey water'],
  ['simple syrup', 'sugar syrup', 'sugar', 'superfine sugar', 'caster sugar', 'white sugar', 'granulated sugar'],
  ['demerara syrup', 'demerara sugar', 'brown sugar syrup', 'raw sugar syrup'],
  ['agave syrup', 'agave nectar', 'agave'],
  ['lemon juice', 'lemon', 'fresh lemon juice', 'fresh lemon'],
  ['lime juice', 'lime', 'fresh lime juice', 'fresh lime'],
  ['orange juice', 'fresh orange juice', 'oj'],
  ['grapefruit juice', 'fresh grapefruit juice'],
  ['gin', 'london dry gin', 'dry gin'],
  ['vodka', 'plain vodka'],
  ['white rum', 'light rum', 'silver rum', 'blanco rum'],
  ['dark rum', 'black rum', 'aged rum', 'jamaican rum', 'demerara rum'],
  ['gold rum', 'amber rum', 'añejo rum'],
  ['tequila', 'blanco tequila', 'silver tequila'],
  ['tequila reposado', 'reposado tequila', 'reposado'],
  ['mezcal', 'mezcal joven'],
  ['cointreau', 'triple sec', 'orange liqueur', 'orange curaçao', 'curacao', 'curaçao'],
  ['sweet vermouth', 'rosso vermouth', 'red vermouth'],
  ['dry vermouth', 'french vermouth', 'white vermouth'],
  ['club soda', 'soda water', 'sparkling water', 'seltzer', 'carbonated water'],
  ['prosecco', 'champagne', 'sparkling wine', 'cava', 'brut'],
  ['cream', 'heavy cream', 'heavy whipping cream', 'whipping cream'],
  ['egg white', 'aquafaba'],
  ['coffee liqueur', 'kahlúa', 'kahlua', 'mr black'],
  ['campari', 'bitter liqueur'],
  ['angostura bitters', 'aromatic bitters'],
  ['maraschino liqueur', 'luxardo maraschino', 'maraschino'],
  ['elderflower liqueur', 'st-germain', 'st germain'],
  ['green chartreuse', 'chartreuse'],
  ['coconut cream', 'cream of coconut', 'coco lopez'],
  ['pineapple juice', 'fresh pineapple juice'],
];

// Build a lookup: normalized ingredient → set of synonyms
const synonymLookup = new Map<string, Set<string>>();
for (const group of synonymGroups) {
  const normalizedGroup = new Set(group.map(g => g.toLowerCase().trim()));
  for (const item of normalizedGroup) {
    synonymLookup.set(item, normalizedGroup);
  }
}

function normalizeIngredient(name: string): string {
  return name
    .toLowerCase()
    .replace(/fresh\s+/g, '')
    .replace(/[.,/()'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getIngredientTokens(name: string): string[] {
  const stopWords = new Set([
    'and', 'with', 'the', 'a', 'an', 'of', 'oz', 'dash', 'dashes', 'slice', 'wheel', 'twist', 'leaves', 'leaf'
  ]);

  return normalizeIngredient(name)
    .split(' ')
    .filter(token => token.length > 2 && !stopWords.has(token));
}

function ingredientMatches(cocktailIngredient: string, userIngredient: string): boolean {
  const ci = normalizeIngredient(cocktailIngredient);
  const ui = normalizeIngredient(userIngredient);

  // Direct match
  if (ci === ui || ci.includes(ui) || ui.includes(ci)) return true;

  // Synonym match
  const uiSynonyms = synonymLookup.get(ui);
  if (uiSynonyms) {
    // Check if the cocktail ingredient matches any synonym
    if (uiSynonyms.has(ci)) return true;
    // Check if any synonym is contained in the cocktail ingredient
    for (const syn of uiSynonyms) {
      if (ci.includes(syn) || syn.includes(ci)) return true;
    }
  }

  // Also check if the cocktail ingredient has synonyms that match the user input
  const ciSynonyms = synonymLookup.get(ci);
  if (ciSynonyms && ciSynonyms.has(ui)) return true;

  // Token-based fallback — require ALL user tokens to appear in the cocktail ingredient
  const cocktailTokens = getIngredientTokens(cocktailIngredient);
  const userTokens = getIngredientTokens(userIngredient);

  if (userTokens.length > 0 && userTokens.every(token => cocktailTokens.includes(token))) return true;

  return false;
}

export default function IngredientSearch() {
  const [input, setInput] = useState('');
  const [myIngredients, setMyIngredients] = useState<string[]>([]);
  const [myFlavorTags, setMyFlavorTags] = useState<FlavorTag[]>([]);
  const [addToListCocktailId, setAddToListCocktailId] = useState<string | null>(null);
  const [combineAll, setCombineAll] = useState(false);
  const [showCombineHint, setShowCombineHint] = useState(false);

  // Flavor tag suggestions based on input
  const flavorSuggestions = useMemo(() => {
    if (input.length < 2) return [];
    const lower = input.toLowerCase();
    return allFlavorTags.filter(tag =>
      tag.toLowerCase().includes(lower) && !myFlavorTags.includes(tag)
    );
  }, [input, myFlavorTags]);

  // Ingredient suggestions based on current input
  const suggestions = useMemo(() => {
    if (input.length < 2) return [];
    const lower = input.toLowerCase();
    return allIngredientNames
      .filter(name => name.includes(lower) && !myIngredients.some(mi => normalizeIngredient(mi) === normalizeIngredient(name)))
      .slice(0, 8);
  }, [input, myIngredients]);

  // Find cocktails matching user's ingredients and flavor tags
  const matchedCocktails = useMemo(() => {
    if (myIngredients.length === 0 && myFlavorTags.length === 0) return [];

    const uniqueCocktails = Array.from(new Map(cocktailsData.map(cocktail => [cocktail.id, cocktail])).values());

    return uniqueCocktails
      .map(cocktail => {
        const ingredientMatchesMap = cocktail.ingredients.map(ci =>
          myIngredients.some(ui => ingredientMatches(ci.item, ui))
        );
        const matched = ingredientMatchesMap.filter(Boolean).length;
        const total = cocktail.ingredients.length;
        const pct = total > 0 ? matched / total : 0;

        const recipeUsesAllUserIngredients = myIngredients.length === 0 || myIngredients.every(ui =>
          cocktail.ingredients.some(ci => ingredientMatches(ci.item, ui))
        );

        // Flavor tag matching
        const flavorMatchCount = myFlavorTags.filter(tag =>
          cocktail.flavorTags?.includes(tag)
        ).length;
        const allFlavorsMatch = myFlavorTags.length === 0 || myFlavorTags.every(tag =>
          cocktail.flavorTags?.includes(tag)
        );

        return { cocktail, matched, total, pct, recipeUsesAllUserIngredients, flavorMatchCount, allFlavorsMatch };
      })
      .filter(result => {
        const ingredientPass = myIngredients.length === 0
          ? true
          : combineAll ? result.recipeUsesAllUserIngredients : result.matched > 0;
        const flavorPass = myFlavorTags.length === 0
          ? true
          : result.flavorMatchCount > 0;
        return ingredientPass && flavorPass;
      })
      .sort((a, b) => b.pct - a.pct || b.flavorMatchCount - a.flavorMatchCount || b.matched - a.matched)
  }, [myIngredients, myFlavorTags, combineAll]);

  const addIngredient = (name: string) => {
    const trimmed = name.trim();
    if (trimmed && !myIngredients.some(mi => normalizeIngredient(mi) === normalizeIngredient(trimmed))) {
      setMyIngredients(prev => [...prev, trimmed]);
    }
    setInput('');
  };

  const removeIngredient = (name: string) => {
    setMyIngredients(prev => prev.filter(i => i !== name));
  };

  // Parse a sentence to extract known ingredients and flavor tags
  const parseSentence = useCallback((sentence: string) => {
    const lower = sentence.toLowerCase();
    const stopWords = new Set(['i', 'have', 'got', 'and', 'with', 'some', 'a', 'an', 'the', 'my', 'make', 'me', 'can', 'what', 'do', 'to', 'of', 'in', 'on', 'is', 'it', 'that', 'this', 'using', 'use']);

    const foundIngredients: string[] = [];
    const foundFlavors: FlavorTag[] = [];

    // Check for multi-word ingredient matches first (longest match wins)
    let remaining = lower;
    const sortedNames = [...allIngredientNames].sort((a, b) => b.length - a.length);
    for (const name of sortedNames) {
      if (remaining.includes(name) && !myIngredients.some(mi => normalizeIngredient(mi) === normalizeIngredient(name))) {
        foundIngredients.push(name);
        remaining = remaining.replace(name, ' ');
      }
    }

    // Check for synonym group matches on remaining words
    const remainingWords = remaining.split(/[\s,]+/).filter(w => w.length > 2 && !stopWords.has(w));
    for (const word of remainingWords) {
      const syns = synonymLookup.get(word);
      if (syns) {
        const matchedName = allIngredientNames.find(n => syns.has(n) || n === word);
        if (matchedName && !foundIngredients.includes(matchedName) && !myIngredients.some(mi => normalizeIngredient(mi) === normalizeIngredient(matchedName))) {
          foundIngredients.push(matchedName);
        }
      }
    }

    // Check for flavor tags
    for (const tag of allFlavorTags) {
      if (lower.includes(tag.toLowerCase()) && !myFlavorTags.includes(tag)) {
        foundFlavors.push(tag);
      }
    }

    return { foundIngredients, foundFlavors };
  }, [myIngredients, myFlavorTags]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      const trimmed = input.trim();

      // Check if this looks like a sentence (contains spaces and multiple words)
      const words = trimmed.split(/[\s,]+/).filter(w => w.length > 0);
      if (words.length >= 2) {
        const { foundIngredients, foundFlavors } = parseSentence(trimmed);
        if (foundIngredients.length > 0 || foundFlavors.length > 0) {
          const newIngredients = [...myIngredients];
          for (const ing of foundIngredients) {
            if (!newIngredients.some(mi => normalizeIngredient(mi) === normalizeIngredient(ing))) {
              newIngredients.push(ing);
            }
          }
          setMyIngredients(newIngredients);

          const newFlavors = [...myFlavorTags];
          for (const f of foundFlavors) {
            if (!newFlavors.includes(f)) newFlavors.push(f);
          }
          setMyFlavorTags(newFlavors);

          setInput('');
          // Show combine hint if multiple ingredients were added and combineAll is off
          if (foundIngredients.length >= 2 && !combineAll) {
            setShowCombineHint(true);
          }
          return;
        }
      }

      // Single-word fallback
      if (flavorSuggestions.length > 0) {
        toggleFlavorTag(flavorSuggestions[0]);
      } else {
        addIngredient(suggestions.length > 0 ? suggestions[0] : input);
      }
    }
  };

  const toggleFlavorTag = (tag: FlavorTag) => {
    setMyFlavorTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
    setInput('');
  };

  return (
    <div className="min-h-screen pb-24">
      <header className="pt-12 pb-6 px-4 text-center">
        <h1 className="font-display text-3xl sm:text-4xl text-cream tracking-tight">What's in Your Bar?</h1>
        <p className="text-muted-foreground text-sm mt-1">Type your ingredients and we'll find what you can make.</p>
      </header>

      {/* Ingredient input */}
      <div className="px-4 mb-4">
        <div className="relative">
          <ChefHat className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type ingredients, flavors, or a sentence (e.g. 'vodka and lemon juice')..."
            className="w-full bg-surface-elevated rounded-lg pl-10 pr-4 py-3 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brass/50 transition-all"
          />
        </div>

        {/* Suggestions dropdown */}
        <AnimatePresence>
          {(suggestions.length > 0 || flavorSuggestions.length > 0) && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mt-1 bg-surface-elevated rounded-lg border border-border/50 overflow-hidden"
            >
              {flavorSuggestions.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleFlavorTag(tag)}
                  className="w-full text-left px-4 py-2.5 text-sm text-cream/80 hover:bg-muted/30 hover:text-cream transition-colors flex items-center gap-2"
                >
                  <Plus className="w-3 h-3 text-purple-400" />
                  <span>{tag}</span>
                  <span className="text-[10px] text-purple-400/70 ml-auto">flavor</span>
                </button>
              ))}
              {suggestions.map(s => (
                <button
                  key={s}
                  onClick={() => addIngredient(s)}
                  className="w-full text-left px-4 py-2.5 text-sm text-cream/80 hover:bg-muted/30 hover:text-cream transition-colors flex items-center gap-2"
                >
                  <Plus className="w-3 h-3 text-brass" />
                  <span className="capitalize">{s}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Added ingredients */}
      {(myIngredients.length > 0 || myFlavorTags.length > 0) && (
        <div className="px-4 mb-5">
          {myIngredients.length > 0 && (
            <>
              <p className="text-[10px] uppercase tracking-wider text-brass mb-2">Your ingredients ({myIngredients.length})</p>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {myIngredients.map(ing => (
                  <button
                    key={ing}
                    onClick={() => removeIngredient(ing)}
                    className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-brass/20 text-brass border border-brass/30 hover:bg-brass/30 transition-colors capitalize"
                  >
                    {ing}
                    <X className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </>
          )}
          {myFlavorTags.length > 0 && (
            <>
              <p className="text-[10px] uppercase tracking-wider text-purple-400 mb-2">Flavor profiles ({myFlavorTags.length})</p>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {myFlavorTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleFlavorTag(tag)}
                    className="flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                  >
                    {tag}
                    <X className="w-3 h-3" />
                  </button>
                ))}
              </div>
            </>
          )}
          <button
            onClick={() => { setMyIngredients([]); setMyFlavorTags([]); }}
            className="text-[11px] px-2.5 py-1 rounded-full glass text-muted-foreground hover:text-cream transition-colors"
          >
            Clear all
          </button>
          {myIngredients.length > 0 && (
            <div className="flex items-center gap-2 mt-3 relative">
              <AnimatePresence>
                {showCombineHint && !combineAll && (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    onClick={() => { setCombineAll(true); setShowCombineHint(false); }}
                    className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-brass/20 text-brass border border-brass/30 hover:bg-brass/30 transition-colors mr-1 animate-pulse"
                    title="Enable combine ALL"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </motion.button>
                )}
              </AnimatePresence>
              <Switch
                id="combine-all"
                checked={combineAll}
                onCheckedChange={(v) => { setCombineAll(v); setShowCombineHint(false); }}
                className="data-[state=checked]:bg-brass"
              />
              <label htmlFor="combine-all" className="text-[11px] text-muted-foreground cursor-pointer select-none">
                Show me cocktails I can make combining <span className="text-brass font-medium">ALL</span> these ingredients
              </label>
            </div>
          )}
        </div>
      )}

      {/* Results */}
      {(myIngredients.length > 0 || myFlavorTags.length > 0) && (
        <>
          <div className="px-4 mb-3">
            <h2 className="font-display text-lg text-cream">
              {matchedCocktails.length > 0
                ? `${matchedCocktails.length} cocktails you can make`
                : 'No matches found'}
            </h2>
            {matchedCocktails.length > 0 && (
              <p className="text-[11px] text-muted-foreground mt-0.5">Sorted by best match — green means you have more ingredients covered.</p>
            )}
          </div>

          <div className="px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {matchedCocktails.map(({ cocktail, matched, total, pct }, i) => (
                <div key={cocktail.id} className="relative">
                  <CocktailCard
                    cocktail={cocktail}
                    index={i}
                    onAddToList={setAddToListCocktailId}
                  />
                  {/* Match badge */}
                  <div className={`absolute top-1.5 right-1.5 z-10 text-[10px] px-1.5 py-0.5 rounded-full font-medium backdrop-blur-md pointer-events-none ${
                    pct >= 0.8 ? 'bg-green-800/70 text-green-300' :
                    pct >= 0.5 ? 'bg-yellow-800/70 text-yellow-300' :
                    'bg-muted/70 text-muted-foreground'
                  }`}>
                    {matched}/{total}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {matchedCocktails.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-sm">No cocktails match your ingredients.</p>
              <p className="text-[11px] text-muted-foreground mt-1">Try adding more ingredients to your bar.</p>
            </div>
          )}
        </>
      )}

      {myIngredients.length === 0 && myFlavorTags.length === 0 && (
        <div className="text-center py-16 px-4">
          <ChefHat className="w-10 h-10 text-brass/40 mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">Start adding ingredients or flavor profiles to discover cocktails.</p>
          <p className="text-[11px] text-muted-foreground mt-1">
            We'll match from our library of {cocktailsData.length} recipes.
          </p>
        </div>
      )}

      <AddToListModal
        cocktailId={addToListCocktailId}
        onClose={() => setAddToListCocktailId(null)}
      />
    </div>
  );
}
