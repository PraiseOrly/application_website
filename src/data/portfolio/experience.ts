import {
  Activity, BarChart3, BookOpen, BrainCircuit, Building2, Code2, Database,
  DollarSign, FileText, Globe, GraduationCap, LayoutDashboard, Lightbulb,
  Microscope, Presentation, School, ShieldCheck, Stethoscope, Trophy, Users,
  type LucideIcon,
} from 'lucide-react';

export interface ExperienceAchievement {
  text: string;
  icon: LucideIcon;
  /** Tailwind text colour class for the icon */
  iconColor: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  /** Roles with no end date use "Present". */
  duration: string;
  type: 'Work' | 'Research' | 'Leadership' | 'Volunteer' | 'Competition' | 'Engagement';
  accentColor: string;
  achievements: ExperienceAchievement[];
}

/** Rendered in this order (as given in the CV update). */
export const experienceData: ExperienceItem[] = [
  {
    title: 'MELA Data Analyst', company: 'Centre for Health Innovation and Impact, ALU',
    location: 'Kigali, Rwanda', duration: 'May 2026 – Present',
    type: 'Work', accentColor: '#38BDF8',
    achievements: [
      { text: "Designed the centre's first data management framework and co-designed its data collection system, starting where no data structure existed", icon: Database, iconColor: 'text-sky-300' },
      { text: 'Developed the Programme Manager (launching January 2027) in React, Python and PostgreSQL: four linked portals covering the MELA team and three programme pillars', icon: Code2, iconColor: 'text-cyan-300' },
      { text: 'Integrated it with Salesforce and built data quality checks so only validated data feeds the executive monitoring dashboard, now live for university leadership', icon: LayoutDashboard, iconColor: 'text-teal-300' },
    ],
  },
  {
    title: 'Research Intern', company: 'AiVantha Health',
    location: 'Kigali, Rwanda', duration: 'Feb 2026 – Present',
    type: 'Research', accentColor: '#14B8A6',
    achievements: [
      { text: 'Turn diagnostic problems raised by clinicians into research questions and technical requirements for AI models', icon: Microscope, iconColor: 'text-teal-400' },
      { text: 'Lead user research with clinicians through structured feedback sessions, so models are judged on clinical usefulness, not benchmark scores alone', icon: Stethoscope, iconColor: 'text-cyan-300' },
    ],
  },
  {
    title: 'Co-Founder and CTO', company: 'CardiacTEK',
    location: 'Kigali, Rwanda', duration: 'Feb 2024 – Present',
    type: 'Leadership', accentColor: '#8B5CF6',
    achievements: [
      { text: "Lead a startup building AI tools for ECG analysis and heart-disease risk assessment, in response to Africa's shortage of cardiologists", icon: Activity, iconColor: 'text-violet-400' },
      { text: 'Trained ECG classification models on the PTB-XL clinical dataset, reaching 96% accuracy on a held-out test set', icon: BrainCircuit, iconColor: 'text-teal-300' },
      { text: 'Work with practising clinicians to turn their needs into product specifications; field research under way in Rwanda and Tanzania', icon: Stethoscope, iconColor: 'text-cyan-300' },
    ],
  },
  {
    title: 'Research Study Liaison', company: 'Africa Health Collaborative, ALU',
    location: 'Rwanda', duration: 'Oct 2025 – Aug 2026',
    type: 'Research', accentColor: '#14B8A6',
    achievements: [
      { text: 'Led ethics approval for a Rwanda One Health and Planetary Health study and coordinated it across Burera and Kamonyi District Hospitals with 50+ health workers', icon: ShieldCheck, iconColor: 'text-teal-400' },
      { text: 'Co-ran design workshops that cut a training curriculum from ten weeks to three; 26 trained trainers went on to reach 185 frontline health workers against a target of 110', icon: Users, iconColor: 'text-cyan-300' },
      { text: 'Delivered 10+ Excel, Power BI and Tableau workshops for health staff', icon: BarChart3, iconColor: 'text-violet-300' },
    ],
  },
  {
    title: 'Data Analyst Intern', company: 'Society for Family Health',
    location: 'Kigali, Rwanda', duration: 'June 2025 – Sept 2025',
    type: 'Work', accentColor: '#38BDF8',
    achievements: [
      { text: 'Designed automated Excel and Power BI dashboards tracking metrics, budgets and performance across 5+ programmes (HIV, malaria, family planning, maternal health)', icon: LayoutDashboard, iconColor: 'text-sky-300' },
      { text: 'Integrated 10+ data sources into a centralised database that cut duplicate records by 40% and gave three departments one consistent reporting source', icon: Database, iconColor: 'text-cyan-300' },
    ],
  },
  {
    title: 'Volunteer Startup Peer Mentor', company: 'Centre for Health Innovation and Impact, ALU',
    location: 'Kigali, Rwanda', duration: 'May 2026 – Present',
    type: 'Leadership', accentColor: '#8B5CF6',
    achievements: [
      { text: 'Guide student health teams from problem discovery to product design; one team placed second in a health innovation hackathon and won $2,000', icon: Lightbulb, iconColor: 'text-violet-400' },
    ],
  },
  {
    title: 'Team Lead', company: 'She Innovate Initiative',
    location: 'Kigali, Rwanda', duration: 'March 2024 – Dec 2025',
    type: 'Leadership', accentColor: '#8B5CF6',
    achievements: [
      { text: 'With a five-person team, ran a two-week code and design summer school and a six-team hackathon for 30 girls from four Rwandan high schools; every girl built her first prototype', icon: School, iconColor: 'text-violet-400' },
      { text: 'Managed a $2,000 budget and secured three corporate partners', icon: DollarSign, iconColor: 'text-green-400' },
      { text: 'Extended coding outreach to 200+ girls in four underserved Nigerian communities', icon: Globe, iconColor: 'text-blue-300' },
    ],
  },
  {
    title: 'Vice President', company: 'Alliance4AI, ALU Chapter',
    location: 'Kigali, Rwanda', duration: 'Aug 2024 – Sept 2025',
    type: 'Leadership', accentColor: '#06B6D4',
    achievements: [
      { text: 'Co-led a 60+ member student AI community and raised active participation by 25%', icon: Users, iconColor: 'text-teal-300' },
      { text: 'Designed and taught eight hands-on workshops in machine learning, data analytics and responsible AI; 30+ students built and evaluated their first models', icon: BrainCircuit, iconColor: 'text-cyan-300' },
    ],
  },
  {
    title: 'Research Fellow', company: 'African Leadership for Health Research Fellowship',
    location: 'Remote', duration: 'May 2024 – Oct 2024',
    type: 'Research', accentColor: '#14B8A6',
    achievements: [
      { text: 'Selected competitively; trained in research design, ethics, grant writing and publishing', icon: GraduationCap, iconColor: 'text-teal-400' },
      { text: 'Wrote a report proposing AI decision support for clinics with few specialists', icon: FileText, iconColor: 'text-cyan-300' },
    ],
  },
  {
    title: 'Global Volunteer', company: 'AIESEC',
    location: 'Nairobi, Kenya', duration: 'Sept 2024 – Oct 2024',
    type: 'Volunteer', accentColor: '#34D399',
    achievements: [
      { text: 'Taught English, mathematics and science to 60+ children in a low-income community', icon: BookOpen, iconColor: 'text-emerald-300' },
    ],
  },
  {
    title: 'Participant', company: 'Swiss-Africa Business Case Challenge, Lucerne School of Business',
    location: 'Lucerne, Switzerland', duration: 'June – July 2024',
    type: 'Competition', accentColor: '#A3E635',
    achievements: [
      { text: 'One of four ALU students selected', icon: Trophy, iconColor: 'text-lime-300' },
      { text: "Led a feasibility assessment of Namibia's green hydrogen project and presented it to 15+ investors, agencies and government officials", icon: Presentation, iconColor: 'text-red-300' },
    ],
  },
  {
    title: 'Student Hub Ambassador Intern', company: 'African Leadership University',
    location: 'Lagos, Nigeria', duration: 'June 2023 – Sept 2023',
    type: 'Engagement', accentColor: '#F59E0B',
    achievements: [
      { text: 'Coordinated five technology and entrepreneurship events, raising average attendance by 15%', icon: Building2, iconColor: 'text-amber-300' },
      { text: 'Cut event costs by 30% by renegotiating vendor contracts', icon: DollarSign, iconColor: 'text-green-400' },
    ],
  },
];

export const experienceTypeColors: Record<ExperienceItem['type'], string> = {
  Work:        'bg-sky-500/10 text-sky-300 border-sky-500/25',
  Research:    'bg-teal-500/10 text-teal-300 border-teal-500/25',
  Leadership:  'bg-violet-500/10 text-violet-300 border-violet-500/25',
  Engagement:  'bg-amber-500/10 text-amber-300 border-amber-500/25',
  Competition: 'bg-lime-500/10 text-lime-300 border-lime-500/25',
  Volunteer:   'bg-emerald-500/10 text-emerald-300 border-emerald-500/25',
};
