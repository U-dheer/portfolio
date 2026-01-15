import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building } from 'lucide-react';

const experiences = [
  {
    role: "Aspiring Full-Stack Engineer",
    company: "",
    period: "2021 - Present",
    desc: "Bridging the gap between high-performance backend engines and intuitive user interfaces. Continuously integrating AI automation and CI/CD pipelines into production-ready environments"
  },
  {
    role: "Trainee Software Engineer",
    company: "APLIY.",
    period: "2023/06 - 2023/09",
    desc: "Working under the CTO to build and maintain server-side applications using Express.js and NestJS.Focusing on backend efficiency, API security, and modern development workflows."
  },
  {
    role: "Undergraduate (BICT)",
    company: "Uva Wellassa University of Sri Lanka",
    period: "2023 - 2027",
    desc: "Developing foundational expertise in distributed systems and software architecture."
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 relative z-10 bg-dark-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-mono flex items-center gap-3">
            <span className="text-neon-green">03.</span> EXECUTION LOG
          </h2>
          <div className="h-1 w-24 bg-neon-green/50"></div>
        </motion.div>

        <div className="space-y-12">
            {experiences.map((exp, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-8 border-l border-white/10 hover:border-neon-green/50 transition-colors"
                >
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-dark-800 border border-neon-green" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <span className="font-mono text-sm text-neon-green flex items-center gap-2">
                             <Calendar size={14} />
                             {exp.period}
                        </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400 mb-4 text-sm font-mono">
                        <Building size={14} />
                        {exp.company}
                    </div>
                    
                    <p className="text-gray-400 max-w-2xl leading-relaxed">
                        {exp.desc}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;