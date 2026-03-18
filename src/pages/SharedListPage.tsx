import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import cocktailsData from '@/data/cocktails';
import { useAppStore } from '@/stores/useAppStore';

export default function SharedListPage() {
  const { listId } = useParams<{ listId: string }>();
  const { lists } = useAppStore();

  const list = lists.find(l => l.id === listId);
  const cocktails = useMemo(
    () => list ? cocktailsData.filter(c => list.cocktailIds.includes(c.id)) : [],
    [list]
  );

  if (!list) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-cream mb-2">List Not Found</h1>
          <p className="text-muted-foreground text-sm mb-4">This shared list doesn't exist or has been removed.</p>
          <Link to="/" className="text-brass text-sm hover:underline">← Back to Library</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      <header className="pt-12 pb-6 px-4 text-center">
        <p className="text-[10px] uppercase tracking-widest text-brass mb-1">Shared Collection</p>
        <h1 className="font-display text-3xl text-cream">{list.name}</h1>
        {list.description && <p className="text-muted-foreground text-sm mt-2">{list.description}</p>}
        <p className="text-muted-foreground text-[11px] mt-1">{cocktails.length} cocktails</p>
      </header>

      <div className="px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {cocktails.map((cocktail) => (
            <div key={cocktail.id} className="aspect-square rounded-lg overflow-hidden brass-glow relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${cocktail.color}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-3">
                <h3 className="font-display text-base text-cream">{cocktail.name}</h3>
                <p className="text-[10px] text-cream/70 mt-0.5">{cocktail.spirit} · {cocktail.difficulty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <Link to="/" className="text-brass text-sm hover:underline">Explore Spirit Library →</Link>
      </div>
    </div>
  );
}
