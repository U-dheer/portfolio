import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Terminal } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-10 md:py-30 px-4 text-center relative overflow-hidden">
        {/* Abstract Background for Footer */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent z-[-1]" />
        
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <Terminal className="w-12 h-12 text-neon-green mx-auto mb-6 opacity-80" />
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Initialize Connection?</h2>
        <p className="text-gray-400 mb-10 text-lg">
          Currently open to discussing new opportunities in distributed systems and backend architecture.
          Ping me for a collaboration.
        </p>

        <motion.a
            href="mailto:udithadheerendra10@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-transparent border-2 border-neon-green text-neon-green font-mono font-bold rounded hover:bg-neon-green/10 transition-colors mb-16"
        >
            udithadheerendra10@gmail.com
        </motion.a>

        <div className="flex justify-center gap-8">
            <a href="https://github.com/U-dheer" className="text-gray-500 hover:text-white transition-colors">
                <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/uditha-dheerendra-934a39365/" className="text-gray-500 hover:text-white transition-colors">
                <Linkedin size={24} />
            </a>
            <a href="mailto:udithadheerendra10@gmail.com" className="text-gray-500 hover:text-white transition-colors">
                <Mail size={24} />
            </a>
        </div>
        
        <div className="mt-16 text-sm text-gray-600 font-mono">
            <p>Designed & Built by U-dheer.</p>
            <p>© 2026 U-dheer. All rights reserved.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;