import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { NeuralNetworkBackground } from './components/NeuralNetworkBackground';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00ffaa] selection:text-black font-sans">
      <NeuralNetworkBackground />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Gallery />
          
          {/* About Section - Simple glass card */}
          <section id="about" className="py-24 px-6">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl relative overflow-hidden">
                 {/* Decorative bg */}
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ffaa]/10 rounded-full blur-[80px] pointer-events-none" />
                 
                 <h2 className="font-mono text-3xl font-bold mb-6">ABOUT_THE_ARCHITECT</h2>
                 <div className="grid md:grid-cols-2 gap-8 items-center">
                   <div className="space-y-4 text-gray-300 leading-relaxed">
                     <p>
                       I am a digital artisan specializing in the convergence of algorithmic design and human experience. 
                       My work explores the boundaries between code and creativity.
                     </p>
                     <p>
                       With a background in machine learning and visual arts, I create systems that don't just function—they feel.
                     </p>
                   </div>
                   
                   <div className="space-y-4 font-mono text-sm">
                     <div className="flex justify-between border-b border-white/10 pb-2">
                       <span className="text-gray-500">Location</span>
                       <span>Neo Tokyo, Digital Space</span>
                     </div>
                     <div className="flex justify-between border-b border-white/10 pb-2">
                       <span className="text-gray-500">Experience</span>
                       <span>5 Years</span>
                     </div>
                     <div className="flex justify-between border-b border-white/10 pb-2">
                       <span className="text-gray-500">Specialty</span>
                       <span className="text-[#00ffaa]">Neural UI / GenAI</span>
                     </div>
                     <div className="flex justify-between border-b border-white/10 pb-2">
                       <span className="text-gray-500">Status</span>
                       <span className="text-[#00ffaa]">Available for Hire</span>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </div>
  );
}
