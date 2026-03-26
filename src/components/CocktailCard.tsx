import { useState, useCallback, memo } from 'react';
import { createPortal } from 'react-dom';
import { Heart, Plus, RotateCcw, ShoppingCart, Search, X, Share2 } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { Cocktail } from '@/data/cocktails';
import { useAppStore } from '@/stores/useAppStore';
import { toast } from 'sonner';
import cocktailImages from '@/assets/cocktails';

interface CocktailCardProps {
  cocktail: Cocktail;
  index?: number;
  onAddToList?: (cocktailId: string) => void;
}

const spiritColors: Record<string, string> = {
  Bourbon: 'bg-amber-800/60',
  Gin: 'bg-emerald-800/60',
  Rum: 'bg-orange-800/60',
  Tequila: 'bg-lime-800/60',
  Vodka: 'bg-blue-800/60',
  Mezcal: 'bg-stone-700/60',
  Brandy: 'bg-amber-900/60',
  Whiskey: 'bg-amber-700/60',
  Champagne: 'bg-yellow-700/60',
  Scotch: 'bg-amber-800/60',
  Rye: 'bg-red-900/60',
  Pisco: 'bg-lime-700/60',
  Absinthe: 'bg-green-800/60',
  Aperol: 'bg-orange-700/60',
  Amaro: 'bg-red-800/60',
};

const difficultyColors: Record<string, string> = {
  Easy: 'bg-green-900/60',
  Intermediate: 'bg-yellow-900/60',
  Advanced: 'bg-red-900/60',
};

const flavorColors: Record<string, string> = {
  'Spirit-forward': 'bg-amber-700/50',
  'Citrus': 'bg-yellow-600/50',
  'Sweet': 'bg-pink-700/50',
  'Bitter': 'bg-orange-900/50',
  'Herbal': 'bg-emerald-700/50',
  'Smoky': 'bg-stone-600/50',
  'Tropical': 'bg-cyan-700/50',
  'Creamy': 'bg-amber-200/30',
  'Spicy': 'bg-red-700/50',
  'Floral': 'bg-purple-700/50',
  'Fruity': 'bg-rose-700/50',
  'Refreshing': 'bg-teal-700/50',
  'Rich': 'bg-amber-900/50',
  'Dry': 'bg-slate-600/50',
  'Effervescent': 'bg-sky-700/50',
};

function CocktailCard({ cocktail, index = 0, onAddToList }: CocktailCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { toggleSaved, savedCocktailIds, addToRecentlyViewed, addToShoppingList, isInShoppingList, removeFromShoppingList } = useAppStore();
  const isSaved = savedCocktailIds.includes(cocktail.id);
  const image = cocktailImages[cocktail.id];

  const handleFlip = useCallback(() => {
    setIsFlipped(f => {
      if (!f) addToRecentlyViewed(cocktail.id);
      return !f;
    });
  }, [cocktail.id, addToRecentlyViewed]);

  const handleExpand = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(true);
  }, []);

  const handleCollapse = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
  }, []);

  const handleSave = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSaved(cocktail.id);
    toast(isSaved ? 'Removed from saved.' : 'Added to saved. A fine choice.', { duration: 2000 });
  }, [cocktail.id, isSaved, toggleSaved]);

  const handleAddAllToCart = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    let added = 0;
    cocktail.ingredients.forEach(ing => {
      if (!isInShoppingList(ing.item)) {
        addToShoppingList(ing.item, cocktail.id, cocktail.name);
        added++;
      }
    });
    toast(added > 0 ? `Added ${added} ingredient${added !== 1 ? 's' : ''} to cart.` : 'All ingredients already in cart.', { duration: 2000 });
  }, [cocktail, isInShoppingList, addToShoppingList]);

  const handleShare = useCallback(async (e: React.MouseEvent) => {
    e.stopPropagation();
    const ingredientList = cocktail.ingredients.map(i => `• ${i.amount} ${i.item}`).join('\n');
    const text = `🍸 ${cocktail.name}\n\n${ingredientList}\n\nGarnish: ${cocktail.garnish}\n\nhttps://spiritlibrary.lovable.app`;
    if (navigator.share) {
      try { await navigator.share({ title: cocktail.name, text }); } catch {}
    } else {
      await navigator.clipboard.writeText(text);
      toast('Recipe copied to clipboard!', { duration: 2000 });
    }
  }, [cocktail]);

  // CSS animation delay for staggered entry (cap at 20)
  const delayMs = Math.min(index, 20) * 30;

  return (
    <div
      className="perspective-1000 aspect-square animate-fade-in opacity-0"
      style={{ animationDelay: `${delayMs}ms`, animationFillMode: 'forwards' }}
    >
      <div
        className="relative w-full h-full preserve-3d transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 rounded-lg overflow-hidden brass-glow cursor-pointer"
          onClick={handleFlip}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)',
            pointerEvents: isFlipped ? 'none' : 'auto',
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${cocktail.color}`} />
          {image && (
            <img
              src={image}
              alt={cocktail.name}
              className="absolute inset-0 w-full h-full object-contain p-4 z-10"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
          <div className="absolute inset-0 flex flex-col justify-end p-3 z-30">
            <h3 className="font-display text-base sm:text-lg leading-tight text-cream">{cocktail.name}</h3>
            <div className="flex gap-1 mt-2 flex-wrap">
              <span className={`text-[10px] px-2 py-0.5 rounded-full text-cream/90 ${spiritColors[cocktail.spirit] || 'bg-white/10'}`}>
                {cocktail.spirit}
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full text-cream/90 ${difficultyColors[cocktail.difficulty]}`}>
                {cocktail.difficulty}
              </span>
              {cocktail.flavorTags?.slice(0, 2).map(tag => (
                <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full text-cream/90 ${flavorColors[tag] || 'bg-white/10'}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 rounded-lg overflow-hidden brass-glow bg-card"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            pointerEvents: isFlipped ? 'auto' : 'none',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="h-full overflow-y-auto overscroll-contain p-3.5"
            style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
          >
            <div className="min-h-full flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-1.5">
                <h3 className="font-display text-base leading-tight text-foreground pr-2">{cocktail.name}</h3>
                <TooltipProvider delayDuration={300}>
                  <div className="flex gap-1 shrink-0">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button onClick={handleExpand} className="p-1.5 rounded-full hover:bg-muted transition-colors">
                          <Search className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom"><p>Magnify</p></TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button onClick={handleSave} className="p-1.5 rounded-full hover:bg-muted transition-colors">
                          <Heart className={`w-4 h-4 transition-all ${isSaved ? 'fill-burgundy text-burgundy scale-110' : 'text-muted-foreground'}`} />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom"><p>Save</p></TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button onClick={handleAddAllToCart} className="p-1.5 rounded-full hover:bg-muted transition-colors">
                          <Plus className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="bottom"><p>Add recipe to cart</p></TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>

              {/* Glassware */}
              <p className="text-[11px] text-brass mb-1">{cocktail.glassware} · {cocktail.prepTime}</p>
              {cocktail.flavorTags?.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2.5">
                  {cocktail.flavorTags.map(tag => (
                    <span key={tag} className={`text-[9px] px-1.5 py-0.5 rounded-full text-cream/80 ${flavorColors[tag] || 'bg-white/10'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Ingredients */}
              <div className="mb-2.5">
                <p className="text-[10px] uppercase tracking-widest text-brass font-semibold mb-1.5">Ingredients</p>
                {cocktail.ingredients.map((ing, i) => {
                  const inList = isInShoppingList(ing.item);
                  return (
                    <div key={i} className="flex items-center text-xs py-[3px] border-b border-border/50 last:border-0 gap-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (inList) {
                            removeFromShoppingList(ing.item);
                          } else {
                            addToShoppingList(ing.item, cocktail.id, cocktail.name);
                          }
                        }}
                        className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center shrink-0 transition-colors ${
                          inList
                            ? 'bg-brass/30 border-brass text-brass'
                            : 'border-muted-foreground/40 hover:border-brass/60'
                        }`}
                      >
                        {inList && <ShoppingCart className="w-2 h-2" />}
                      </button>
                      <span className="text-foreground/90 flex-1">{ing.item}</span>
                      <span className="text-brass tabular-nums font-medium ml-2 shrink-0">{ing.amount}</span>
                    </div>
                  );
                })}
              </div>

              {/* Instructions */}
              <div className="mb-2.5">
                <p className="text-[10px] uppercase tracking-widest text-brass font-semibold mb-1.5">Method</p>
                {cocktail.instructions.map((step, i) => (
                  <p key={i} className="text-[11px] leading-relaxed text-foreground/80 mb-1.5">
                    <span className="text-brass font-semibold mr-1.5">{i + 1}.</span>{step}
                  </p>
                ))}
              </div>

              {/* Garnish */}
              <p className="text-[11px] text-muted-foreground pt-1 border-t border-border/30">
                Garnish: <span className="text-foreground/80">{cocktail.garnish}</span>
              </p>

              {/* Share + Flip back */}
              <div className="flex items-center justify-center gap-3 mt-3 mb-1">
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground py-2 px-3 rounded-md hover:bg-muted transition-colors font-medium"
                >
                  <Share2 className="w-3.5 h-3.5" /> Share
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleFlip(); }}
                  className="flex items-center justify-center gap-1.5 text-xs text-brass py-2 px-3 rounded-md hover:bg-muted transition-colors font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Flip back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded overlay - only mount when needed */}
      {isExpanded && createPortal(
        <ExpandedOverlay
          cocktail={cocktail}
          isSaved={isSaved}
          onCollapse={handleCollapse}
          onSave={handleSave}
          onAddToList={handleAddAllToCart}
          isInShoppingList={isInShoppingList}
          addToShoppingList={addToShoppingList}
          removeFromShoppingList={removeFromShoppingList}
        />,
        document.body
      )}
    </div>
  );
}

// Separate component for expanded overlay to avoid bloating the card render
function ExpandedOverlay({
  cocktail,
  isSaved,
  onCollapse,
  onSave,
  onAddToList,
  isInShoppingList,
  addToShoppingList,
  removeFromShoppingList,
}: {
  cocktail: Cocktail;
  isSaved: boolean;
  onCollapse: (e: React.MouseEvent) => void;
  onSave: (e: React.MouseEvent) => void;
  onAddToList: (e: React.MouseEvent) => void;
  isInShoppingList: (ingredient: string) => boolean;
  addToShoppingList: (ingredient: string, cocktailId?: string, cocktailName?: string) => void;
  removeFromShoppingList: (ingredient: string) => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-in"
      style={{ animationDuration: '150ms' }}
      onClick={onCollapse}
    >
      <div
        className="relative w-[75vw] h-[75vh] max-w-2xl rounded-lg overflow-hidden brass-glow bg-card animate-scale-in"
        style={{ animationDuration: '200ms' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onCollapse}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-muted/80 hover:bg-muted transition-colors"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>

        <div
          className="h-full overflow-y-auto overscroll-contain p-6"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-2 pr-8">
              <h3 className="font-display text-xl leading-tight text-foreground">{cocktail.name}</h3>
              <div className="flex gap-1 shrink-0">
                <button onClick={onSave} className="p-1.5 rounded-full hover:bg-muted transition-colors">
                  <Heart className={`w-5 h-5 transition-all ${isSaved ? 'fill-burgundy text-burgundy scale-110' : 'text-muted-foreground'}`} />
                </button>
                <button onClick={onAddToList} className="p-1.5 rounded-full hover:bg-muted transition-colors">
                  <Plus className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Glassware */}
            <p className="text-sm text-brass mb-2">{cocktail.glassware} · {cocktail.prepTime}</p>
            {cocktail.flavorTags?.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {cocktail.flavorTags.map(tag => (
                  <span key={tag} className={`text-[11px] px-2 py-0.5 rounded-full text-cream/80 ${flavorColors[tag] || 'bg-white/10'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Ingredients */}
            <div className="mb-4">
              <p className="text-xs uppercase tracking-widest text-brass font-semibold mb-2">Ingredients</p>
              {cocktail.ingredients.map((ing, i) => {
                const inList = isInShoppingList(ing.item);
                return (
                  <div key={i} className="flex items-center text-sm py-1 border-b border-border/50 last:border-0 gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (inList) {
                          removeFromShoppingList(ing.item);
                        } else {
                          addToShoppingList(ing.item, cocktail.id, cocktail.name);
                        }
                      }}
                      className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 transition-colors ${
                        inList
                          ? 'bg-brass/30 border-brass text-brass'
                          : 'border-muted-foreground/40 hover:border-brass/60'
                      }`}
                    >
                      {inList && <ShoppingCart className="w-2.5 h-2.5" />}
                    </button>
                    <span className="text-foreground/90 flex-1">{ing.item}</span>
                    <span className="text-brass tabular-nums font-medium ml-2 shrink-0">{ing.amount}</span>
                  </div>
                );
              })}
            </div>

            {/* Instructions */}
            <div className="mb-4">
              <p className="text-xs uppercase tracking-widest text-brass font-semibold mb-2">Method</p>
              {cocktail.instructions.map((step, i) => (
                <p key={i} className="text-sm leading-relaxed text-foreground/80 mb-2">
                  <span className="text-brass font-semibold mr-2">{i + 1}.</span>{step}
                </p>
              ))}
            </div>

            {/* Garnish */}
            <p className="text-sm text-muted-foreground pt-2 border-t border-border/30">
              Garnish: <span className="text-foreground/80">{cocktail.garnish}</span>
            </p>

            {/* Share */}
            <button
              onClick={async (e) => {
                e.stopPropagation();
                const ingredientList = cocktail.ingredients.map(i => `• ${i.amount} ${i.item}`).join('\n');
                const text = `🍸 ${cocktail.name}\n\n${ingredientList}\n\nGarnish: ${cocktail.garnish}\n\nhttps://spiritlibrary.lovable.app`;
                if (navigator.share) {
                  try { await navigator.share({ title: cocktail.name, text }); } catch {}
                } else {
                  await navigator.clipboard.writeText(text);
                  toast('Recipe copied to clipboard!', { duration: 2000 });
                }
              }}
              className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4 py-2.5 rounded-md hover:bg-muted transition-colors font-medium"
            >
              <Share2 className="w-4 h-4" /> Share Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CocktailCard);
