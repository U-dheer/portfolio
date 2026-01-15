import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowDown, Database, Server } from "lucide-react";

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse tracking for flashlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create a template string for the mask gradient
  const [maskStyle, setMaskStyle] = useState(
    "radial-gradient(circle 250px at 50% 50%, black 10%, transparent 100%)"
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get relative coordinates if needed, but clientX/Y works well for fixed/full screen
      const x = e.clientX;
      const y = e.clientY + window.scrollY; // Account for scroll if the image moves, but for fixed mask we usually use clientX/Y.
      // However, since the Hero is at the top and the image is absolute, we can use clientX/Y relative to the viewport if the image is fixed,
      // or relative to the element.
      // For a "torch" that feels attached to the cursor, client coordinates are best combined with a fixed or absolute overlay.

      // Let's simply update the CSS string directly for the mask
      // Note: "black" in mask-image makes it visible, "transparent" hides it.
      const newStyle = `radial-gradient(circle 600px at ${e.clientX}px ${e.clientY}px, black 20%, transparent 100%)`;
      setMaskStyle(newStyle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden bg-dark-900"
    >
      {/* 1. Base Background (Dark) - Already provided by body/parent, but explicit here for layering */}
      <div className="absolute inset-0 bg-dark-900 z-0" />

      {/* 2. The Hidden Image Layer (Revealed by Mask) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          backgroundImage:
            'url("/images/portf.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.6, // Slightly dimmed even when revealed so text pops
          WebkitMaskImage: maskStyle,
          maskImage: maskStyle,
        }}
      />

      {/* 3. Decorative Background Elements Parallax */}
      <motion.div
        style={{ y: y1, opacity: 0.2 }}
        className="absolute left-[10%] top-[20%] text-neon-blue z-0 md:block hidden"
      >
        <Database size={64} />
      </motion.div>
      <motion.div
        style={{ y: y2, opacity: 0.1 }}
        className="absolute right-[15%] bottom-[30%] text-neon-purple z-0 md:block hidden"
      >
        <Server size={96} />
      </motion.div>

      {/* 4. Content */}
      <div className="max-w-5xl mx-auto z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5  mt-6 mb-3 md:mt-0 md:mb-0 rounded-full border border-neon-green/30 bg-black/60 backdrop-blur-md"
        >
          <span className="font-mono text-neon-green text-sm">
            System Status: Online
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-8xl font-bold tracking-tight mb-4 drop-shadow-2xl "
        ><span className=" text-4xl font-light"> Designing the</span> <br />
        <span className="text-neon-green">Logic </span> Behind the
       
       <br />
       <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400"> Interface</span>
          
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-300  text-sm md:text-xl lg:max-w-2xl max-w-[340px]  mx-auto leading-relaxed drop-shadow-lg"
        >
          Full-Stack Engineer specializing in scalable microservices, AI-driven
          automation, and robust backend architectures. I build the logic that
          bridges complex data with seamless user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8  md:w-auto flex md:flex-row flex-col flex justify-center item-center gap-2 md:gap-6"
        >
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/5">
            <span className="font-mono text-3xl font-bold text-white">
              99.90%
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">
              Autodidacticism
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/5">
            <span className="font-mono text-3xl font-bold text-white">14+</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">
              Projects
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-black/20 backdrop-blur-sm border border-white/5">
            <span className="font-mono text-3xl font-bold text-white">1+</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest">
              Experience
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="animate-bounce text-gray-500">
          <ArrowDown size={24} />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
