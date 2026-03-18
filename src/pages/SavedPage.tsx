import { useMemo, useState } from 'react';
import { Heart } from 'lucide-react';
import cocktailsData from '@/data/cocktails';
import { useAppStore } from '@/stores/useAppStore';
import CocktailCard from '@/components/CocktailCard';
import AddToListModal from '@/components/AddToListModal';

export default function SavedPage() {
  const { savedCocktailIds } = useAppStore();
  const [addToListCocktailId, setAddToListCocktailId] = useState<string | null>(null);

  const saved = useMemo(
    () => cocktailsData.filter(c => savedCocktailIds.includes(c.id)),
    [savedCocktailIds]
  );

  return (
    <div className="min-h-screen pb-24">
      <header className="pt-12 pb-6 px-4">
        <h1 className="font-display text-2xl text-cream">Saved Cocktails</h1>
        <p className="text-muted-foreground text-sm mt-1">{saved.length} cocktails in your collection</p>
      </header>

      {saved.length === 0 ? (
        <div className="text-center py-20 px-4">
          <Heart className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-cream font-display text-lg">Your bar is currently empty.</p>
          <p className="text-muted-foreground text-sm mt-1">Start your collection by exploring the library.</p>
        </div>
      ) : (
        <div className="px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {saved.map((c, i) => (
              <CocktailCard key={c.id} cocktail={c} index={i} onAddToList={setAddToListCocktailId} />
            ))}
          </div>
        </div>
      )}

      <AddToListModal cocktailId={addToListCocktailId} onClose={() => setAddToListCocktailId(null)} />
    </div>
  );
}
