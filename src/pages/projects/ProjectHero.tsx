import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";
import React from "react";

const ProjectHero: React.FC = () => (
  <div className="relative pt-16 pb-10 text-center overflow-hidden">
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 55% 40% at 50% 0%, rgba(34,197,94,0.07) 0%, transparent 70%)' }}
    />
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
    />
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-green-500/10 border border-green-500/20 text-green-300 mb-5">
        <FlaskConical className="h-3 w-3" /> Portfolio
      </span>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Project Showcase</h1>
      <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
        AI-powered solutions in{' '}
        <span className="text-green-300 font-medium">Data Science</span>,{' '}
        <span className="text-emerald-300 font-medium">Machine Learning</span>, and{' '}
        <span className="text-cyan-300 font-medium">Artificial Intelligence</span>{' '}
        — built to transform healthcare across Africa.
      </p>
    </motion.div>
  </div>
);

export default ProjectHero;
