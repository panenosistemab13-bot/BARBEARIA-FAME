import { useState } from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, Droplet, ArrowRight, Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { format, addDays, startOfToday } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const services = [
  { id: '1', name: 'Corte Digital Fade', price: 'R$ 75', time: '45 min', icon: <Scissors size={20} />, color: 'var(--color-barber-blue)' },
  { id: '2', name: 'Barboterapia Ozônio', price: 'R$ 60', time: '30 min', icon: <Droplet size={20} />, color: 'var(--color-barber-red)' },
  { id: '3', name: 'Combo Supreme 2026', price: 'R$ 120', time: '1h 15m', icon: <Sparkles size={20} />, color: '#F59E0B' },
];

const timeSlots = ['09:00', '09:45', '10:30', '11:15', '13:00', '13:45', '14:30', '15:15', '16:00', '17:30', '18:15', '19:00'];

export default function BookingView() {
  const [selectedService, setSelectedService] = useState<string>('3');
  const [selectedDate, setSelectedDate] = useState<Date>(startOfToday());
  const [selectedTime, setSelectedTime] = useState<string>('14:30');
  
  const today = startOfToday();
  const nextDays = Array.from({ length: 14 }).map((_, i) => addDays(today, i));

  return (
    <div className="pb-16 pt-8 px-6">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
        <h1 className="text-4xl font-bold font-cyber tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">DATA LINK</h1>
        <p className="text-[var(--color-barber-blue)] text-xs font-mono uppercase tracking-[0.2em] mb-8">System Sync_ <span className="animate-pulse">_</span></p>
      </motion.div>

      {/* Service Selection 2050 */}
      <section className="mb-10 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-barber-blue)] glow-blue animate-pulse" />
            Módulo de Serviço
          </h3>
          <span className="text-[9px] font-mono text-[var(--color-barber-blue)] bg-[var(--color-barber-blue)]/10 px-2 py-0.5 border border-[var(--color-barber-blue)]/20 rounded">
            SELECT_
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {services.map((service) => {
            const isSelected = selectedService === service.id;
            return (
              <motion.button
                whileTap={{ scale: 0.98 }}
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={cn(
                  "p-4 rounded-[20px] border flex items-center justify-between text-left transition-all duration-300",
                  isSelected 
                    ? "bg-[#1E293B] border-[var(--color-barber-blue)] shadow-[0_0_15px_rgba(29,53,87,0.5)]" 
                    : "glass-panel border-white/5 hover:border-white/20"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn("w-12 h-12 rounded-[14px] flex items-center justify-center bg-black/40", isSelected && "glow-blue")}>
                    <div style={{ color: service.color }}>{service.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[15px]">{service.name}</h4>
                    <p className="text-white/50 text-[11px] font-medium uppercase tracking-wider">{service.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-cyber font-medium text-lg tracking-wider">{service.price}</span>
                  <div className={cn(
                    "w-6 h-6 rounded-sm border-2 flex items-center justify-center transition-all",
                    isSelected ? "border-[var(--color-barber-blue)] bg-[var(--color-barber-blue)] shadow-[0_0_10px_rgba(29,53,87,0.8)]" : "border-white/10"
                  )}>
                    {isSelected && <Check size={14} className="text-white" />}
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </section>

      {/* Date Selection 2050 Sync Calendar */}
      <section className="mb-10 mt-4 relative z-10 w-full pt-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-barber-red)] glow-red animate-pulse" />
            Parâmetros de Data
          </h3>
          <span className="text-xs font-cyber text-[var(--color-barber-red)] bg-black/40 px-2 py-1 rounded border border-[var(--color-barber-red)]/20">
             {selectedDate.getFullYear()} // SYS
          </span>
        </div>

        {/* The 2050 Timeline Holographic Picker */}
        <div className="relative w-full h-48 rounded-[24px] overflow-hidden glass-panel border border-[var(--color-barber-red)]/20 flex flex-col justify-end pb-4 group">
          {/* Futuristic Backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E14] to-black/80 pointer-events-none" />
          
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-barber-blue)]/20 rounded-full blur-[40px] transition-all duration-700 pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-32 h-32 bg-[var(--color-barber-red)]/10 rounded-full blur-[30px] transition-all duration-700 pointer-events-none" />

          {/* Futuristic Scanline */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50" />

          {/* Central Active Date Projector */}
          <div className="absolute top-6 left-6 flex items-start gap-3 pointer-events-none z-0">
             <span className="text-6xl font-cyber font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
               {format(selectedDate, 'dd')}
             </span>
             <div className="flex flex-col pt-1">
               <span className="text-sm font-bold text-[var(--color-barber-red)] uppercase tracking-[0.2em] leading-none mb-1 shadow-[var(--color-barber-red)]">
                 {format(selectedDate, 'MMM', { locale: ptBR })}
               </span>
               <span className="text-[10px] text-[var(--color-barber-blue)] uppercase tracking-[0.3em] font-mono">
                 {format(selectedDate, 'EEEE', { locale: ptBR }).split('-')[0]}
               </span>
               <div className="mt-2 h-[1px] w-12 bg-gradient-to-r from-[var(--color-barber-red)] to-transparent" />
             </div>
          </div>

          {/* Timeline Interactive Scroll */}
          <div className="w-full overflow-x-auto hide-scrollbar flex items-end px-6 gap-2 pb-2 pt-24 relative z-10 snap-x snap-mandatory">
            <div className="absolute bottom-6 left-0 right-0 h-[1px] bg-white/5 pointer-events-none" />
            {nextDays.map((date) => {
              const isSelected = date.getTime() === selectedDate.getTime();
              const day = format(date, 'dd');
              const dayName = format(date, 'eeee', { locale: ptBR }).substring(0, 3);
              const isWeekend = date.getDay() === 0 || date.getDay() === 6;
              
              return (
                <button
                  key={date.toISOString()}
                  onClick={() => setSelectedDate(date)}
                  className="snap-center relative flex flex-col items-center justify-end h-16 w-10 flex-shrink-0 group/btn"
                >
                  <span className={cn(
                    "mb-2 text-[9px] font-mono transition-all duration-300 uppercase tracking-widest",
                    isSelected ? "text-white opacity-100 -translate-y-1" : "text-white/30 opacity-0 group-hover/btn:opacity-100 group-hover/btn:-translate-y-1"
                  )}>
                    {isSelected ? dayName : day}
                  </span>
                  
                  <motion.div 
                    initial={false}
                    animate={{ 
                      height: isSelected ? '40px' : isWeekend ? '12px' : '20px',
                      backgroundColor: isSelected ? 'var(--color-barber-red)' : 'rgba(255,255,255,0.1)',
                      width: isSelected ? '4px' : '2px'
                    }}
                    className={cn(
                      "rounded-sm transition-all duration-300 z-10",
                      isSelected && "glow-red shadow-[0_0_12px_var(--color-barber-red)] mt-2"
                    )}
                  />
                  
                  {isSelected && (
                    <motion.div 
                      layoutId="timeline-glow"
                      className="absolute bottom-0 w-8 h-8 bg-[var(--color-barber-red)]/30 rounded-full blur-md pointer-events-none"
                    />
                  )}
                </button>
              )
            })}
            <div className="px-10" />
          </div>
          
          {/* Techy bottom corner accents */}
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--color-barber-red)]/50 rounded-bl-[24px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--color-barber-blue)]/50 rounded-tr-[24px] pointer-events-none" />
        </div>
      </section>

      {/* Time Selection 2050 Vector Grid */}
      <section className="mb-10 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_#F59E0B] animate-pulse" />
            Vetor de Tempo
          </h3>
          <span className="text-[10px] font-mono text-white/30 truncate">SYNC_RATE: 100%</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {timeSlots.map((time) => {
            const isSelected = selectedTime === time;
            return (
              <motion.button
                whileTap={{ scale: 0.95 }}
                key={time}
                onClick={() => setSelectedTime(time)}
                className={cn(
                  "relative py-3 rounded-none text-sm font-cyber tracking-widest transition-all duration-300 overflow-hidden",
                  isSelected 
                    ? "text-[#0B0E14] font-bold" 
                    : "bg-black/40 text-white/50 hover:text-white border border-white/5 hover:border-[var(--color-barber-blue)]/50"
                )}
              >
                {/* Background color for selected state with an angled tech design */}
                {isSelected && (
                  <motion.div 
                    layoutId="time-selected-bg"
                    className="absolute inset-0 bg-gradient-to-r from-white to-white/90 z-0 border border-white"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Tech decorations on the button */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {time}
                </span>

                {/* Cyberpunk corner cuts for unselected */}
                {!isSelected && (
                  <>
                    <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/30" />
                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/30" />
                  </>
                )}
              </motion.button>
            )
          })}
        </div>
      </section>

      {/* Submit Button 2050 */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full relative h-[65px] bg-transparent text-white font-cyber font-bold flex items-center justify-center text-sm md:text-base uppercase tracking-[0.2em] overflow-hidden group border border-white/20"
      >
        <div className="absolute inset-0 bg-[var(--color-barber-blue)]/20 clip-path-cyber transition-all duration-500 group-hover:bg-[var(--color-barber-blue)]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        
        <span className="relative z-10 flex items-center gap-3 drop-shadow-md">
          INICIALIZAR SEQUÊNCIA <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
        </span>
        
        {/* Tech Corner Details */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-white" />
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-[var(--color-barber-red)]" />
      </motion.button>
    </div>
  );
}
