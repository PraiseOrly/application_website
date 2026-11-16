export interface HonourItem {
  text: string;
  date?: string;
}

export interface ProgrammeCertificate {
  name: string;
  date?: string;
  /** Optional: fill in to make the item a link. */
  url?: string;
}

export const honours: HonourItem[] = [
  { text: 'Finalist, Futurize Fuel Africa Innovation Program: CardiacTEK placed in the top 5 of 75 teams and earned an incubator placement', date: 'May 2024' },
  { text: "One of four ALU students selected for the Swiss-Africa Business Case Challenge, Lucerne School of Business, Switzerland; led a feasibility assessment of Namibia's green hydrogen project and presented it to 15+ investors, agencies and government officials", date: 'Jun – Jul 2024' },
  { text: 'Research Fellow, African Leadership for Health Research Fellowship: competitively selected', date: '2024' },
  { text: "Capstone highlighted in ALU's impact report as one of the best capstone projects in my year group", date: '2025' },
  { text: 'African Impact Challenge, Health Incubator: developed RElid, an AI-powered screening tool for intellectual disabilities' },
  { text: 'Mastercard Foundation Scholarship, African Leadership University', date: '2022 – 2025' },
  { text: 'Recognition Award for dedication to supporting persons with intellectual disabilities, New Horizon Special School, Accra', date: '2016' },
  { text: 'Best Student in Chemistry, Biology and Social Studies, Preset Pacesetters Senior High School, Accra', date: '2015 and 2016' },
];

export const conferences: HonourItem[] = [
  { text: 'Delegate (ALU), 18th World Congress on Public Health, Cape Town, South Africa', date: 'Sep 2026' },
  { text: 'Delegate (ALU), Africa Health Tech Summit, Kigali, Rwanda; presented CardiacTEK at the 2025 summit (Aug 2025)', date: '2026' },
  { text: 'Delegate (ALU), AI in Practice Summit, Lagos, Nigeria', date: 'Dec 2025' },
  { text: 'Delegate (Mastercard Foundation), Qatar Africa Business Forum, Johannesburg, South Africa', date: 'Nov 2025' },
  { text: 'Research poster, "CardiacTEK: An AI-Powered Diagnostic Tool for Low-Resource Clinical Settings", Alliance4AI Research Symposium, ALU', date: '2024' },
];

export const programmeCertificates: ProgrammeCertificate[] = [
  { name: 'AIESEC Global Volunteer, Leadership Development Experience', date: '2024', url: '' },
  { name: 'ALU Hubs Ambassador Program, Lagos', date: '2023', url: '' },
  { name: 'Futurize Fuel Africa Innovation Program', date: '2024', url: '' },
  { name: 'African Impact Challenge', url: '' },
];
