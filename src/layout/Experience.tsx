import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import {
  experienceData,
  experienceTypeColors as typeColors,
  type ExperienceItem,
} from "../data/portfolio/experience";

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
            background: `linear-gradient(140deg, ${exp.accentColor}08, #0f1f3c 60%)`,
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
            <div className="flex-1 space-y-2.5 overflow-y-auto pr-1">
              {exp.achievements.map((a, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={flipped ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 + 0.1 }}
                  className="flex items-start gap-2.5">
                  <span className="shrink-0 mt-0.5"><a.icon className={`h-4 w-4 ${a.iconColor}`} /></span>
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
    <section id="experience" className="py-14 px-6 sm:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a1628, #0f1f3c, #0a1628)' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-teal-400" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-indigo-500" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-10">
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
