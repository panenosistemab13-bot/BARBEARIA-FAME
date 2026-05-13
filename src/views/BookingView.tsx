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
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold font-display tracking-tight mb-2">Agendar</h1>
        <p className="text-white/50 text-sm mb-8">Personalize sua experiência.</p>
      </motion.div>

      {/* Services Selection */}
      <section className="mb-8">
        <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Escolha o Serviço</h3>
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
                  <span className="font-display font-medium text-lg">{service.price}</span>
                  <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                    isSelected ? "border-[var(--color-barber-blue)] bg-[var(--color-barber-blue)]" : "border-white/20"
                  )}>
                    {isSelected && <Check size={14} className="text-white" />}
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </section>

      {/* Date Selection */}
      <section className="mb-8 overflow-hidden -mx-6">
        <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4 px-6">Data</h3>
        <div className="flex overflow-x-auto hide-scrollbar px-6 gap-3 pb-4">
          {nextDays.map((date) => {
            const isSelected = date.getTime() === selectedDate.getTime();
            const dayName = format(date, 'eee', { locale: ptBR }).replace('.', '');
            const dayNumber = format(date, 'dd');
            
            return (
              <motion.button
                whileTap={{ scale: 0.9 }}
                key={date.toISOString()}
                onClick={() => setSelectedDate(date)}
                className={cn(
                  "flex-shrink-0 w-16 h-20 rounded-[18px] border flex flex-col items-center justify-center gap-1 transition-all",
                  isSelected 
                    ? "bg-[var(--color-barber-red)] border-[var(--color-barber-red)] glow-red text-white" 
                    : "glass-panel border-white/5 text-white/60 hover:text-white"
                )}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider">{dayName}</span>
                <span className="text-2xl font-display font-bold">{dayNumber}</span>
              </motion.button>
            )
          })}
          <div className="pr-6"></div>
        </div>
      </section>

      {/* Time Selection */}
      <section className="mb-10">
        <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Horário</h3>
        <div className="grid grid-cols-4 gap-3">
          {timeSlots.map((time) => {
            const isSelected = selectedTime === time;
            return (
              <motion.button
                whileTap={{ scale: 0.95 }}
                key={time}
                onClick={() => setSelectedTime(time)}
                className={cn(
                  "py-3 rounded-[14px] border text-sm font-display font-medium transition-all",
                  isSelected 
                    ? "bg-white text-black border-white" 
                    : "glass-panel border-white/5 text-white hover:border-white/30"
                )}
              >
                {time}
              </motion.button>
            )
          })}
        </div>
      </section>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full relative h-[60px] rounded-[20px] bg-white text-black font-bold flex items-center justify-center text-lg overflow-hidden group"
      >
        <span className="relative z-10 flex items-center gap-2">
          Confirmar Agendamento <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </span>
        {/* Animated background reflection for futuristic vibe */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[var(--color-barber-red)]/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      </motion.button>
    </div>
  );
}
