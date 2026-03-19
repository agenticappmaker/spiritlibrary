import { useState, useMemo } from 'react';
import { X, ChefHat, Plus } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { motion, AnimatePresence } from 'framer-motion';
import cocktailsData from '@/data/cocktails';
import CocktailCard from './CocktailCard';
import AddToListModal from './AddToListModal';

// Extract all unique ingredient names from cocktails
const allIngredientNames = Array.from(
  new Set(
    cocktailsData.flatMap(c =>
      c.ingredients.map(i => i.item.toLowerCase())
    )
  )
).sort();

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

  if (ci === ui || ci.includes(ui) || ui.includes(ci)) return true;

  const cocktailTokens = getIngredientTokens(cocktailIngredient);
  const userTokens = getIngredientTokens(userIngredient);

  return userTokens.some(token => cocktailTokens.includes(token));
}

export default function IngredientSearch() {
  const [input, setInput] = useState('');
  const [myIngredients, setMyIngredients] = useState<string[]>([]);
  const [addToListCocktailId, setAddToListCocktailId] = useState<string | null>(null);
  const [exactMatch, setExactMatch] = useState(false);

  // Suggestions based on current input
  const suggestions = useMemo(() => {
    if (input.length < 2) return [];
    const lower = input.toLowerCase();
    return allIngredientNames
      .filter(name => name.includes(lower) && !myIngredients.some(mi => normalizeIngredient(mi) === normalizeIngredient(name)))
      .slice(0, 8);
  }, [input, myIngredients]);

  // Find cocktails matching user's ingredients
  const matchedCocktails = useMemo(() => {
    if (myIngredients.length === 0) return [];

    const uniqueCocktails = Array.from(new Map(cocktailsData.map(cocktail => [cocktail.id, cocktail])).values());

    return uniqueCocktails
      .map(cocktail => {
        const ingredientMatchesMap = cocktail.ingredients.map(ci =>
          myIngredients.some(ui => ingredientMatches(ci.item, ui))
        );
        const matched = ingredientMatchesMap.filter(Boolean).length;
        const total = cocktail.ingredients.length;
        const pct = total > 0 ? matched / total : 0;
        const hasAllIngredients = total > 0 && ingredientMatchesMap.every(Boolean);

        return { cocktail, matched, total, pct, hasAllIngredients };
      })
      .filter(result => exactMatch ? result.hasAllIngredients : result.matched > 0)
      .sort((a, b) => b.pct - a.pct || b.matched - a.matched)
      .slice(0, 50);
  }, [myIngredients, exactMatch]);

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      addIngredient(suggestions.length > 0 ? suggestions[0] : input);
    }
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
            placeholder="Type an ingredient (e.g. bourbon, lime, honey)..."
            className="w-full bg-surface-elevated rounded-lg pl-10 pr-4 py-3 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brass/50 transition-all"
          />
        </div>

        {/* Suggestions dropdown */}
        <AnimatePresence>
          {suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mt-1 bg-surface-elevated rounded-lg border border-border/50 overflow-hidden"
            >
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
      {myIngredients.length > 0 && (
        <div className="px-4 mb-5">
          <p className="text-[10px] uppercase tracking-wider text-brass mb-2">Your ingredients ({myIngredients.length})</p>
          <div className="flex flex-wrap gap-1.5">
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
            <button
              onClick={() => setMyIngredients([])}
              className="text-[11px] px-2.5 py-1 rounded-full glass text-muted-foreground hover:text-cream transition-colors"
            >
              Clear all
            </button>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Switch
              id="exact-match"
              checked={exactMatch}
              onCheckedChange={setExactMatch}
              className="data-[state=checked]:bg-brass"
            />
            <label htmlFor="exact-match" className="text-[11px] text-muted-foreground cursor-pointer select-none">
              Only show cocktails I have <span className="text-brass font-medium">all</span> ingredients for
            </label>
          </div>
        </div>
      )}

      {/* Results */}
      {myIngredients.length > 0 && (
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

      {myIngredients.length === 0 && (
        <div className="text-center py-16 px-4">
          <ChefHat className="w-10 h-10 text-brass/40 mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">Start adding ingredients to discover cocktails.</p>
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
