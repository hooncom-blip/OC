import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#050505] border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-mono text-2xl font-bold text-white mb-4">AI.DESIGNER</h2>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-6">
              Crafting the intersection of artificial intelligence and human creativity. 
              Building systems that think, learn, and inspire.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00ffaa] hover:border-[#00ffaa] transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-mono text-sm font-bold text-white mb-4">sitemap</h3>
            <ul className="space-y-2 text-sm text-gray-400 font-mono">
              <li><a href="#" className="hover:text-[#00ffaa]">/home</a></li>
              <li><a href="#" className="hover:text-[#00ffaa]">/work</a></li>
              <li><a href="#" className="hover:text-[#00ffaa]">/about</a></li>
              <li><a href="#" className="hover:text-[#00ffaa]">/contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-sm font-bold text-white mb-4">status</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#00ffaa]"></span>
                <span>System Operational</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span>Processing Data...</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-gray-500">
            © 2025 AI.DESIGNER. All rights reserved.
          </p>
          <p className="font-mono text-xs text-gray-500">
            Running on Neural Net v4.2.0
          </p>
        </div>
      </div>
    </footer>
  );
};
