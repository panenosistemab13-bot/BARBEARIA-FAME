import { useState } from 'react';
import { Home, Calendar, Image as ImageIcon, User, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import HomeView from './views/HomeView';
import BookingView from './views/BookingView';
import SocialFeedView from './views/SocialFeedView';
import ProfileView from './views/ProfileView';

export type TabList = 'home' | 'booking' | 'social' | 'profile';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabList>('home');

  const renderView = () => {
    switch (activeTab) {
      case 'home': return <HomeView setActiveTab={setActiveTab} />;
      case 'booking': return <BookingView />;
      case 'social': return <SocialFeedView />;
      case 'profile': return <ProfileView />;
      default: return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-barber-dark)] overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-md mx-auto relative overflow-hidden pb-24">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.02, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full overflow-y-auto overflow-x-hidden hide-scrollbar"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Modern Bottom Navigation */}
      <nav className="fixed bottom-0 w-full z-50 flex justify-center">
        <div className="w-full max-w-md bg-[#0B0E14]/80 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex justify-between items-center rounded-t-[32px] md:mb-4 md:rounded-[32px] md:border">
          <NavItem 
            icon={<Home size={24} />} 
            label="Início" 
            isActive={activeTab === 'home'} 
            onClick={() => setActiveTab('home')} 
          />
          <NavItem 
            icon={<Calendar size={24} />} 
            label="Agenda" 
            isActive={activeTab === 'booking'} 
            onClick={() => setActiveTab('booking')} 
          />
          
          {/* Action Center Button */}
          <button 
            onClick={() => setActiveTab('booking')}
            className="relative -top-6 flex flex-col items-center justify-center p-4 rounded-full bg-gradient-to-tr from-[var(--color-barber-red)] to-[#FF6B6B] text-white shadow-2xl shadow-[var(--color-barber-red)]/40 hover:scale-105 active:scale-95 transition-all duration-300 z-10"
          >
            <Scissors size={28} className="transform -rotate-45" />
          </button>
          
          <NavItem 
            icon={<ImageIcon size={24} />} 
            label="Feed" 
            isActive={activeTab === 'social'} 
            onClick={() => setActiveTab('social')} 
          />
          <NavItem 
            icon={<User size={24} />} 
            label="Perfil" 
            isActive={activeTab === 'profile'} 
            onClick={() => setActiveTab('profile')} 
          />
        </div>
      </nav>
      
      {/* Global generic styles additions */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

function NavItem({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 transition-all duration-300 w-16",
        isActive ? "text-white" : "text-white/40 hover:text-white/70"
      )}
    >
      <div className="relative">
        <motion.div
           animate={{ 
            y: isActive ? -4 : 0, 
            scale: isActive ? 1.1 : 1 
          }}
          transition={{ duration: 0.4, ease: "backOut" }}
        >
          {icon}
        </motion.div>
        
        {isActive && (
          <motion.div 
            layoutId="nav-indicator"
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--color-barber-blue)] shadow-[0_0_8px_2px_rgba(29,53,87,0.8)]"
          />
        )}
      </div>
      <span className={cn("text-[10px] font-medium tracking-wide", isActive ? "opacity-100" : "opacity-0")}>
        {label}
      </span>
    </button>
  );
}
