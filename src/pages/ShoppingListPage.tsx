import { useState } from 'react';
import { ShoppingCart, Trash2, Check, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/stores/useAppStore';

export default function ShoppingListPage() {
  const { shoppingList, toggleShoppingItem, removeFromShoppingList, clearShoppingList, clearCheckedItems } = useAppStore();
  const [showConfirmClear, setShowConfirmClear] = useState(false);

  const unchecked = shoppingList.filter(i => !i.checked);
  const checked = shoppingList.filter(i => i.checked);

  return (
    <div className="min-h-screen pb-24">
      <header className="pt-12 pb-6 px-4 text-center">
        <h1 className="font-display text-3xl sm:text-4xl text-cream tracking-tight">Shopping List</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {shoppingList.length === 0
            ? 'Tap the cart icon on any ingredient to add it here.'
            : `${unchecked.length} item${unchecked.length !== 1 ? 's' : ''} to buy`}
        </p>
      </header>

      {shoppingList.length > 0 && (
        <div className="px-4 mb-4 flex flex-wrap gap-2 justify-between items-center">
          <button
            onClick={() => {
              const items = unchecked.map(i => i.ingredient).join(' ');
              window.open(`https://www.instacart.com/store/search/${encodeURIComponent(items)}`, '_blank');
            }}
            className="flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full bg-[#43B02A]/20 text-[#43B02A] hover:bg-[#43B02A]/30 transition-colors font-medium"
          >
            <ExternalLink className="w-3 h-3" />
            Buy on Instacart
          </button>
          <div className="flex gap-2">
            {checked.length > 0 && (
              <button
                onClick={clearCheckedItems}
                className="text-[11px] px-3 py-1.5 rounded-full glass text-muted-foreground hover:text-cream transition-colors"
              >
                Clear checked ({checked.length})
              </button>
            )}
            <button
              onClick={() => setShowConfirmClear(true)}
              className="text-[11px] px-3 py-1.5 rounded-full glass text-muted-foreground hover:text-red-400 transition-colors"
            >
              Clear all
            </button>
          </div>
        </div>
      )}

      {/* Unchecked items */}
      <div className="px-4 space-y-1.5">
        <AnimatePresence>
          {unchecked.map(item => (
            <motion.div
              key={item.ingredient}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10, height: 0 }}
              className="flex items-center gap-3 p-3 bg-surface-elevated rounded-lg border border-border/30"
            >
              <button
                onClick={() => toggleShoppingItem(item.ingredient)}
                className="w-5 h-5 rounded border-2 border-brass/50 flex items-center justify-center shrink-0 hover:border-brass transition-colors"
              >
                {/* empty checkbox */}
              </button>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-cream capitalize">{item.ingredient}</p>
                {item.cocktailName && (
                  <p className="text-[10px] text-muted-foreground">for {item.cocktailName}</p>
                )}
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => window.open(`https://www.instacart.com/store/search/${encodeURIComponent(item.ingredient)}`, '_blank')}
                  className="p-1 rounded hover:bg-[#43B02A]/20 transition-colors"
                  title="Buy on Instacart"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#43B02A]" />
                </button>
                <button
                  onClick={() => removeFromShoppingList(item.ingredient)}
                  className="p-1 rounded hover:bg-muted/50 transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </div>
      {checked.length > 0 && (
        <div className="px-4 mt-6">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">Checked off ({checked.length})</p>
          <div className="space-y-1.5">
            <AnimatePresence>
              {checked.map(item => (
                <motion.div
                  key={item.ingredient}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-3 p-3 bg-surface-elevated/50 rounded-lg border border-border/20"
                >
                  <button
                    onClick={() => toggleShoppingItem(item.ingredient)}
                    className="w-5 h-5 rounded bg-brass/30 border-2 border-brass flex items-center justify-center shrink-0"
                  >
                    <Check className="w-3 h-3 text-brass" />
                  </button>
                  <p className="text-sm text-muted-foreground line-through capitalize flex-1">{item.ingredient}</p>
                  <button
                    onClick={() => removeFromShoppingList(item.ingredient)}
                    className="p-1 rounded hover:bg-muted/50 transition-colors"
                  >
                    <X className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Empty state */}
      {shoppingList.length === 0 && (
        <div className="text-center py-16 px-4">
          <ShoppingCart className="w-10 h-10 text-brass/30 mx-auto mb-3" />
          <p className="text-muted-foreground text-sm">Your shopping list is empty.</p>
          <p className="text-[11px] text-muted-foreground mt-1">
            Flip any cocktail card and tap the cart icon next to ingredients you need.
          </p>
        </div>
      )}

      {/* Confirm clear modal */}
      <AnimatePresence>
        {showConfirmClear && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
            onClick={() => setShowConfirmClear(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              className="bg-card rounded-xl p-5 max-w-xs w-full border border-border/30"
            >
              <p className="text-cream font-display text-lg mb-2">Clear shopping list?</p>
              <p className="text-muted-foreground text-sm mb-4">This will remove all items.</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowConfirmClear(false)}
                  className="flex-1 py-2 rounded-lg glass text-sm text-cream"
                >
                  Cancel
                </button>
                <button
                  onClick={() => { clearShoppingList(); setShowConfirmClear(false); }}
                  className="flex-1 py-2 rounded-lg bg-red-900/60 text-red-300 text-sm hover:bg-red-900/80 transition-colors"
                >
                  Clear all
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
