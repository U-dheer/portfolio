import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Database, Cloud, Code2, Lock, Box, TerminalSquare, DatabaseZap,Cable,MonitorSmartphone,TabletSmartphone } from 'lucide-react';

const skills = [
  { name: "Node.js / TypeScript", icon: Code2, desc: "Monorepo & Microservices logic" },
  { name: "Python / FastAPI", icon: TerminalSquare, desc: "AI & RAG service orchestration." },
  { name: "SQL / NoSQL", icon: Database, desc: "PostgreSQL & MongoDB indexing" },
  { name: "Vector Stores", icon: DatabaseZap, desc: "Semantic retrieval via Pinecone." },
  { name: "Docker & K8s", icon: Box, desc: "Containerization & Orchestration" },
  { name: "Next.js / SSR", icon: MonitorSmartphone, desc: "Responsive, server-rendered UI." },
  { name: "Flutter / Bloc", icon: TabletSmartphone, desc: "Cross-platform mobile architecture." },
  { name: "Security Core", icon: Lock, desc: "JWT, RBAC, & Data encryption." },
  { name: " API Ecosystems", icon: Cable, desc: "Stripe & LLM provider integration." },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const TechStack: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-mono flex items-center gap-3">
            <span className="text-neon-blue">01.</span> THE ARSENAL
          </h2>
          <div className="h-1 w-24 bg-neon-blue/50"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative p-6 bg-dark-800 border border-white/5 hover:border-neon-blue/30 rounded-xl overflow-hidden transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex items-start justify-between mb-4">
                <skill.icon className="w-8 h-8 text-gray-400 group-hover:text-neon-blue transition-colors" />
                <span className="text-xs font-mono text-gray-600 group-hover:text-gray-400">SYS_MOD_{idx + 1}</span>
              </div>
              
              <h3 className="relative z-10 text-xl font-bold mb-2 group-hover:text-white transition-colors">{skill.name}</h3>
              <p className="relative z-10 text-gray-500 text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;