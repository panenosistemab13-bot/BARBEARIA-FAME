import { motion } from 'motion/react';
import { Settings, CreditCard, Clock, Star, LogOut, ChevronRight, Bell } from 'lucide-react';

export default function ProfileView() {
  return (
    <div className="pb-12">
      {/* Profile Header */}
      <div className="relative pt-16 pb-8 px-6 flex flex-col items-center">
        {/* Background glow */}
        <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-[var(--color-barber-blue)]/30 to-transparent pointer-events-none -z-10 blur-3xl"></div>
        
        <div className="relative w-28 h-28 mb-4">
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-[var(--color-barber-dark)] relative z-10 shadow-2xl">
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=300&auto=format&fit=crop" alt="User Profile" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 rounded-full glow-blue"></div>
        </div>
        
        <h1 className="text-2xl font-bold font-display uppercase tracking-wider mb-1">Sr. Mendes</h1>
        <p className="text-white/50 text-sm mb-6">Membro VIP desde 2024</p>
        
        {/* Stats */}
        <div className="glass-panel w-full rounded-[24px] p-5 flex justify-around">
          <div className="text-center">
            <h4 className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1">Cortes</h4>
            <p className="text-2xl font-display font-medium">32</p>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <h4 className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1">Pontos</h4>
            <p className="text-2xl font-display font-medium text-[var(--color-barber-red)]">1.4k</p>
          </div>
          <div className="w-px h-10 bg-white/10"></div>
          <div className="text-center">
            <h4 className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-1">Status</h4>
            <p className="text-2xl font-display font-medium text-[#F59E0B]">Gold</p>
          </div>
        </div>
      </div>

      <div className="px-6 flex flex-col gap-6">
        <MenuSection title="Minha Conta" items={[
          { icon: <Clock size={20} />, label: 'Histórico de Agendamentos', value: '3 agendados' },
          { icon: <CreditCard size={20} />, label: 'Métodos de Pagamento', value: 'Mastercard ****' },
          { icon: <Star size={20} />, label: 'Programa de Recompensas', value: 'Resgatar' },
        ]} />

        <MenuSection title="Configurações" items={[
          { icon: <Bell size={20} />, label: 'Notificações', value: 'Ativo' },
          { icon: <Settings size={20} />, label: 'Preferências do App' },
        ]} />

        <motion.button 
          whileTap={{ scale: 0.98 }}
          className="w-full my-6 py-4 flex items-center justify-center gap-2 text-[var(--color-barber-red)] font-semibold rounded-[16px] bg-[var(--color-barber-red)]/10 hover:bg-[var(--color-barber-red)]/20 transition-colors"
        >
          <LogOut size={20} />
          <span>Encerrar Sessão</span>
        </motion.button>
      </div>
    </div>
  );
}

function MenuSection({ title, items }: { title: string, items: any[] }) {
  return (
    <section>
      <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-3 pl-2">{title}</h3>
      <div className="glass-panel border-white/5 rounded-[24px] overflow-hidden flex flex-col">
        {items.map((item, i) => (
          <motion.div 
            key={i}
            whileTap={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
            className="flex items-center justify-between p-5 border-b border-white/5 last:border-none cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="text-white/60">{item.icon}</div>
              <span className="font-medium text-[15px]">{item.label}</span>
            </div>
            <div className="flex items-center gap-3">
              {item.value && <span className="text-xs text-white/40">{item.value}</span>}
              <ChevronRight size={18} className="text-white/20" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
