import React from 'react';
import { Card } from './ProjectCard';

interface Insight {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProjectInsightsProps {
  insights: Insight[];
}

const ProjectInsights: React.FC<ProjectInsightsProps> = ({ insights }) => {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 to-indigo-900 text-white rounded-2xl">
      <h4 className="text-2xl font-extrabold text-center bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text text-transparent mb-8">
        Project Insights
      </h4>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((item, idx) => (
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

export default ProjectInsights;
