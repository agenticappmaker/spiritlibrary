import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus } from 'lucide-react';
import { useAppStore } from '@/stores/useAppStore';
import { toast } from 'sonner';

interface AddToListModalProps {
  cocktailId: string | null;
  onClose: () => void;
}

export default function AddToListModal({ cocktailId, onClose }: AddToListModalProps) {
  const { lists, addToList, createList } = useAppStore();
  const [newListName, setNewListName] = useState('');
  const [showCreate, setShowCreate] = useState(false);

  if (!cocktailId) return null;

  const handleAddToList = (listId: string, listName: string) => {
    addToList(listId, cocktailId);
    toast(`Added to "${listName}". A fine choice.`);
    onClose();
  };

  const handleCreateAndAdd = () => {
    if (!newListName.trim()) return;
    const listId = createList(newListName.trim());
    addToList(listId, cocktailId);
    toast(`Created "${newListName}" and added cocktail.`);
    setNewListName('');
    setShowCreate(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="bg-surface-elevated w-full max-w-sm rounded-t-xl sm:rounded-xl p-4 m-0 sm:m-4"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display text-lg text-cream">Add to Collection</h3>
            <button onClick={onClose} className="p-1 text-muted-foreground hover:text-cream">
              <X className="w-5 h-5" />
            </button>
          </div>

          {lists.length === 0 && !showCreate && (
            <p className="text-sm text-muted-foreground mb-4">No lists yet. Create your first collection.</p>
          )}

          <div className="space-y-2 max-h-60 overflow-y-auto scrollbar-hide mb-3">
            {lists.map(list => (
              <button
                key={list.id}
                onClick={() => handleAddToList(list.id, list.name)}
                className="w-full text-left px-3 py-2.5 rounded-lg glass hover:bg-white/10 transition-colors"
              >
                <p className="text-sm text-cream">{list.name}</p>
                <p className="text-[11px] text-muted-foreground">{list.cocktailIds.length} cocktails</p>
              </button>
            ))}
          </div>

          {showCreate ? (
            <div className="flex gap-2">
              <input
                autoFocus
                value={newListName}
                onChange={e => setNewListName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleCreateAndAdd()}
                placeholder="List name..."
                className="flex-1 bg-surface rounded-lg px-3 py-2 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brass/50"
              />
              <button
                onClick={handleCreateAndAdd}
                className="px-3 py-2 rounded-lg bg-brass/20 text-brass text-sm hover:bg-brass/30 transition-colors"
              >
                Create
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowCreate(true)}
              className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-brass/30 text-brass text-sm hover:bg-brass/10 transition-colors"
            >
              <Plus className="w-4 h-4" /> Create New List
            </button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
