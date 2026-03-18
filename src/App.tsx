import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomNav from "@/components/BottomNav";
import HomePage from "@/pages/HomePage";
import IngredientSearch from "@/components/IngredientSearch";
import SavedPage from "@/pages/SavedPage";
import ListsPage from "@/pages/ListsPage";
import SharedListPage from "@/pages/SharedListPage";
import SubstitutionsPage from "@/pages/SubstitutionsPage";
import ShoppingListPage from "@/pages/ShoppingListPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner
        position="top-center"
        toastOptions={{
          style: {
            background: 'hsl(240 6% 14%)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'hsl(40 20% 92%)',
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ingredients" element={<IngredientSearch />} />
          <Route path="/substitutions" element={<SubstitutionsPage />} />
          <Route path="/shopping" element={<ShoppingListPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/lists" element={<ListsPage />} />
          <Route path="/shared/:listId" element={<SharedListPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
