import { NavLink, useLocation } from 'react-router-dom';
import { Search, Heart, ChefHat, ArrowLeftRight, ShoppingCart, User, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const navItems = [
  { to: '/', icon: Search, label: 'Library' },
  { to: '/ingredients', icon: ChefHat, label: 'My Bar' },
  { to: '/substitutions', icon: ArrowLeftRight, label: 'Swaps' },
  { to: '/shopping', icon: ShoppingCart, label: 'Shop' },
  { to: '/saved', icon: Heart, label: 'Saved' },
];

export default function BottomNav() {
  const location = useLocation();
  const { user } = useAuth();

  // Hide nav on auth page
  if (location.pathname === '/auth') return null;

  const profileItem = user
    ? { to: '/profile', icon: User, label: 'Profile' }
    : { to: '/auth', icon: LogIn, label: 'Login' };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-strong border-t border-white/10">
      <div className="max-w-lg mx-auto flex items-center justify-around py-2 px-4">
        {[...navItems, profileItem].map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <NavLink
              key={to}
              to={to}
              className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg transition-colors ${
                isActive ? 'text-brass' : 'text-muted-foreground hover:text-cream'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] tracking-wider uppercase">{label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
