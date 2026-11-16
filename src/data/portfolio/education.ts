export interface EducationEntry {
  institution: string;
  degree: string;
  specialization?: string;
  duration: string;
  highlights?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  /** Optional: nothing is rendered when empty. */
  date?: string;
  status: 'completed' | 'in progress';
  /** Optional: certificates without a url are shown but not clickable. */
  url?: string;
  category: string;
}

export const educationEntries: EducationEntry[] = [
  {
    institution: 'African Leadership University (ALU)',
    degree: 'BSc (Hons) Software Engineering, First Class',
    specialization: 'Machine Learning',
    duration: 'Jan 2022 – June 2025',
    highlights: [
      'First Class Honours, GPA 4.56 / 5.0',
      'Mastercard Foundation Scholar',
      "Capstone: explainable AI system for cardiovascular risk prediction and ECG analysis, highlighted in ALU's impact report as one of the best capstones in my year group",
    ],
  },
  {
    institution: 'University of Cape Town (online)',
    degree: 'STA1000P Introductory Statistics',
    duration: '2025',
  },
];

export const certificateDriveUrl =
  'https://drive.google.com/drive/folders/1YWkW5CRaslwAh_fMdb1roDbti71WBWO2?usp=sharing';

export const allCertifications: Certification[] = [
  // Existing certificates (first four are featured on the page)
  { name: 'AI For Good', issuer: 'DeepLearning.AI', date: 'Sept 2025', status: 'completed', url: '/certifications/project-management.pdf', category: 'AI & Machine Learning' },
  { name: 'AI For Medicine', issuer: 'DeepLearning.AI', date: 'Sept 2025', status: 'completed', url: '/certifications/project-management.pdf', category: 'AI & Machine Learning' },
  { name: 'Generative AI for Data Scientists', issuer: 'IBM', date: 'May 2025', status: 'completed', url: '/certifications/generative_ai.pdf', category: 'AI & Machine Learning' },
  { name: 'AI Foundations For Everyone', issuer: 'IBM', date: 'May 2025', status: 'completed', url: '/certifications/AI_Foundations.pdf', category: 'AI & Machine Learning' },
  // Also listed on the CV as "IT and Cloud Fundamentals Specialization" (IBM, Mar 2023): kept once, under the CV's category.
  { name: 'IT & Cloud Fundamentals Specialization', issuer: 'IBM', date: 'Mar 2023', status: 'completed', url: '/certifications/cloud-fundamentals.pdf', category: 'Computing Foundations' },

  // Added from current CV
  { name: 'The Data Science of Health Informatics', issuer: 'Johns Hopkins University', date: 'Sept 2025', status: 'completed', category: 'Health Informatics' },
  { name: 'Practical Methodology and Ethics in AI', issuer: 'Johns Hopkins University', status: 'completed', category: 'AI & Machine Learning' },
  { name: 'AI and Public Health', issuer: 'DeepLearning.AI', status: 'completed', category: 'Health Informatics' },
  { name: 'Google Data-Driven Decision Making Specialization (9 courses)', issuer: 'Google', status: 'completed', category: 'Data Analytics' },
  { name: 'Data Analytics', issuer: 'ALX', date: 'Sept 2024', status: 'completed', category: 'Data Analytics' },
  { name: 'Python for Data Science, AI and Development', issuer: 'IBM', date: 'Jan 2024', status: 'completed', category: 'Data Science' },
  { name: 'Data Science Methodology', issuer: 'IBM', status: 'completed', category: 'Data Science' },
  { name: 'Tools for Data Science', issuer: 'IBM', status: 'completed', category: 'Data Science' },
  { name: 'Advanced Data Structures and Algorithms', issuer: 'Packt', status: 'completed', category: 'Computing Foundations' },
  { name: 'Probability and Statistics', issuer: 'BITS Pilani', status: 'completed', category: 'Computing Foundations' },
  { name: 'Discrete Mathematics for Computer Science', issuer: 'BITS Pilani', status: 'completed', category: 'Computing Foundations' },
];

export const featuredCertifications = allCertifications.slice(0, 4);

export const certCategoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'AI & Machine Learning': { bg: 'bg-teal-500/10', text: 'text-teal-300', border: 'border-teal-500/20' },
  'Cloud & Infrastructure': { bg: 'bg-indigo-500/10', text: 'text-indigo-300', border: 'border-indigo-500/20' },
  'Health Informatics': { bg: 'bg-cyan-500/10', text: 'text-cyan-300', border: 'border-cyan-500/20' },
  'Data Analytics': { bg: 'bg-violet-500/10', text: 'text-violet-300', border: 'border-violet-500/20' },
  'Data Science': { bg: 'bg-amber-500/10', text: 'text-amber-300', border: 'border-amber-500/20' },
  'Computing Foundations': { bg: 'bg-emerald-500/10', text: 'text-emerald-300', border: 'border-emerald-500/20' },
};
