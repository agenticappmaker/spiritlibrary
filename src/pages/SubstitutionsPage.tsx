import { useState, useMemo } from 'react';
import { Search, ArrowRight, Sparkles, ArrowLeftRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { searchSubstitutions, getAllSubstitutions, type Substitution } from '@/data/substitutions';

const qualityColors = {
  excellent: 'bg-green-800/60 text-green-300 border-green-600/30',
  good: 'bg-yellow-800/60 text-yellow-300 border-yellow-600/30',
  acceptable: 'bg-muted/60 text-muted-foreground border-border/30',
};

const qualityLabels = {
  excellent: 'Excellent',
  good: 'Good',
  acceptable: 'Okay',
};

function SubstitutionCard({ sub }: { sub: Substitution }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-surface-elevated rounded-xl border border-border/30 overflow-hidden"
    >
      <div className="px-4 py-3 border-b border-border/20 flex items-center gap-2">
        <ArrowLeftRight className="w-4 h-4 text-brass" />
        <h3 className="font-display text-base text-cream capitalize">{sub.ingredient}</h3>
        <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground">{sub.category}</span>
      </div>
      <div className="p-3 space-y-2">
        {sub.substitutes.map((s, i) => (
          <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-background/50 border border-border/10">
            <ArrowRight className="w-3.5 h-3.5 text-brass mt-0.5 shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-cream">{s.name}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full border font-medium ${qualityColors[s.quality]}`}>
                  {qualityLabels[s.quality]}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{s.notes}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SubstitutionsPage() {
  const [query, setQuery] = useState('');
  const allSubs = useMemo(() => getAllSubstitutions(), []);

  const results = useMemo(() => {
    if (!query || query.length < 2) return allSubs;
    return searchSubstitutions(query);
  }, [query, allSubs]);

  // Group results by category
  const grouped = useMemo(() => {
    const groups: Record<string, Substitution[]> = {};
    results.forEach(r => {
      if (!groups[r.category]) groups[r.category] = [];
      groups[r.category].push(r);
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [results]);

  return (
    <div className="min-h-screen pb-24">
      <header className="pt-12 pb-6 px-4 text-center">
        <h1 className="font-display text-3xl sm:text-4xl text-cream tracking-tight">Substitutions</h1>
        <p className="text-muted-foreground text-sm mt-1">Missing an ingredient? Find out what you can use instead.</p>
      </header>

      {/* Search */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search an ingredient (e.g. cointreau, campari, egg white)..."
            className="w-full bg-surface-elevated rounded-lg pl-10 pr-4 py-3 text-sm text-cream placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brass/50 transition-all"
          />
        </div>
        {query.length >= 2 && (
          <p className="text-[11px] text-muted-foreground mt-2 px-1">
            {results.length} {results.length === 1 ? 'result' : 'results'} found
          </p>
        )}
      </div>

      {/* Results grouped by category */}
      <div className="px-4 space-y-6">
        <AnimatePresence mode="wait">
          {grouped.map(([category, subs]) => (
            <div key={category}>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-brass" />
                <h2 className="text-[11px] uppercase tracking-wider text-brass font-medium">{category}</h2>
                <div className="flex-1 h-px bg-border/30" />
              </div>
              <div className="space-y-3">
                {subs.map(sub => (
                  <SubstitutionCard key={sub.ingredient} sub={sub} />
                ))}
              </div>
            </div>
          ))}
        </AnimatePresence>

        {results.length === 0 && query.length >= 2 && (
          <div className="text-center py-16">
            <ArrowLeftRight className="w-10 h-10 text-brass/30 mx-auto mb-3" />
            <p className="text-muted-foreground text-sm">No substitutions found for "{query}".</p>
            <p className="text-[11px] text-muted-foreground mt-1">Try a different ingredient name.</p>
          </div>
        )}
      </div>
    </div>
  );
}
