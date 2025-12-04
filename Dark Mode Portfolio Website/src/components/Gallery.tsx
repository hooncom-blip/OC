import { ProjectCard } from './ProjectCard';

const PROJECTS = [
  {
    title: 'Neural Synthesis',
    category: 'AI_GENERATION',
    image: 'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMGJyYWlufGVufDF8fHx8MTc2NDIxOTA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Cyberpunk Interface',
    category: 'UI_DESIGN',
    image: 'https://images.unsplash.com/photo-1752253604157-65fb42c30816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdXNlciUyMGludGVyZmFjZSUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc2NDIxOTA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Android Dreams',
    category: 'CHARACTER_DESIGN',
    image: 'https://images.unsplash.com/photo-1675361770627-763fd7dc3e6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFuZHJvaWQlMjBwb3J0cmFpdCUyMG5lb258ZW58MXx8fHwxNzY0MjE5MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Geometric Systems',
    category: '3D_MODELING',
    image: 'https://images.unsplash.com/photo-1763926444192-08bba5ffdd46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMDNkJTIwc2hhcGVzJTIwbmVvbnxlbnwxfHx8fDE3NjQyMTkwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Digital Abstract',
    category: 'ART_DIRECTION',
    image: 'https://images.unsplash.com/photo-1648558835726-fde0a101465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwYWJzdHJhY3QlMjBhaSUyMGRpZ2l0YWwlMjBhcnR8ZW58MXx8fHwxNzY0MjE5MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Dark Mode OS',
    category: 'SYSTEM_ARCH',
    image: 'https://images.unsplash.com/photo-1645518557701-406efe2120ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWVzdGhldGljJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQyMTkwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  }
];

export const Gallery = () => {
  return (
    <section id="work" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
          <div>
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
              SELECTED_WORKS
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              // Displaying {PROJECTS.length} projects from database
            </p>
          </div>
          
          <div className="hidden md:flex gap-2">
            {['ALL', 'UI/UX', 'AI', '3D'].map(filter => (
              <button 
                key={filter}
                className="px-3 py-1 text-xs font-mono border border-white/10 text-gray-400 hover:text-[#00ffaa] hover:border-[#00ffaa] transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
