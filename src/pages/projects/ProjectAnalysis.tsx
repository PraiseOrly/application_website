import React from 'react';
import { Card } from './ProjectCard';
import { BarChart3, Brain, Zap } from 'lucide-react';

interface Analysis {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProjectAnalysisProps {
  analysis: Analysis[];
}

const ProjectAnalysis: React.FC<ProjectAnalysisProps> = ({ analysis }) => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-gray-800 text-white rounded-2xl">
      <h4 className="text-2xl font-extrabold text-center bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text text-transparent mb-8">
        Project Analysis
      </h4>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {analysis.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-teal-500/30 p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4">{item.icon}</div>
            <h5 className="text-xl font-semibold text-white mb-2">{item.title}</h5>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectAnalysis;
