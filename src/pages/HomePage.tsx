import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X, Shuffle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import cocktailsData, { allSpirits, allDifficulties, allFlavorTags, type Spirit, type Difficulty, type FlavorTag } from '@/data/cocktails';
import CocktailCard from '@/components/CocktailCard';
import AddToListModal from '@/components/AddToListModal';

const featuredIds = [
  'old-fashioned', 'negroni', 'espresso-martini', 'paper-plane', 'mai-tai',
  'penicillin', 'last-word', 'daiquiri', 'paloma', 'aviation'
];

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSpirits, setSelectedSpirits] = useState<Spirit[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'Classic' | 'Modern' | null>(null);
  const [selectedFlavors, setSelectedFlavors] = useState<FlavorTag[]>([]);
  const [sortBy, setSortBy] = useState<'name' | 'difficulty' | 'spirit'>('name');
  const [addToListCocktailId, setAddToListCocktailId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const featured = useMemo(() =>
    cocktailsData.filter(c => featuredIds.includes(c.id)),
    []
  );

  const randomPick = useMemo(() =>
    cocktailsData[Math.floor(Math.random() * cocktailsData.length)],
    []
  );

  const filtered = useMemo(() => {
    const lower = search.toLowerCase();
    let result = cocktailsData.filter(c => {
      if (search && !c.name.toLowerCase().includes(lower)) return false;
      if (selectedSpirits.length > 0 && !selectedSpirits.includes(c.spirit)) return false;
      if (selectedDifficulty && c.difficulty !== selectedDifficulty) return false;
      if (selectedCategory && c.category !== selectedCategory) return false;
      if (selectedFlavors.length > 0 && !selectedFlavors.every(f => c.flavorTags?.includes(f))) return false;
      return true;
    });

    result.sort((a, b) => {
      // When searching, prioritize: exact match > starts with > contains, then alphabetical
      if (search) {
        const aLower = a.name.toLowerCase();
        const bLower = b.name.toLowerCase();
        const aExact = aLower === lower;
        const bExact = bLower === lower;
        if (aExact !== bExact) return aExact ? -1 : 1;
        const aStarts = aLower.startsWith(lower);
        const bStarts = bLower.startsWith(lower);
        if (aStarts !== bStarts) return aStarts ? -1 : 1;
        // Shorter names rank higher (closer match)
        if (aLower.length !== bLower.length) return aLower.length - bLower.length;
        return aLower.localeCompare(bLower);
      }
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'difficulty') {
        const order = { Easy: 0, Intermediate: 1, Advanced: 2 };
        return order[a.difficulty] - order[b.difficulty];
      }
      return a.spirit.localeCompare(b.spirit);
    });

    return result;
  }, [search, selectedSpirits, selectedDifficulty, selectedCategory, selectedFlavors, sortBy]);

  const toggleSpirit = (s: Spirit) => {
    setSelectedSpirits(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const toggleFlavor = (f: FlavorTag) => {
    setSelectedFlavors(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]);
  };

  const hasFilters = selectedSpirits.length > 0 || selectedDifficulty || selectedCategory;
  const isSearching = search.length > 0 || hasFilters;
  const displayCocktails = isSearching ? filtered : (showAll ? filtered : featured);

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="pt-12 pb-6 px-4 text-center">
        <h1 className="font-display text-3xl sm:text-4xl text-cream tracking-tight">Spirit Library</h1>
        <p className="text-muted-foreground text-sm mt-1">Discover, save, and share exceptional cocktails.</p>
      </header>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search cocktails..."
            className="w-full bg-surface-elevated rounded-lg pl-10 pr-12 py-3 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brass/50 transition-all"
          />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded transition-colors ${showFilters || hasFilters ? 'text-brass' : 'text-muted-foreground hover:text-cream'}`}
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-4 mb-4"
          >
            <div className="bg-surface-elevated rounded-lg p-3 space-y-3">
              {/* Spirit filter */}
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Spirit</p>
                <div className="flex flex-wrap gap-1.5">
                  {allSpirits.map(s => (
                    <button
                      key={s}
                      onClick={() => toggleSpirit(s)}
                      className={`text-[11px] px-2.5 py-1 rounded-full transition-all ${
                        selectedSpirits.includes(s)
                          ? 'bg-brass/20 text-brass border border-brass/30'
                          : 'glass text-muted-foreground hover:text-cream'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              {/* Difficulty filter */}
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Difficulty</p>
                <div className="flex gap-1.5">
                  {allDifficulties.map(d => (
                    <button
                      key={d}
                      onClick={() => setSelectedDifficulty(selectedDifficulty === d ? null : d)}
                      className={`text-[11px] px-2.5 py-1 rounded-full transition-all ${
                        selectedDifficulty === d
                          ? 'bg-brass/20 text-brass border border-brass/30'
                          : 'glass text-muted-foreground hover:text-cream'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              {/* Category */}
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Category</p>
                <div className="flex gap-1.5">
                  {(['Classic', 'Modern'] as const).map(c => (
                    <button
                      key={c}
                      onClick={() => setSelectedCategory(selectedCategory === c ? null : c)}
                      className={`text-[11px] px-2.5 py-1 rounded-full transition-all ${
                        selectedCategory === c
                          ? 'bg-brass/20 text-brass border border-brass/30'
                          : 'glass text-muted-foreground hover:text-cream'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              {/* Sort */}
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Sort</p>
                <div className="flex gap-1.5">
                  {([['name', 'A–Z'], ['difficulty', 'Easiest'], ['spirit', 'Spirit']] as const).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setSortBy(key as typeof sortBy)}
                      className={`text-[11px] px-2.5 py-1 rounded-full transition-all ${
                        sortBy === key
                          ? 'bg-brass/20 text-brass border border-brass/30'
                          : 'glass text-muted-foreground hover:text-cream'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              {hasFilters && (
                <button
                  onClick={() => { setSelectedSpirits([]); setSelectedDifficulty(null); setSelectedCategory(null); }}
                  className="flex items-center gap-1 text-[11px] text-muted-foreground hover:text-cream transition-colors"
                >
                  <X className="w-3 h-3" /> Clear filters
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tonight's Pick */}
      {!isSearching && (
        <div className="px-4 mb-6">
          <p className="text-[10px] uppercase tracking-wider text-brass mb-2 flex items-center gap-1.5">
            <Shuffle className="w-3 h-3" /> Tonight's Pick
          </p>
          <div className="max-w-[200px]">
            <CocktailCard
              cocktail={randomPick}
              onAddToList={setAddToListCocktailId}
            />
          </div>
        </div>
      )}

      {/* Section title */}
      <div className="px-4 mb-3 flex items-center justify-between">
        <h2 className="font-display text-lg text-cream">
          {isSearching ? `${filtered.length} cocktails` : (showAll ? 'All Cocktails' : 'Featured Cocktails')}
        </h2>
        {!isSearching && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[11px] text-brass hover:text-cream transition-colors"
          >
            {showAll ? 'Show Featured' : `View All ${cocktailsData.length}`}
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {displayCocktails.map((cocktail, i) => (
            <CocktailCard
              key={cocktail.id}
              cocktail={cocktail}
              index={Math.min(i, 20)}
              onAddToList={setAddToListCocktailId}
            />
          ))}
        </div>
      </div>

      {displayCocktails.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-sm">No cocktails match your criteria.</p>
          <p className="text-[11px] text-muted-foreground mt-1">Try adjusting your filters.</p>
        </div>
      )}

      <AddToListModal
        cocktailId={addToListCocktailId}
        onClose={() => setAddToListCocktailId(null)}
      />
    </div>
  );
}
