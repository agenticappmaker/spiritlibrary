import { useEffect, useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useAppStore } from '@/stores/useAppStore';
import { supabase } from '@/integrations/supabase/client';

/**
 * Syncs local Zustand store with the cloud profile.
 * On login: loads cloud data into local store.
 * On local changes: persists to cloud.
 */
export function useCloudSync() {
  const { user, profile } = useAuth();
  const store = useAppStore();
  const hasLoaded = useRef(false);
  const isSyncing = useRef(false);

  // Load cloud data into local store on login
  useEffect(() => {
    if (!profile || hasLoaded.current) return;
    hasLoaded.current = true;

    // Only overwrite local if cloud has data
    if (profile.saved_cocktail_ids?.length > 0 || store.savedCocktailIds.length === 0) {
      useAppStore.setState({ savedCocktailIds: profile.saved_cocktail_ids || [] });
    }
    if (profile.shopping_list?.length > 0 || store.shoppingList.length === 0) {
      useAppStore.setState({ shoppingList: profile.shopping_list || [] });
    }
    if (profile.lists?.length > 0 || store.lists.length === 0) {
      useAppStore.setState({ lists: profile.lists || [] });
    }
    if (profile.recently_viewed?.length > 0 || store.recentlyViewed.length === 0) {
      useAppStore.setState({ recentlyViewed: profile.recently_viewed || [] });
    }
  }, [profile]);

  // Reset on logout
  useEffect(() => {
    if (!user) {
      hasLoaded.current = false;
    }
  }, [user]);

  // Persist local changes to cloud
  useEffect(() => {
    if (!user || !hasLoaded.current) return;

    const unsubscribe = useAppStore.subscribe(async (state) => {
      if (isSyncing.current) return;
      isSyncing.current = true;
      try {
        await supabase
          .from('profiles')
          .update({
            saved_cocktail_ids: state.savedCocktailIds,
            shopping_list: state.shoppingList as any,
            lists: state.lists as any,
            recently_viewed: state.recentlyViewed,
          })
          .eq('user_id', user.id);
      } finally {
        isSyncing.current = false;
      }
    });

    return unsubscribe;
  }, [user]);
}
