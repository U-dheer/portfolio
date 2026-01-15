import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <div className="backdrop-blur-md bg-dark-800/80 border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('hero')}>
          <Terminal className="w-5 h-5 text-neon-green" />
          <span className="font-mono font-bold text-sm tracking-wider">DEV.LOG</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
          <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">Stack</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">Works</button>
          <button onClick={() => scrollTo('experience')} className="hover:text-white transition-colors">Logs</button>
        </div>

        <button 
            onClick={() => scrollTo('contact')}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold transition-all border border-white/5"
        >
          CONNECT
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;