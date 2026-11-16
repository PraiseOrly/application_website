import { BrainCircuit, FlaskConical, Rocket, Stethoscope, type LucideIcon } from 'lucide-react';

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
  accentColor: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  tagBg: string;
  tagText: string;
  tagBorder: string;
}

export const skillsData: SkillCategory[] = [
  {
    category: 'AI Development',
    icon: BrainCircuit,
    description: 'Building intelligent systems that learn, adapt, and deliver clinical-grade diagnostic results.',
    skills: ['Machine Learning', 'Deep Learning (CNN/RNN)', 'Predictive Modeling', 'Natural Language Processing', 'Explainable AI', 'Model Evaluation'],
    accentColor: '#14B8A6',
    borderColor: 'border-teal-500/20',
    bgColor: 'bg-teal-500/[0.04]',
    textColor: 'text-teal-300',
    tagBg: 'bg-teal-500/10',
    tagText: 'text-teal-200',
    tagBorder: 'border-teal-500/18',
  },
  {
    category: 'Health Data Systems',
    icon: Stethoscope,
    description: 'Designing data platforms and diagnostic tools for resource-constrained health programmes.',
    skills: ['ECG Analysis', 'Clinical Decision Support', 'Healthcare Data Pipelines', 'Monitoring and Evaluation Dashboards', 'Database Design (PostgreSQL, MySQL)', 'Data Quality and Governance'],
    accentColor: '#06B6D4',
    borderColor: 'border-cyan-500/20',
    bgColor: 'bg-cyan-500/[0.04]',
    textColor: 'text-cyan-300',
    tagBg: 'bg-cyan-500/10',
    tagText: 'text-cyan-200',
    tagBorder: 'border-cyan-500/18',
  },
  {
    category: 'Technical Leadership',
    icon: Rocket,
    description: 'Leading teams, driving roadmaps, and delivering measurable impact at organizational scale.',
    skills: ['Project Management', 'Team Mentorship', 'Technical Roadmapping', 'Stakeholder Engagement', 'Agile Methodologies', 'Workshop Facilitation'],
    accentColor: '#8B5CF6',
    borderColor: 'border-violet-500/20',
    bgColor: 'bg-violet-500/[0.04]',
    textColor: 'text-violet-300',
    tagBg: 'bg-violet-500/10',
    tagText: 'text-violet-200',
    tagBorder: 'border-violet-500/18',
  },
  {
    category: 'Research & Innovation',
    icon: FlaskConical,
    description: 'Translating rigorous academic research into practical, deployable AI solutions for real-world impact.',
    skills: ['Research Ethics Approval', 'User Research with Clinicians', 'Co-design Workshops', 'Data Analysis', 'Prototype Development', 'Scientific Writing'],
    accentColor: '#4B5EAA',
    borderColor: 'border-indigo-500/20',
    bgColor: 'bg-indigo-500/[0.04]',
    textColor: 'text-indigo-300',
    tagBg: 'bg-indigo-500/10',
    tagText: 'text-indigo-200',
    tagBorder: 'border-indigo-500/18',
  },
];
