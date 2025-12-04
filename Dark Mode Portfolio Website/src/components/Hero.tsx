import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Creating intelligent interfaces for the next generation.';
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 z-10 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#00ffaa] animate-pulse" />
            <span className="font-mono text-xs text-[#00ffaa]">SYSTEM_ONLINE</span>
          </div>

          <h1 className="font-mono text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
            AI<span className="text-[#00ffaa]">.</span><br />
            DESIGNER
          </h1>

          <div className="h-24 font-mono text-gray-400 text-lg md:text-xl max-w-xl">
            <span className="text-[#00ffaa] mr-2">{'>'}</span>
            {text}
            <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} ml-1 text-[#00ffaa]`}>_</span>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="group relative px-8 py-3 bg-[#00ffaa] text-[#050505] font-mono font-bold overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                VIEW_PROJECTS <ChevronRight size={16} />
              </span>
              <div className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="px-8 py-3 border border-[#00ffaa] text-[#00ffaa] font-mono font-bold hover:bg-[#00ffaa]/10 transition-colors">
              CONTACT_ME
            </button>
          </div>
        </motion.div>

        <div className="hidden md:block relative">
          {/* Decorative elements that look like HUD/Terminal */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#00ffaa]/20 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative p-6 bg-black/40 border border-[#00ffaa]/30 backdrop-blur-md rounded-lg"
          >
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-auto font-mono text-xs text-gray-500">bash</div>
            </div>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex gap-2">
                <span className="text-[#00ffaa]">$</span>
                <span className="text-white">npm install ai-design-system</span>
              </div>
              <div className="text-gray-500">Installing packages...</div>
              <div className="text-gray-500">Analyzing neural patterns...</div>
              <div className="text-[#00ffaa]">Done in 0.42s</div>
              <div className="flex gap-2 mt-4">
                <span className="text-[#00ffaa]">$</span>
                <span className="text-white">run generate-ui --style=cyberpunk</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4 opacity-50">
                <div className="h-16 bg-[#00ffaa]/20 rounded animate-pulse" />
                <div className="h-16 bg-[#00ffaa]/10 rounded" />
                <div className="h-16 bg-[#00ffaa]/10 rounded" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
