import { Brain, Target, Users, Zap, type LucideIcon } from 'lucide-react';

export const aboutName = 'Praise Orly Atadja';

export const aboutSubtitle =
  'Software Engineer and Data Scientist · Health AI · Health Information Systems';

export const aboutBio =
  'I am a software engineer and data scientist who builds information systems with and for the communities that use them. I have designed health data platforms where none existed, trained clinical machine learning models, and worked alongside nurses, clinicians, students and volunteers across Rwanda, Ghana, Kenya and Nigeria to turn data into better decisions. My goal is to lead trustworthy, locally owned health information systems in Africa and to train the next generation of African technologists.';

/** Link used by the "View Resume" button. Replace this to point at a new CV. */
export const resumeUrl =
  'https://docs.google.com/document/d/1hpOO01I7PB5sJytnXY1sThD4xyxU48Co/edit?usp=sharing&ouid=101909117862344144947&rtpof=true&sd=true';

export const profileImages = [
  { src: '/images/Praise_Headshot.jpg', caption: 'Professional Portrait' },
  { src: '/images/PraiseAlliance.jpg', caption: 'Leading Alliance4AI Chapter · Kigali, 2024' },
  { src: '/images/Praise_Speech.jpg', caption: 'Speaking on AI Innovation in Africa' },
  { src: '/images/Health2.jpg', caption: 'Healthcare Technology Research & Development' },
  { src: '/images/Swiss.jpg', caption: 'Swiss Business Case Challenge · Lucerne, 2024' },
  { src: '/images/Moyo.jpg', caption: 'Community Health Initiative · Nairobi, 2024' },
  { src: '/images/Health.jpg', caption: 'Building CardiacTEK — AI for Cardiac Care' },
  { src: '/images/AI for Good.jpg', caption: 'AI for Good Summit, 2024' },
  { src: '/images/QABF.jpg', caption: 'Qutab Ambiance Business Forum' },
];

export const missionItems: { icon: LucideIcon; text: string }[] = [
  { icon: Brain, text: 'Democratizing medical AI tools for underserved communities' },
  { icon: Target, text: 'Building locally-relevant, Africa-first healthcare solutions' },
  { icon: Users, text: 'Mentoring the next generation of African tech leaders' },
  { icon: Zap, text: 'Bridging cutting-edge research and real-world clinical impact' },
];

export const achievements = [
  {
    metric: '96%',
    label: 'ECG Model Accuracy',
    description: 'Held-out test set, PTB-XL clinical dataset (CardiacTEK).',
    borderColor: 'border-teal-500/25',
    bgColor: 'bg-teal-500/8',
    textColor: 'text-teal-400',
  },
  {
    metric: '185',
    label: 'Health Workers Reached',
    description:
      'Frontline health workers trained through a training-of-trainers programme, against a target of 110.',
    borderColor: 'border-violet-500/25',
    bgColor: 'bg-violet-500/8',
    textColor: 'text-violet-400',
  },
  {
    metric: '40%',
    label: 'Fewer Duplicate Records',
    description: 'Centralised database integrating 10+ sources at Society for Family Health.',
    borderColor: 'border-cyan-500/25',
    bgColor: 'bg-cyan-500/8',
    textColor: 'text-cyan-400',
  },
  {
    metric: '4.56',
    label: 'GPA · First Class',
    description: 'BSc (Hons) Software Engineering, ALU. Mastercard Foundation Scholar.',
    borderColor: 'border-indigo-500/25',
    bgColor: 'bg-indigo-500/8',
    textColor: 'text-indigo-400',
  },
];
