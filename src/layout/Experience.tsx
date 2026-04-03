import { motion } from "framer-motion";
import {
  BookOpen, BrainCircuit, Briefcase, Calendar, Code2,
  DollarSign, Globe, HandHeart, MapPin, Microscope, School, Users,
} from "lucide-react";
import React, { useState } from "react";

interface Achievement { text: string; icon: React.ReactNode; }
interface ExperienceItem {
  title: string; company: string; location: string; duration: string;
  type: string; accentColor: string; achievements: Achievement[];
}

const experienceData: ExperienceItem[] = [
  {
    title: "AI Research Assistant", company: "Cardiac TEK",
    location: "Tanzania, Remote", duration: "Feb 2024 – Present",
    type: "Research", accentColor: "#14B8A6",
    achievements: [
      { text: "Built transfer learning ECG model (96% accuracy, 10,000+ PhysioNet samples); cut cardiologist reliance by 70%", icon: <Microscope className="h-4 w-4 text-teal-400" /> },
      { text: "Developed XGBoost risk stratification model with 90% accuracy for cardiovascular events in underserved populations", icon: <BrainCircuit className="h-4 w-4 text-indigo-300" /> },
      { text: "Improved diagnostic tool UI for low-resource settings, boosting data accuracy by 30%", icon: <Code2 className="h-4 w-4 text-cyan-300" /> },
    ],
  },
  {
    title: "Team Lead", company: "She Innovate Initiative",
    location: "Kigali, Rwanda", duration: "March 2024 – Present",
    type: "Leadership", accentColor: "#8B5CF6",
    achievements: [
      { text: "Led 2-week Summer School training 30 Rwandan girls in tech & design, increasing retention by 40%", icon: <School className="h-4 w-4 text-violet-400" /> },
      { text: "Managed $2K budget and secured 3 corporate partnerships for hackathon with 6 teams from 4 schools", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
      { text: "Created inclusive learning materials boosting participant engagement by 40%", icon: <BookOpen className="h-4 w-4 text-blue-300" /> },
    ],
  },
  {
    title: "Hub Ambassador", company: "African Leadership University",
    location: "Lagos, Nigeria", duration: "May 2023 – Sept 2023",
    type: "Engagement", accentColor: "#F59E0B",
    achievements: [
      { text: "Organized educational trips and 5+ tech events, increasing student participation by 15%", icon: <Globe className="h-4 w-4 text-amber-300" /> },
      { text: "Reduced event costs by 30% through strategic vendor negotiations", icon: <DollarSign className="h-4 w-4 text-green-400" /> },
      { text: "Facilitated ALU student engagement with Nigeria's emerging tech ecosystem", icon: <Users className="h-4 w-4 text-cyan-400" /> },
    ],
  },
  {
    title: "Vice President", company: "Alliance4AI, ALU Chapter",
    location: "Kigali, Rwanda", duration: "Sept 2024 – Present",
    type: "Leadership", accentColor: "#06B6D4",
    achievements: [
      { text: "Oversaw 8+ ML workshops using TensorFlow/Scikit-learn; 40% of participants secured AI roles", icon: <BrainCircuit className="h-4 w-4 text-cyan-300" /> },
      { text: "Managed a team of 10, increasing student engagement by 25%", icon: <Users className="h-4 w-4 text-teal-300" /> },
      { text: "Mentored 15+ students in project-based AI initiatives with measurable outcomes", icon: <School className="h-4 w-4 text-violet-300" /> },
    ],
  },
  {
    title: "Participant", company: "Swiss Business Case Challenge",
    location: "Lucerne, Switzerland", duration: "June 2024",
    type: "Competition", accentColor: "#A3E635",
    achievements: [
      { text: "Researched green hydrogen's potential to meet 25% of Africa's energy needs sustainably", icon: <Globe className="h-4 w-4 text-lime-300" /> },
      { text: "Led negotiations securing 40% stakeholder support for an SDG-aligned energy project", icon: <HandHeart className="h-4 w-4 text-red-300" /> },
    ],
  },
  {
    title: "Global Volunteer", company: "AIESEC",
    location: "Nairobi, Kenya", duration: "Sept 2024 – Oct 2024",
    type: "Volunteer", accentColor: "#34D399",
    achievements: [
      { text: "Improved literacy and numeracy for 70% of 30 students in underserved Nairobi communities", icon: <BookOpen className="h-4 w-4 text-emerald-300" /> },
      { text: "Increased classroom participation by 30% through engaging, student-centred activities", icon: <Users className="h-4 w-4 text-cyan-400" /> },
    ],
  },
];

const typeColors: Record<string, string> = {
  Research:    "bg-teal-500/10 text-teal-300 border-teal-500/25",
  Leadership:  "bg-violet-500/10 text-violet-300 border-violet-500/25",
  Engagement:  "bg-amber-500/10 text-amber-300 border-amber-500/25",
  Competition: "bg-lime-500/10 text-lime-300 border-lime-500/25",
  Volunteer:   "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
};

function FlipCard({ exp }: { exp: ExperienceItem }) {
  const [flipped, setFlipped] = useState(false);
  const typeCls = typeColors[exp.type] || "bg-gray-500/10 text-gray-300 border-gray-500/25";

  return (
    <div
      style={{ perspective: "1200px", height: "280px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="cursor-pointer">
      <div style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        position: "relative", width: "100%", height: "100%",
      }}>
        {/* FRONT */}
        <div
          style={{ backfaceVisibility: "hidden", position: "absolute", inset: 0 }}
          className="rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden flex flex-col justify-between p-6">
          <div className="absolute top-0 left-0 w-full h-[2px]"
            style={{ background: `linear-gradient(to right, ${exp.accentColor}80, transparent)` }} />
          <div className="absolute -top-8 -left-8 w-28 h-28 rounded-full blur-2xl opacity-15 pointer-events-none"
            style={{ background: exp.accentColor }} />
          <div>
            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-widest uppercase border ${typeCls} mb-4`}>
              {exp.type}
            </span>
            <h3 className="text-white text-lg font-bold leading-tight mb-1">{exp.title}</h3>
            <p className="font-medium text-sm" style={{ color: exp.accentColor }}>{exp.company}</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
              <MapPin className="h-3.5 w-3.5" />{exp.location}
            </div>
            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
              <Calendar className="h-3.5 w-3.5" />{exp.duration}
            </div>
          </div>
          <p className="text-[10px] text-gray-700 mt-2 tracking-wide">Hover to view details →</p>
        </div>

        {/* BACK */}
        <div
          style={{
            backfaceVisibility: "hidden", position: "absolute", inset: 0,
            transform: "rotateY(180deg)",
            border: `1px solid ${exp.accentColor}20`,
            background: `linear-gradient(140deg, ${exp.accentColor}08, #060d1c 60%)`,
          }}
          className="rounded-2xl overflow-hidden flex flex-col p-5">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 rounded-lg" style={{ background: `${exp.accentColor}15` }}>
                <Briefcase className="h-3.5 w-3.5" style={{ color: exp.accentColor }} />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{exp.title}</p>
                <p className="text-gray-500 text-[11px]">{exp.company}</p>
              </div>
            </div>
            <div className="flex-1 space-y-2.5 overflow-hidden">
              {exp.achievements.map((a, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={flipped ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  className="flex items-start gap-2.5">
                  <span className="shrink-0 mt-0.5">{a.icon}</span>
                  <p className="text-gray-300 text-[11px] leading-snug">{a.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 sm:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #030712, #060d1c, #030712)' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-teal-400" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-indigo-500" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-500/10 border border-teal-500/20 text-teal-300 mb-4">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Professional Experience</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Demonstrating technical leadership and social impact through diverse roles — hover any card to reveal details.
          </p>
        </motion.div>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experienceData.map((exp) => (
            <motion.div key={`${exp.company}-${exp.title}`}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <FlipCard exp={exp} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
