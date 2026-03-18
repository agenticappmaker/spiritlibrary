import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CocktailList {
  id: string;
  name: string;
  description: string;
  cocktailIds: string[];
  createdAt: number;
}

interface AppState {
  savedCocktailIds: string[];
  lists: CocktailList[];
  recentlyViewed: string[];
  
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
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      savedCocktailIds: [],
      lists: [],
      recentlyViewed: [],
      
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
      }
    }),
    { name: 'spirit-library-store' }
  )
);
