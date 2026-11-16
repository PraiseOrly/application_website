import {
  Activity, AlertTriangle, BarChart3, Brain, Cpu, Database, Dna, FlaskConical, Globe, Heart,
  HeartPulse, LayoutDashboard, PieChart, Pill, ServerCog, Stethoscope, TrendingUp, Zap,
  type LucideIcon,
} from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  status: 'Completed' | 'In Progress';
  icon: LucideIcon;
  /** Omit for internal work: no GitHub button is rendered. */
  githubUrl?: string;
}

export interface ProjectCategory {
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
  /** Tailwind text colour class for project icons */
  iconColor: string;
  headerIcon: LucideIcon;
  projects: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    id: 'health-data-systems',
    label: 'Health Data Systems',
    tagline: 'Data platforms and dashboards built for health programmes.',
    accentColor: '#10B981',
    borderColor: 'border-emerald-500/20',
    bgColor: 'bg-emerald-500/[0.04]',
    textColor: 'text-emerald-300',
    tagBg: 'bg-emerald-500/10',
    tagText: 'text-emerald-200',
    tagBorder: 'border-emerald-500/15',
    iconColor: 'text-emerald-400',
    headerIcon: ServerCog,
    projects: [
      {
        title: 'Programme Manager and Monitoring Dashboard (ALU)',
        description: 'Four linked portals, one for the MELA team and one for each of three programme pillars, tracking interventions from data collection through cleaning to one indicator dashboard.',
        techStack: ['React', 'Python', 'PostgreSQL', 'Salesforce'],
        status: 'In Progress',
        icon: LayoutDashboard,
      },
      {
        title: 'Programme Reporting Dashboards (Society for Family Health)',
        description: 'Automated reporting for HIV, malaria, family planning and maternal health programmes, built on a centralised database merging 10+ sources.',
        techStack: ['Power BI', 'Excel', 'SQL'],
        status: 'Completed',
        icon: PieChart,
      },
    ],
  },
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
    iconColor: 'text-teal-400',
    headerIcon: Database,
    projects: [
      {
        title: 'Drugs, Side Effects & Medical Conditions Analysis',
        description: 'Comprehensive analysis of drug interactions, side effects, and associated medical conditions using large-scale pharmaceutical datasets to uncover critical health patterns and risk correlations.',
        techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'NLP', 'Statistical Analysis'],
        status: 'Completed',
        icon: Pill,
        githubUrl: 'https://github.com/praiseorly/drugs-side-effects-analysis',
      },
      {
        title: 'COVID-19 Clinical Trials Analysis',
        description: 'In-depth exploration of global COVID-19 clinical trial data — identifying treatment trends, trial success rates, phase distributions, and geographic research concentration.',
        techStack: ['Python', 'Pandas', 'Plotly', 'Seaborn', 'Statistical Analysis'],
        status: 'Completed',
        icon: FlaskConical,
        githubUrl: 'https://github.com/praiseorly/covid19-clinical-trials-analysis',
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
    iconColor: 'text-cyan-400',
    headerIcon: BarChart3,
    projects: [
      {
        title: 'Heart Disease Risk Factor Exploration',
        description: 'Systematic analysis of cardiovascular risk factors — including age, cholesterol, blood pressure, and lifestyle variables — to identify early warning patterns and key predictors of heart disease.',
        techStack: ['Python', 'Pandas', 'Seaborn', 'Scikit-learn', 'Matplotlib', 'EDA'],
        status: 'Completed',
        icon: Heart,
        githubUrl: 'https://github.com/praiseorly/heart-disease-risk-factor-exploration',
      },
      {
        title: 'Cancer Risk Factor Analysis',
        description: 'Exploratory study of demographic, genetic, and environmental risk factors across multiple cancer types, providing data-driven insights to support early detection and prevention strategies.',
        techStack: ['Python', 'Pandas', 'Matplotlib', 'NumPy', 'Statistical Tests'],
        status: 'Completed',
        icon: Dna,
        githubUrl: 'https://github.com/praiseorly/cancer-risk-factor-analysis',
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
    iconColor: 'text-violet-400',
    headerIcon: Brain,
    projects: [
      {
        title: 'Heart Disease Prediction',
        description: 'Supervised ML model using clinical biomarkers and patient features to predict heart disease likelihood with high sensitivity, designed for early clinical screening and decision support.',
        techStack: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Feature Engineering'],
        status: 'Completed',
        icon: Activity,
        githubUrl: 'https://github.com/praiseorly/heart-disease-prediction',
      },
      {
        title: 'Stroke Risk Prediction',
        description: 'Classification model predicting stroke risk from patient health and lifestyle data, achieving AUC >0.85 with SHAP-based interpretability for transparent clinical use.',
        techStack: ['Python', 'Scikit-learn', 'SHAP', 'Flask', 'Pandas', 'XGBoost'],
        status: 'Completed',
        icon: AlertTriangle,
        githubUrl: 'https://github.com/praiseorly/stroke-risk-prediction',
      },
      {
        title: 'Personalized Medicine Recommender System',
        description: 'Hybrid collaborative and content-based filtering system generating personalized treatment recommendations aligned with individual patient profiles and medical histories.',
        techStack: ['Python', 'Scikit-learn', 'Surprise', 'FastAPI', 'PostgreSQL', 'Redis'],
        status: 'Completed',
        icon: Stethoscope,
        githubUrl: 'https://github.com/praiseorly/personalized-medicine-recommender',
      },
      {
        title: 'Heart Disease Prediction with Recommendation Model',
        description: 'End-to-end pipeline combining heart disease risk prediction with a follow-up recommendation engine for personalized preventive care plans and lifestyle guidance.',
        techStack: ['Python', 'XGBoost', 'Scikit-learn', 'Streamlit', 'Pandas'],
        status: 'Completed',
        icon: TrendingUp,
        githubUrl: 'https://github.com/praiseorly/heart-disease-prediction-recommender',
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
    iconColor: 'text-indigo-400',
    headerIcon: Cpu,
    projects: [
      {
        title: 'ECG Arrhythmia Detection',
        description: 'CNN-based deep learning model for detecting cardiac arrhythmias in 12-lead ECG recordings, achieving 96% accuracy on the PTB-XL dataset with Grad-CAM visualizations for clinical interpretability.',
        techStack: ['PyTorch', 'TensorFlow', 'OpenCV', 'Grad-CAM', 'Matplotlib', 'Scikit-learn'],
        status: 'Completed',
        icon: Zap,
        githubUrl: 'https://github.com/praiseorly/ecg-arrhythmia-detection',
      },
      {
        title: 'Disease Outbreak Prediction',
        description: 'Time-series and epidemiological model leveraging historical outbreak data, environmental signals, and demographic indicators to predict and map potential disease surges across regions.',
        techStack: ['Python', 'Prophet', 'Scikit-learn', 'GeoPandas', 'Plotly', 'FastAPI'],
        status: 'In Progress',
        icon: Globe,
        githubUrl: 'https://github.com/praiseorly/disease-outbreak-prediction',
      },
      {
        title: 'Explainable Cardiovascular Risk System (capstone)',
        description: "Predicts heart-disease risk and explains each prediction to clinicians; featured in ALU's impact report.",
        techStack: ['Python', 'Deep Learning', 'Explainable AI'],
        status: 'Completed',
        icon: HeartPulse,
      },
    ],
  },
];
