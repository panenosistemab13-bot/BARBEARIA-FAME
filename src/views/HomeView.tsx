import { motion } from 'motion/react';
import { MapPin, Star, Clock, ChevronRight } from 'lucide-react';

interface HomeViewProps {
  setActiveTab: (tab: 'home' | 'booking' | 'social' | 'profile') => void;
}

export default function HomeView({ setActiveTab }: HomeViewProps) {
  return (
    <div className="pb-8">
      {/* Dynamic Header */}
      <header className="px-6 pt-12 pb-6 flex justify-between items-center glass-panel sticky top-0 z-40 border-b border-white/5 rounded-b-3xl">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white/60 text-sm font-medium uppercase tracking-widest mb-1"
          >
            Bem-vindo de volta
          </motion.h2>
          <motion.h1 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.1 }}
             className="text-3xl font-bold font-display text-white tracking-tight"
          >
            Sr. Mendes
          </motion.h1>
        </div>
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 glow-blue">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-[var(--color-barber-red)] rounded-full border-2 border-[var(--color-barber-dark)]"></div>
        </div>
      </header>

      {/* Hero Highlight Card */}
      <div className="px-6 mt-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative w-full h-[220px] rounded-[32px] overflow-hidden group cursor-pointer"
          onClick={() => setActiveTab('booking')}
        >
          {/* Background image */}
          <div className="absolute inset-0">
             <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop" alt="Barbershop" className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/60 to-transparent"></div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 flex justify-between items-end">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-semibold text-white">4.9 Excellence</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Corte & Barba</h3>
              <p className="text-white/70 text-sm">O combo definitivo para 2026.</p>
            </div>
            
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[var(--color-barber-red)] group-hover:border-[var(--color-barber-red)] transition-colors">
              <ChevronRight size={24} className="text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social / Trend Highlights - Horizontal Scroll */}
      <div className="mt-10 mb-6">
        <div className="px-6 flex justify-between items-end mb-4">
          <h3 className="text-xl font-bold tracking-tight">Trends do Mês</h3>
          <button onClick={() => setActiveTab('social')} className="text-sm font-medium text-[var(--color-barber-red)] uppercase tracking-wider">Ver Feed</button>
        </div>
        
        <div className="flex overflow-x-auto hide-scrollbar pl-6 gap-4 pb-4">
          <TrendCard img="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=400&auto=format&fit=crop" title="Fade Digital" tags={['#skin', '#modern']} />
          <TrendCard img="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=400&auto=format&fit=crop" title="Neo Classic" tags={['#classic', '#beard']} />
          <TrendCard img="https://images.unsplash.com/photo-1593702288056-ccdeeb26d36e?q=80&w=400&auto=format&fit=crop" title="Cyber Mullet" tags={['#2026', '#edgy']} />
          <div className="pr-6"></div>
        </div>
      </div>

      {/* Quick Info Grid */}
      <div className="px-6 grid grid-cols-2 gap-4 mt-4">
        <div className="glass-panel p-5 rounded-[24px] flex flex-col gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--color-barber-blue)]/20 flex items-center justify-center">
            <Clock size={20} className="text-[#4D90FE]" />
          </div>
          <div>
            <p className="text-white/50 text-xs text-uppercase tracking-wider font-semibold mb-1">Próximo Horário</p>
            <p className="text-lg font-bold text-white">Amanhã, 14:30</p>
          </div>
        </div>
        
        <div className="glass-panel p-5 rounded-[24px] flex flex-col gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--color-barber-red)]/20 flex items-center justify-center">
            <MapPin size={20} className="text-[#FF6B6B]" />
          </div>
          <div>
            <p className="text-white/50 text-xs text-uppercase tracking-wider font-semibold mb-1">Unidade</p>
            <p className="text-lg font-bold text-white">Downtown XP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendCard({ img, title, tags }: { img: string, title: string, tags: string[] }) {
  return (
    <motion.div 
      whileTap={{ scale: 0.95 }}
      className="min-w-[140px] h-[200px] relative rounded-[24px] overflow-hidden flex-shrink-0"
    >
      <img src={img} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3">
        <h4 className="font-bold text-white text-sm mb-1">{title}</h4>
        <div className="flex flex-wrap gap-1">
          {tags.map(tag => (
            <span key={tag} className="text-[9px] font-medium text-white/80 bg-white/10 rounded-sm px-1.5 py-0.5">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
