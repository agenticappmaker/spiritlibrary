import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Plus, RotateCcw } from 'lucide-react';
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

export default function CocktailCard({ cocktail, index = 0, onAddToList }: CocktailCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { toggleSaved, savedCocktailIds, addToRecentlyViewed } = useAppStore();
  const isSaved = savedCocktailIds.includes(cocktail.id);
  const image = cocktailImages[cocktail.id];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) addToRecentlyViewed(cocktail.id);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSaved(cocktail.id);
    toast(isSaved ? 'Removed from saved.' : 'Added to saved. A fine choice.', {
      duration: 2000,
    });
  };

  const handleAddToList = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToList?.(cocktail.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="perspective-1000 aspect-square"
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div className="absolute inset-0 backface-hidden rounded-lg overflow-hidden brass-glow cursor-pointer" onClick={handleFlip}>
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
            <div className="flex gap-1.5 mt-2 flex-wrap">
              <span className={`text-[10px] px-2 py-0.5 rounded-full backdrop-blur-md text-cream/90 ${spiritColors[cocktail.spirit] || 'bg-white/10'}`}>
                {cocktail.spirit}
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full backdrop-blur-md text-cream/90 ${difficultyColors[cocktail.difficulty]}`}>
                {cocktail.difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 backface-hidden rounded-lg overflow-hidden brass-glow bg-card"
          style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full flex flex-col p-3.5 overflow-y-auto overscroll-contain">
            {/* Header */}
            <div className="flex items-start justify-between mb-1.5">
              <h3 className="font-display text-base leading-tight text-foreground pr-2">{cocktail.name}</h3>
              <div className="flex gap-1 shrink-0">
                <button onClick={handleSave} className="p-1.5 rounded-full hover:bg-muted transition-colors">
                  <Heart className={`w-4 h-4 transition-all ${isSaved ? 'fill-burgundy text-burgundy scale-110' : 'text-muted-foreground'}`} />
                </button>
                <button onClick={handleAddToList} className="p-1.5 rounded-full hover:bg-muted transition-colors">
                  <Plus className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Glassware */}
            <p className="text-[11px] text-brass mb-2.5">{cocktail.glassware} · {cocktail.prepTime}</p>

            {/* Ingredients */}
            <div className="mb-2.5">
              <p className="text-[10px] uppercase tracking-widest text-brass font-semibold mb-1.5">Ingredients</p>
              {cocktail.ingredients.map((ing, i) => (
                <div key={i} className="flex justify-between text-xs py-[3px] border-b border-border/50 last:border-0">
                  <span className="text-foreground/90">{ing.item}</span>
                  <span className="text-brass tabular-nums font-medium ml-2 shrink-0">{ing.amount}</span>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="mb-2.5">
              <p className="text-[10px] uppercase tracking-widest text-brass font-semibold mb-1.5">Method</p>
              {cocktail.instructions.map((step, i) => (
                <p key={i} className="text-[11px] leading-relaxed text-foreground/80 mb-1">
                  <span className="text-brass font-semibold mr-1.5">{i + 1}.</span>{step}
                </p>
              ))}
            </div>

            {/* Garnish */}
            <p className="text-[11px] text-muted-foreground pt-1 border-t border-border/30">
              Garnish: <span className="text-foreground/80">{cocktail.garnish}</span>
            </p>

            {/* Flip back button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleFlip(); }}
              className="flex items-center justify-center gap-1.5 text-xs text-brass mt-3 mb-1 py-2 rounded-md hover:bg-muted transition-colors font-medium shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Flip back
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
