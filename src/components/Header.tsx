import { Terminal } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[#00ffaa]">
          <Terminal size={24} />
          <span className="font-mono text-lg font-bold tracking-tighter">AI.DESIGNER</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          {['Work', 'About', 'Services', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-mono text-sm text-gray-400 hover:text-[#00ffaa] transition-colors"
            >
              {`// ${item}`}
            </a>
          ))}
        </nav>

        <button className="px-4 py-2 font-mono text-xs text-[#050505] bg-[#00ffaa] hover:bg-[#00cc88] transition-colors rounded-sm font-bold">
          HIRE_ME_
        </button>
      </div>
    </header>
  );
};
