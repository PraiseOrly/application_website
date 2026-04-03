import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3, Brain, Database, FlaskConical, Cpu, X, ExternalLink,
  ChevronRight, Activity, Heart, Stethoscope, Globe, AlertTriangle,
  Zap, Pill, TrendingUp, Dna, Sparkles,
} from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  status: 'Completed' | 'In Progress';
  icon: React.ReactNode;
  githubUrl?: string;
}

interface Category {
  id: string;
  label: string;
  tagline: string;
  accentColor: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  tagBg: string;
  tagText: string;
  tagBorder: string;
  headerIcon: React.ReactNode;
  projects: Project[];
}

const categories: Category[] = [
  {
    id: 'data-science',
    label: 'Data Science',
    tagline: 'Exploratory analysis & statistical insights from complex healthcare datasets.',
    accentColor: '#14B8A6',
    borderColor: 'border-teal-500/20',
    bgColor: 'bg-teal-500/[0.04]',
    textColor: 'text-teal-300',
    tagBg: 'bg-teal-500/10',
    tagText: 'text-teal-200',
    tagBorder: 'border-teal-500/15',
    headerIcon: <Database className="h-5 w-5" />,
    projects: [
      {
        title: 'Drugs, Side Effects & Medical Conditions Analysis',
        description: 'Comprehensive analysis of drug interactions, side effects, and associated medical conditions using large-scale pharmaceutical datasets to uncover critical health patterns and risk correlations.',
        techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'NLP', 'Statistical Analysis'],
        status: 'Completed',
        icon: <Pill className="h-5 w-5 text-teal-400" />,
      },
      {
        title: 'COVID-19 Clinical Trials Analysis',
        description: 'In-depth exploration of global COVID-19 clinical trial data — identifying treatment trends, trial success rates, phase distributions, and geographic research concentration.',
        techStack: ['Python', 'Pandas', 'Plotly', 'Seaborn', 'Statistical Analysis'],
        status: 'Completed',
        icon: <FlaskConical className="h-5 w-5 text-teal-400" />,
      },
    ],
  },
  {
    id: 'data-analysis',
    label: 'Data Analysis',
    tagline: 'Deep-dive risk factor studies using real-world clinical and population datasets.',
    accentColor: '#06B6D4',
    borderColor: 'border-cyan-500/20',
    bgColor: 'bg-cyan-500/[0.04]',
    textColor: 'text-cyan-300',
    tagBg: 'bg-cyan-500/10',
    tagText: 'text-cyan-200',
    tagBorder: 'border-cyan-500/15',
    headerIcon: <BarChart3 className="h-5 w-5" />,
    projects: [
      {
        title: 'Heart Disease Risk Factor Exploration',
        description: 'Systematic analysis of cardiovascular risk factors — including age, cholesterol, blood pressure, and lifestyle variables — to identify early warning patterns and key predictors of heart disease.',
        techStack: ['Python', 'Pandas', 'Seaborn', 'Scikit-learn', 'Matplotlib', 'EDA'],
        status: 'Completed',
        icon: <Heart className="h-5 w-5 text-cyan-400" />,
      },
      {
        title: 'Cancer Risk Factor Analysis',
        description: 'Exploratory study of demographic, genetic, and environmental risk factors across multiple cancer types, providing data-driven insights to support early detection and prevention strategies.',
        techStack: ['Python', 'Pandas', 'Matplotlib', 'NumPy', 'Statistical Tests'],
        status: 'Completed',
        icon: <Dna className="h-5 w-5 text-cyan-400" />,
      },
    ],
  },
  {
    id: 'machine-learning',
    label: 'Machine Learning',
    tagline: 'Predictive and recommender models trained on clinical data for preventive care.',
    accentColor: '#8B5CF6',
    borderColor: 'border-violet-500/20',
    bgColor: 'bg-violet-500/[0.04]',
    textColor: 'text-violet-300',
    tagBg: 'bg-violet-500/10',
    tagText: 'text-violet-200',
    tagBorder: 'border-violet-500/15',
    headerIcon: <Brain className="h-5 w-5" />,
    projects: [
      {
        title: 'Heart Disease Prediction',
        description: 'Supervised ML model using clinical biomarkers and patient features to predict heart disease likelihood with high sensitivity, designed for early clinical screening and decision support.',
        techStack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Feature Engineering'],
        status: 'Completed',
        icon: <Activity className="h-5 w-5 text-violet-400" />,
      },
      {
        title: 'Stroke Risk Prediction',
        description: 'Classification model predicting stroke risk from patient health and lifestyle data, achieving AUC >0.85 with SHAP-based interpretability for transparent clinical use.',
        techStack: ['Python', 'Scikit-learn', 'SHAP', 'Flask', 'Pandas', 'XGBoost'],
        status: 'Completed',
        icon: <AlertTriangle className="h-5 w-5 text-violet-400" />,
      },
      {
        title: 'Personalized Medicine Recommender System',
        description: 'Hybrid collaborative and content-based filtering system generating personalized treatment recommendations aligned with individual patient profiles and medical histories.',
        techStack: ['Python', 'Scikit-learn', 'Surprise', 'FastAPI', 'PostgreSQL', 'Redis'],
        status: 'Completed',
        icon: <Stethoscope className="h-5 w-5 text-violet-400" />,
      },
      {
        title: 'Heart Disease Prediction with Recommendation Model',
        description: 'End-to-end pipeline combining heart disease risk prediction with a follow-up recommendation engine for personalized preventive care plans and lifestyle guidance.',
        techStack: ['Python', 'XGBoost', 'Scikit-learn', 'Streamlit', 'Pandas'],
        status: 'Completed',
        icon: <TrendingUp className="h-5 w-5 text-violet-400" />,
      },
    ],
  },
  {
    id: 'artificial-intelligence',
    label: 'Artificial Intelligence',
    tagline: 'Deep learning and AI systems for advanced diagnostics and epidemiological intelligence.',
    accentColor: '#4B5EAA',
    borderColor: 'border-indigo-500/20',
    bgColor: 'bg-indigo-500/[0.04]',
    textColor: 'text-indigo-300',
    tagBg: 'bg-indigo-500/10',
    tagText: 'text-indigo-200',
    tagBorder: 'border-indigo-500/15',
    headerIcon: <Cpu className="h-5 w-5" />,
    projects: [
      {
        title: 'ECG Arrhythmia Detection',
        description: 'CNN-based deep learning model for detecting cardiac arrhythmias in 12-lead ECG recordings, achieving 96% accuracy on the PTB-XL dataset with Grad-CAM visualizations for clinical interpretability.',
        techStack: ['PyTorch', 'TensorFlow', 'OpenCV', 'Grad-CAM', 'Matplotlib', 'Scikit-learn'],
        status: 'Completed',
        icon: <Zap className="h-5 w-5 text-indigo-400" />,
      },
      {
        title: 'Disease Outbreak Prediction',
        description: 'Time-series and epidemiological model leveraging historical outbreak data, environmental signals, and demographic indicators to predict and map potential disease surges across regions.',
        techStack: ['Python', 'Prophet', 'Scikit-learn', 'GeoPandas', 'Plotly', 'FastAPI'],
        status: 'In Progress',
        icon: <Globe className="h-5 w-5 text-indigo-400" />,
      },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProjectDetailModal: React.FC<{
  project: Project | null; category: Category | null; onClose: () => void;
}> = ({ project, category, onClose }) => {
  if (!project || !category) return null;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
      onClick={onClose}>
      <motion.div initial={{ scale: 0.93, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 210, damping: 24 }}
        className="bg-gray-950 border rounded-2xl p-7 max-w-2xl w-full relative shadow-2xl"
        style={{ borderColor: `${category.accentColor}20` }}
        onClick={(e) => e.stopPropagation()}>
        <div className="absolute top-0 left-0 w-full h-px rounded-t-2xl"
          style={{ background: `linear-gradient(to right, transparent, ${category.accentColor}60, transparent)` }} />
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-600 hover:text-white hover:bg-white/8 transition-all duration-200">
          <X className="h-5 w-5" />
        </button>
        <div className="flex items-start gap-4 mb-5">
          <div className="p-2.5 rounded-xl shrink-0"
            style={{ background: `${category.accentColor}15`, border: `1px solid ${category.accentColor}25` }}>
            {project.icon}
          </div>
          <div>
            <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold border tracking-widest uppercase mb-2 ${category.tagBg} ${category.tagText} ${category.tagBorder}`}>
              {category.label}
            </span>
            <h3 className="text-white font-bold text-xl leading-snug">{project.title}</h3>
          </div>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.description}</p>
        <div>
          <p className="text-xs font-semibold tracking-widest text-gray-600 uppercase mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className={`px-3 py-1 rounded-full text-xs font-medium border ${category.tagBg} ${category.tagText} ${category.tagBorder}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-white/5 flex items-center justify-between">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
            project.status === 'Completed'
              ? 'bg-teal-500/10 text-teal-300 border-teal-500/20'
              : 'bg-amber-500/10 text-amber-300 border-amber-500/20'
          }`}>
            {project.status}
          </span>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors duration-200">
              <ExternalLink className="h-3.5 w-3.5" /> View on GitHub
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<{ project: Project; category: Category } | null>(null);

  return (
    <div className="w-full text-white" style={{ background: 'linear-gradient(to bottom, #030712, #060c1a, #030712)' }}>

      {/* Header */}
      <div className="relative pt-20 pb-12 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 55% 40% at 50% 0%, rgba(20,184,166,0.07) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-500/10 border border-teal-500/20 text-teal-300 mb-5">
            <Sparkles className="h-3 w-3" /> Portfolio
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Project Showcase</h1>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            AI-powered solutions in{' '}
            <span className="text-teal-300 font-medium">Data Science</span>,{' '}
            <span className="text-cyan-300 font-medium">Machine Learning</span>, and{' '}
            <span className="text-indigo-300 font-medium">Artificial Intelligence</span>{' '}
            — built to transform healthcare across Africa.
          </p>
        </motion.div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
        {categories.map((cat, catIdx) => (
          <motion.div key={cat.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: catIdx * 0.05 }}>

            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-2.5 rounded-xl border"
                style={{ background: `${cat.accentColor}12`, borderColor: `${cat.accentColor}25`, color: cat.accentColor }}>
                {cat.headerIcon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  <h2 className={`text-xl font-bold ${cat.textColor}`}>{cat.label}</h2>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${cat.tagBg} ${cat.tagText} ${cat.tagBorder}`}>
                    {cat.projects.length} project{cat.projects.length > 1 ? 's' : ''}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-0.5">{cat.tagline}</p>
              </div>
              <div className="hidden sm:block h-px flex-1 max-w-[120px]"
                style={{ background: `linear-gradient(to right, ${cat.accentColor}30, transparent)` }} />
            </div>

            {/* Cards */}
            <div className={`grid gap-5 ${
              cat.projects.length === 2 ? 'md:grid-cols-2' :
              cat.projects.length === 3 ? 'md:grid-cols-2 lg:grid-cols-3' :
              'md:grid-cols-2 xl:grid-cols-4'
            }`}>
              {cat.projects.map((project, projIdx) => (
                <motion.div key={project.title}
                  variants={cardVariants} initial="hidden" whileInView="visible"
                  viewport={{ once: true }} transition={{ delay: projIdx * 0.07 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedProject({ project, category: cat })}
                  className={`group cursor-pointer rounded-2xl border ${cat.borderColor} ${cat.bgColor} p-6 relative overflow-hidden transition-all duration-300`}>

                  <div className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(to right, transparent, ${cat.accentColor}60, transparent)` }} />
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ background: cat.accentColor }} />

                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 rounded-xl"
                      style={{ background: `${cat.accentColor}12`, border: `1px solid ${cat.accentColor}20` }}>
                      {project.icon}
                    </div>
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${
                      project.status === 'Completed'
                        ? 'bg-teal-500/10 text-teal-300 border-teal-500/20'
                        : 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-white text-sm font-bold leading-snug mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${cat.tagBg} ${cat.tagText} ${cat.tagBorder}`}>
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-medium text-gray-600 border border-white/5">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className={`flex items-center gap-1 text-xs font-medium ${cat.textColor} opacity-0 group-hover:opacity-100 transition-all duration-200`}>
                    View details <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject.project}
            category={selectedProject.category}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
