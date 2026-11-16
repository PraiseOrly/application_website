import AcademicExcellenceChampion from '../../assets/images/AcademicExcellenceChampion.jpg';
import AIinMedicine from '../../assets/images/AIinMedicineCropped.jpg';
import AIInnovation from '../../assets/images/AIInnovation.jpg';
import SocialImpactCoderina from '../../assets/images/SocialImpactCoderina.jpg';

export interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accentColor: string;
  buttonText: string;
  buttonLink: string;
  tag: string;
  /** Label shown over the image; defaults to the owner's name. */
  imageLabel?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    title: 'Revolutionizing Healthcare',
    subtitle: 'AI-Powered Diagnostics',
    description:
      'Co-founded CardiacTEK, building AI tools for ECG analysis and heart-disease risk assessment. Our ECG classification models reach 96% accuracy on a held-out test set of the PTB-XL clinical dataset.',
    image: AIInnovation,
    accentColor: '#14B8A6',
    buttonText: 'Explore Work',
    buttonLink: '#experience',
    tag: 'CardiacTEK · Deep Learning · ECG Analysis',
  },
  {
    title: 'Data That Drives Decisions',
    subtitle: 'Health Data Systems',
    description:
      "Designed the first data management framework for ALU's Centre for Health Innovation and Impact and built its Programme Manager and monitoring dashboard in React, Python and PostgreSQL.",
    image: '/images/Health2.jpg',
    accentColor: '#8B5CF6',
    buttonText: 'See Projects',
    buttonLink: '#projects',
    tag: 'MELA · Dashboards · PostgreSQL',
  },
  {
    title: 'Academic Excellence',
    subtitle: 'Software Engineering · AI',
    description:
      'First Class Honours graduate in Software Engineering from African Leadership University with a 4.56 GPA. Specializing in AI-driven healthcare diagnostics and machine learning systems.',
    image: AcademicExcellenceChampion,
    accentColor: '#4B5EAA',
    buttonText: 'View Journey',
    buttonLink: '#education',
    tag: 'ALU · First Class Honours · 4.56 GPA',
    imageLabel: 'Team Work',
  },
  {
    title: 'Future of Medicine',
    subtitle: 'Innovative AI Solutions',
    description:
      'Pioneering predictive models for stroke (AUC >0.85), diabetes risk stratification, and 12-lead ECG classification — democratizing diagnostic precision for underserved communities across Africa.',
    image: AIinMedicine,
    accentColor: '#f59e0b',
    buttonText: 'See Projects',
    buttonLink: '#projects',
    tag: 'Predictive Modeling · Health AI · Impact at Scale',
    imageLabel: 'AI in Clinical Decision Support',
  },
  {
    title: 'Tech for Good',
    subtitle: 'Social Impact',
    description:
      'Led a two-week code and design summer school and hackathon for 30 girls from four Rwandan high schools, and extended coding outreach to 200+ girls in underserved Nigerian communities.',
    image: SocialImpactCoderina,
    accentColor: '#06b6d4',
    buttonText: 'Get Involved',
    buttonLink: '#contact',
    tag: 'She Innovate · STEM Education · Rwanda and Nigeria',
  },
];
