import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CocktailList {
  id: string;
  name: string;
  description: string;
  cocktailIds: string[];
  createdAt: number;
}

export interface ShoppingItem {
  ingredient: string;
  cocktailId?: string;
  cocktailName?: string;
  checked: boolean;
  addedAt: number;
}

interface AppState {
  savedCocktailIds: string[];
  lists: CocktailList[];
  recentlyViewed: string[];
  shoppingList: ShoppingItem[];
  
  // Actions
  toggleSaved: (id: string) => void;
  isSaved: (id: string) => boolean;
  addToRecentlyViewed: (id: string) => void;
  
  // List actions
  createList: (name: string, description?: string) => string;
  deleteList: (listId: string) => void;
  updateList: (listId: string, updates: Partial<Pick<CocktailList, 'name' | 'description'>>) => void;
  addToList: (listId: string, cocktailId: string) => void;
  removeFromList: (listId: string, cocktailId: string) => void;
  duplicateList: (listId: string) => string;

  // Shopping list actions
  addToShoppingList: (ingredient: string, cocktailId?: string, cocktailName?: string) => void;
  removeFromShoppingList: (ingredient: string) => void;
  toggleShoppingItem: (ingredient: string) => void;
  clearShoppingList: () => void;
  clearCheckedItems: () => void;
  isInShoppingList: (ingredient: string) => boolean;
}

function normalizeIngredient(name: string): string {
  return name.toLowerCase().replace(/fresh\s+/g, '').replace(/\s+/g, ' ').trim();
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      savedCocktailIds: [],
      lists: [],
      recentlyViewed: [],
      shoppingList: [],
      
      toggleSaved: (id) => set((state) => ({
        savedCocktailIds: state.savedCocktailIds.includes(id)
          ? state.savedCocktailIds.filter((cid) => cid !== id)
          : [...state.savedCocktailIds, id]
      })),
      
      isSaved: (id) => get().savedCocktailIds.includes(id),
      
      addToRecentlyViewed: (id) => set((state) => ({
        recentlyViewed: [id, ...state.recentlyViewed.filter((cid) => cid !== id)].slice(0, 20)
      })),
      
      createList: (name, description = '') => {
        const id = `list-${Date.now()}`;
        set((state) => ({
          lists: [...state.lists, { id, name, description, cocktailIds: [], createdAt: Date.now() }]
        }));
        return id;
      },
      
      deleteList: (listId) => set((state) => ({
        lists: state.lists.filter((l) => l.id !== listId)
      })),
      
      updateList: (listId, updates) => set((state) => ({
        lists: state.lists.map((l) => l.id === listId ? { ...l, ...updates } : l)
      })),
      
      addToList: (listId, cocktailId) => set((state) => ({
        lists: state.lists.map((l) =>
          l.id === listId && !l.cocktailIds.includes(cocktailId)
            ? { ...l, cocktailIds: [...l.cocktailIds, cocktailId] }
            : l
        )
      })),
      
      removeFromList: (listId, cocktailId) => set((state) => ({
        lists: state.lists.map((l) =>
          l.id === listId
            ? { ...l, cocktailIds: l.cocktailIds.filter((cid) => cid !== cocktailId) }
            : l
        )
      })),
      
      duplicateList: (listId) => {
        const original = get().lists.find((l) => l.id === listId);
        if (!original) return '';
        const id = `list-${Date.now()}`;
        set((state) => ({
          lists: [...state.lists, {
            ...original,
            id,
            name: `${original.name} (Copy)`,
            createdAt: Date.now()
          }]
        }));
        return id;
      },

      addToShoppingList: (ingredient, cocktailId, cocktailName) => set((state) => {
        const norm = normalizeIngredient(ingredient);
        const exists = state.shoppingList.some(i => normalizeIngredient(i.ingredient) === norm);
        if (exists) return state;
        return {
          shoppingList: [...state.shoppingList, {
            ingredient,
            cocktailId,
            cocktailName,
            checked: false,
            addedAt: Date.now(),
          }]
        };
      }),

      removeFromShoppingList: (ingredient) => set((state) => ({
        shoppingList: state.shoppingList.filter(i => normalizeIngredient(i.ingredient) !== normalizeIngredient(ingredient))
      })),

      toggleShoppingItem: (ingredient) => set((state) => ({
        shoppingList: state.shoppingList.map(i =>
          normalizeIngredient(i.ingredient) === normalizeIngredient(ingredient)
            ? { ...i, checked: !i.checked }
            : i
        )
      })),

      clearShoppingList: () => set({ shoppingList: [] }),

      clearCheckedItems: () => set((state) => ({
        shoppingList: state.shoppingList.filter(i => !i.checked)
      })),

      isInShoppingList: (ingredient) => {
        const norm = normalizeIngredient(ingredient);
        return get().shoppingList.some(i => normalizeIngredient(i.ingredient) === norm);
      },
    }),
    { name: 'spirit-library-store' }
  )
);
