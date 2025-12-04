import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  index: number;
}

export const ProjectCard = ({ title, category, image, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white/5 border border-white/10 overflow-hidden hover:border-[#00ffaa]/50 transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
          <button className="p-2 bg-[#00ffaa] text-black rounded-full hover:scale-110 transition-transform">
            <ExternalLink size={20} />
          </button>
          <button className="p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
            <Github size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        {/* Decoration line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#00ffaa]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        
        <div className="flex justify-between items-start mb-2">
          <span className="font-mono text-xs text-[#00ffaa] px-2 py-1 bg-[#00ffaa]/10 rounded">
            {category}
          </span>
          <span className="font-mono text-xs text-gray-500">0{index + 1}</span>
        </div>
        
        <h3 className="font-mono text-xl font-bold text-white mb-2 group-hover:text-[#00ffaa] transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Generative adversarial network trained on classical architecture to produce futuristic cityscapes.
        </p>
      </div>
    </motion.div>
  );
};
