import {
  Award, Globe, GraduationCap, HandHeart, Lightbulb, Medal, Star, Trophy,
  type LucideIcon,
} from 'lucide-react';

export interface HonourItem {
  title: string;
  detail?: string;
  date?: string;
  icon: LucideIcon;
}

export interface ConferenceItem {
  role: string;
  event: string;
  place: string;
  date: string;
  note?: string;
  /** Render as a wider card (e.g. research poster). */
  wide?: boolean;
}

export interface ProgrammeCertificate {
  name: string;
  date?: string;
  /** Optional: fill in to make the card a link. */
  url?: string;
}

export const honours: HonourItem[] = [
  { title: 'Finalist, Futurize Fuel Africa Innovation Program', detail: 'CardiacTEK placed in the top 5 of 75 teams and earned an incubator placement', date: 'May 2024', icon: Trophy },
  { title: 'One of four ALU students selected for the Swiss-Africa Business Case Challenge', detail: "Lucerne School of Business, Switzerland; led a feasibility assessment of Namibia's green hydrogen project and presented it to 15+ investors, agencies and government officials", date: 'Jun – Jul 2024', icon: Globe },
  { title: 'Research Fellow, African Leadership for Health Research Fellowship', detail: 'Competitively selected', date: '2024', icon: GraduationCap },
  { title: "Capstone highlighted in ALU's impact report", detail: 'One of the best capstone projects in my year group', date: '2025', icon: Star },
  { title: 'African Impact Challenge, Health Incubator', detail: 'Developed RElid, an AI-powered screening tool for intellectual disabilities', icon: Lightbulb },
  { title: 'Mastercard Foundation Scholarship', detail: 'African Leadership University', date: '2022 – 2025', icon: Award },
  { title: 'Recognition Award', detail: 'For dedication to supporting persons with intellectual disabilities, New Horizon Special School, Accra', date: '2016', icon: HandHeart },
  { title: 'Best Student in Chemistry, Biology and Social Studies', detail: 'Preset Pacesetters Senior High School, Accra', date: '2015 and 2016', icon: Medal },
];

export const conferences: ConferenceItem[] = [
  { role: 'Delegate (ALU)', event: '18th World Congress on Public Health', place: 'Cape Town, South Africa', date: 'Sep 2026' },
  { role: 'Delegate (ALU)', event: 'Africa Health Tech Summit', place: 'Kigali, Rwanda', date: '2026', note: 'Presented CardiacTEK at the 2025 summit (Aug 2025)' },
  { role: 'Delegate (ALU)', event: 'AI in Practice Summit', place: 'Lagos, Nigeria', date: 'Dec 2025' },
  { role: 'Delegate (Mastercard Foundation)', event: 'Qatar Africa Business Forum', place: 'Johannesburg, South Africa', date: 'Nov 2025' },
  { role: 'Research poster', event: '"CardiacTEK: An AI-Powered Diagnostic Tool for Low-Resource Clinical Settings"', place: 'Alliance4AI Research Symposium, ALU', date: '2024', wide: true },
];

export const programmeCertificates: ProgrammeCertificate[] = [
  { name: 'AIESEC Global Volunteer, Leadership Development Experience', date: '2024', url: '' },
  { name: 'ALU Hubs Ambassador Program, Lagos', date: '2023', url: '' },
  { name: 'Futurize Fuel Africa Innovation Program', date: '2024', url: '' },
  { name: 'African Impact Challenge', url: '' },
];
