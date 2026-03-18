import { useState } from 'react';
import { Plus, Trash2, Share2, List, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import cocktailsData from '@/data/cocktails';
import { useAppStore } from '@/stores/useAppStore';
import CocktailCard from '@/components/CocktailCard';
import AddToListModal from '@/components/AddToListModal';
import { toast } from 'sonner';

export default function ListsPage() {
  const { lists, createList, deleteList, duplicateList } = useAppStore();
  const [selectedListId, setSelectedListId] = useState<string | null>(null);
  const [newListName, setNewListName] = useState('');
  const [showCreate, setShowCreate] = useState(false);
  const [addToListCocktailId, setAddToListCocktailId] = useState<string | null>(null);

  const selectedList = lists.find(l => l.id === selectedListId);
  const selectedCocktails = selectedList
    ? cocktailsData.filter(c => selectedList.cocktailIds.includes(c.id))
    : [];

  const handleCreate = () => {
    if (!newListName.trim()) return;
    createList(newListName.trim());
    setNewListName('');
    setShowCreate(false);
    toast('List created.');
  };

  const handleShare = (listId: string) => {
    const url = `${window.location.origin}/shared/${listId}`;
    navigator.clipboard.writeText(url);
    toast('Link copied to clipboard. Share away.');
  };

  const handleDuplicate = (listId: string) => {
    duplicateList(listId);
    toast('List duplicated.');
  };

  if (selectedList) {
    return (
      <div className="min-h-screen pb-24">
        <header className="pt-12 pb-4 px-4">
          <button onClick={() => setSelectedListId(null)} className="text-brass text-sm mb-2">← Back</button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-2xl text-cream">{selectedList.name}</h1>
              <p className="text-muted-foreground text-sm">{selectedCocktails.length} cocktails</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleShare(selectedList.id)} className="p-2 glass rounded-lg text-muted-foreground hover:text-brass">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>
        {selectedCocktails.length === 0 ? (
          <div className="text-center py-20 px-4">
            <p className="text-muted-foreground text-sm">This list is empty. Browse the library to curate your collection.</p>
          </div>
        ) : (
          <div className="px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {selectedCocktails.map((c, i) => (
                <CocktailCard key={c.id} cocktail={c} index={i} onAddToList={setAddToListCocktailId} />
              ))}
            </div>
          </div>
        )}
        <AddToListModal cocktailId={addToListCocktailId} onClose={() => setAddToListCocktailId(null)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-24">
      <header className="pt-12 pb-6 px-4">
        <h1 className="font-display text-2xl text-cream">My Lists</h1>
        <p className="text-muted-foreground text-sm mt-1">Curate your personal drink menus.</p>
      </header>

      <div className="px-4 space-y-3">
        {lists.map(list => {
          const listCocktails = cocktailsData.filter(c => list.cocktailIds.includes(c.id));
          return (
            <motion.div
              key={list.id}
              layout
              className="glass rounded-lg p-4 cursor-pointer hover:bg-white/10 transition-colors"
              onClick={() => setSelectedListId(list.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-display text-base text-cream">{list.name}</h3>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{list.cocktailIds.length} cocktails</p>
                  {/* Mini preview */}
                  <div className="flex gap-1 mt-2">
                    {listCocktails.slice(0, 4).map(c => (
                      <div key={c.id} className={`w-8 h-8 rounded bg-gradient-to-br ${c.color}`} />
                    ))}
                  </div>
                </div>
                <div className="flex gap-1">
                  <button onClick={e => { e.stopPropagation(); handleShare(list.id); }} className="p-1.5 text-muted-foreground hover:text-brass">
                    <Share2 className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={e => { e.stopPropagation(); handleDuplicate(list.id); }} className="p-1.5 text-muted-foreground hover:text-brass">
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={e => { e.stopPropagation(); deleteList(list.id); toast('List deleted.'); }} className="p-1.5 text-muted-foreground hover:text-destructive">
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}

        {lists.length === 0 && !showCreate && (
          <div className="text-center py-16">
            <List className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
            <p className="text-cream font-display text-lg">No lists yet.</p>
            <p className="text-muted-foreground text-sm mt-1">Create your first cocktail collection.</p>
          </div>
        )}

        {showCreate ? (
          <div className="flex gap-2">
            <input
              autoFocus
              value={newListName}
              onChange={e => setNewListName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleCreate()}
              placeholder="List name..."
              className="flex-1 bg-surface rounded-lg px-3 py-2.5 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brass/50"
            />
            <button onClick={handleCreate} className="px-4 py-2.5 rounded-lg bg-brass/20 text-brass text-sm">Create</button>
            <button onClick={() => setShowCreate(false)} className="px-3 py-2.5 rounded-lg text-muted-foreground text-sm">Cancel</button>
          </div>
        ) : (
          <button
            onClick={() => setShowCreate(true)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-brass/30 text-brass text-sm hover:bg-brass/10 transition-colors"
          >
            <Plus className="w-4 h-4" /> Create New List
          </button>
        )}
      </div>
    </div>
  );
}
