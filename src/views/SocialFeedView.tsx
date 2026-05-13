import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle, Share2, MoreHorizontal, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function SocialFeedView() {
  const posts = [
    {
      id: 1,
      barber: 'Cyber.Cuts',
      barberImg: 'https://images.unsplash.com/photo-1520338661084-680395057c93?q=80&w=150&auto=format&fit=crop',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
      caption: 'Aquele mid-fade desconectado que é a cara de 2026.🔥 Agende seu horário!',
      likes: 342,
      time: '2h'
    },
    {
      id: 2,
      barber: 'Lounge.Barber',
      barberImg: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=150&auto=format&fit=crop',
      image: 'https://images.unsplash.com/photo-1532710093739-9470ac0013b0?q=80&w=800&auto=format&fit=crop',
      caption: 'Textura é a palavra-chave. #Beard #Grooming',
      likes: 89,
      time: '5h'
    },
    {
      id: 3,
      barber: 'NeoClassic',
      barberImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
      image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop',
      caption: 'Barboterapia com toalha quente e ozônio. A excelência em relaxamento. 💈',
      likes: 512,
      time: '12h'
    }
  ];

  return (
    <div className="pb-10">
      <header className="px-6 pt-12 pb-4 sticky top-0 z-40 bg-[var(--color-barber-dark)]/90 backdrop-blur-xl border-b border-white/5">
        <h1 className="text-2xl font-bold font-display uppercase tracking-wider flex items-center gap-2">
          B.CLASS<span className="text-[var(--color-barber-red)]">FEED</span>
        </h1>
        <p className="text-white/50 text-xs font-semibold tracking-widest mt-1 uppercase">Inspirações e Estilos</p>
      </header>

      <div className="mt-4 flex flex-col gap-6">
        {posts.map((post, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={post.id} 
            className="w-full"
          >
            {/* Header Post */}
            <div className="flex items-center justify-between px-6 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 p-0.5">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img src={post.barberImg} alt={post.barber} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight flex items-center gap-1">
                    {post.barber}
                    <CheckCircle2 size={12} className="text-[var(--color-barber-blue)] fill-[#4D90FE]" />
                  </h4>
                  <p className="text-[10px] text-white/50">{post.time} ago</p>
                </div>
              </div>
              <button className="text-white/50 hover:text-white">
                <MoreHorizontal size={20} />
              </button>
            </div>

            {/* Image full width */}
            <div className="w-full aspect-[4/5] bg-black/20">
              <img src={post.image} alt="Corte" className="w-full h-full object-cover" />
            </div>

            {/* Actions */}
            <div className="px-6 py-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <HeartButton likes={post.likes} />
                  <button className="text-white/80 hover:text-white transition-colors">
                    <MessageCircle size={24} className="stroke-[1.5]" />
                  </button>
                  <button className="text-white/80 hover:text-[var(--color-barber-blue)] transition-colors">
                    <Share2 size={24} className="stroke-[1.5]" />
                  </button>
                </div>
              </div>
              
              <div className="text-sm font-bold mb-1">{post.likes.toLocaleString()} curtições</div>
              <p className="text-sm leading-relaxed">
                <span className="font-bold mr-2">{post.barber}</span>
                <span className="text-white/80">{post.caption}</span>
              </p>
            </div>
            
            <div className="px-6">
              <div className="h-px w-full bg-white/5"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function HeartButton({ likes }: { likes: number }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(likes);

  const toggle = () => {
    setLiked(!liked);
    setCount(c => liked ? c - 1 : c + 1);
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.8 }}
      onClick={toggle}
      className={cn(
        "transition-colors",
        liked ? "text-[var(--color-barber-red)]" : "text-white/80 hover:text-white"
      )}
    >
      <Heart size={24} className={cn("stroke-[1.5]", liked && "fill-current")} />
    </motion.button>
  );
}
