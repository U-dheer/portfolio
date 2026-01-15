import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import CursorTorch from './components/CursorTorch';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen font-sans text-gray-200 selection:bg-neon-green/30 selection:text-white">
      <CursorTorch />
      <AnimatedBackground />
      <Navbar />
      
      <main className="flex flex-col">
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Global Bottom Gradient Fade */}
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-900 to-transparent pointer-events-none z-40" />
    </div>
  );
}

export default App;