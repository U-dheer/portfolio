import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  category: 'Language' | 'Database' | 'DevOps' | 'Framework';
  level: number; // 0-100
  icon?: LucideIcon;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  metrics?: string; // e.g. "10k RPS", "50ms Latency"
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  highlights: string[];
}