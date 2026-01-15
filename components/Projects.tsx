import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, GitCommit } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: "1",
    title: "Synthora: AI Microservices Hub",
    description: "A sustainability ecosystem architected with RESTful APIs for event management and donations. Features role-based access control and integrated payment processing.",
    techStack: ["NestJS", "FastAPI", "Pinecone", "LangChain", "MongoDB"],
    metrics: "< 1s Streaming via SSE",
    github: "https://github.com/U-dheer/synthora",
    link: "#"
  },
  {
    id: "2",
    title: "Earth-Bound: Sustainability Platform",
    description: "A sustainability ecosystem architected with RESTful APIs for event management and donations. Features role-based access control and integrated payment processing.",
    techStack: ["Next.js", "PostgreSQL", "Stripe API", "Passport.js"],
    metrics: "Role-Based Security (RBAC)",
    github: "https://github.com/U-dheer/earth-bound",
    link: "#"
  },
  {
    id: "3",
    title: "Gov-eCare: Digital Clinic Booking",
    description: "A secure medical management system handling patient records and prescriptions through modular backend APIs. Implemented high-security hashing and token-based access for data privacy.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT"],
    metrics: "Bcrypt-Secured Patient Data",
    github: "https://github.com/U-dheer/Gov-E-Care",
    link: "#"
  },
  {
    id: "4",
    title: "Social Media App: Mobile Architecture",
    description: "A production-ready mobile platform engineered with clean architecture and real-time news feeds. Optimized for high engagement metrics and secure session handling across devices.",
    techStack: ["Flutter", "Supabase", "Bloc"],
    metrics: "Bloc-Driven State Management",
    github: "https://github.com/U-dheer/social-media-app",
    link: "#"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative grid md:grid-cols-[1.5fr_2fr] gap-8 items-center mb-32 last:mb-0"
    >
      {/* Visual Representation (Abstract) with Parallax */}
      <motion.div 
        style={{ y, rotate }}
        className={`relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-white/10 bg-dark-800 flex items-center justify-center group-hover:border-neon-purple/50 transition-colors shadow-2xl ${index % 2 === 1 ? 'md:order-2' : ''}`}
      >
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700/20 via-dark-900 to-dark-900" />
         
         {/* Abstract Code/Terminal Visualization */}
         <div className="p-6 font-mono text-xs text-neon-green/80 bg-black/50 rounded-lg backdrop-blur-sm border border-white/5 w-3/4 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
            <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <p className="opacity-50 mb-1">// {project.title} Core Logic</p>
            <p><span className="text-purple-400">func</span> <span className="text-yellow-300">{project.title.replace(/\s+/g, '').toLowerCase()}</span>(ctx Context) <span className="text-purple-400">error</span> {'{'}</p>
            <p className="pl-4"><span className="text-purple-400">if</span> err := db.Tx(); err != nil {'{'}</p>
            <p className="pl-8">return err</p>
            <p className="pl-4">{'}'}</p>
            <p className="pl-4">go <span className="text-blue-400">AsyncAudit</span>(ctx)</p>
            <p className="pl-4">return <span className="text-purple-400">nil</span></p>
            <p>{'}'}</p>
         </div>
      </motion.div>

      {/* Content */}
      <div className={`${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
        <div className={`flex items-center gap-2 mb-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
             <span className="text-neon-purple font-mono text-sm">0{index + 1}</span>
             <span className="h-px w-12 bg-neon-purple/50"></span>
        </div>
        
        <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-neon-purple transition-colors">
          {project.title}
        </h3>

        <div className={`relative p-6 bg-dark-700/50 backdrop-blur-sm rounded-lg border border-white/5 mb-6 z-10 shadow-xl ${index % 2 === 1 ? 'ml-auto' : ''}`}>
            <p className="text-gray-300 leading-relaxed">
            {project.description}
            </p>
        </div>

        <div className={`flex flex-wrap gap-3 mb-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
            {project.techStack.map((tech) => (
                <span key={tech} className="text-xs font-mono text-gray-400 px-2 py-1 bg-white/5 rounded">
                    {tech}
                </span>
            ))}
        </div>
        
        {project.metrics && (
             <div className={`flex items-center gap-2 mb-6 text-neon-green text-sm font-mono ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
                <GitCommit size={14} />
                {project.metrics}
             </div>
        )}

        <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
            <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
            </a>
            <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink size={20} />
            </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-24"
        >
          <h2 className="text-4xl font-bold mb-4 font-mono flex items-center gap-3">
            <span className="text-neon-purple">02.</span> SELECTED WORKS
          </h2>
          <div className="h-1 w-24 bg-neon-purple/50"></div>
        </motion.div>

        <div className="relative">
             {/* Connection Line */}
             <div className="absolute left-1/2 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block "></div>
             
             {projects.map((project, index) => (
                 <ProjectCard key={project.id} project={project} index={index} />
             ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;