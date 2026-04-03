import { motion } from "framer-motion";
import { BrainCircuit, FlaskConical, Rocket, Stethoscope } from "lucide-react";

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
  accentColor: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  tagBg: string;
  tagText: string;
  tagBorder: string;
}

const skillsData: SkillCategory[] = [
  {
    category: "AI Development",
    icon: <BrainCircuit className="h-5 w-5" />,
    description: "Building intelligent systems that learn, adapt, and deliver clinical-grade diagnostic results.",
    skills: ["Machine Learning", "Medical Imaging Analysis", "Predictive Modeling", "Natural Language Processing", "Deep Learning (CNN/RNN)", "Model Interpretability"],
    accentColor: "#14B8A6",
    borderColor: "border-teal-500/20",
    bgColor: "bg-teal-500/[0.04]",
    textColor: "text-teal-300",
    tagBg: "bg-teal-500/10",
    tagText: "text-teal-200",
    tagBorder: "border-teal-500/18",
  },
  {
    category: "Health Tech",
    icon: <Stethoscope className="h-5 w-5" />,
    description: "Designing diagnostic and patient-care systems for resource-constrained healthcare environments.",
    skills: ["Telemedicine Systems", "EHR Integration", "Medical IoT", "Clinical Decision Support", "ECG Analysis", "Healthcare Data Pipelines"],
    accentColor: "#06B6D4",
    borderColor: "border-cyan-500/20",
    bgColor: "bg-cyan-500/[0.04]",
    textColor: "text-cyan-300",
    tagBg: "bg-cyan-500/10",
    tagText: "text-cyan-200",
    tagBorder: "border-cyan-500/18",
  },
  {
    category: "Technical Leadership",
    icon: <Rocket className="h-5 w-5" />,
    description: "Leading teams, driving roadmaps, and delivering measurable impact at organizational scale.",
    skills: ["Project Management", "Team Mentorship", "Technical Roadmapping", "Stakeholder Engagement", "Agile Methodologies", "Workshop Facilitation"],
    accentColor: "#8B5CF6",
    borderColor: "border-violet-500/20",
    bgColor: "bg-violet-500/[0.04]",
    textColor: "text-violet-300",
    tagBg: "bg-violet-500/10",
    tagText: "text-violet-200",
    tagBorder: "border-violet-500/18",
  },
  {
    category: "Research & Innovation",
    icon: <FlaskConical className="h-5 w-5" />,
    description: "Translating rigorous academic research into practical, deployable AI solutions for real-world impact.",
    skills: ["Clinical Trial Design", "AI Ethics Frameworks", "Research Publication", "Prototype Development", "Data Analysis", "Scientific Writing"],
    accentColor: "#4B5EAA",
    borderColor: "border-indigo-500/20",
    bgColor: "bg-indigo-500/[0.04]",
    textColor: "text-indigo-300",
    tagBg: "bg-indigo-500/10",
    tagText: "text-indigo-200",
    tagBorder: "border-indigo-500/18",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 110, damping: 18 } },
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 sm:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a1628, #0f1e38, #0a1628)' }}>
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-teal-400" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-indigo-500" />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '36px 36px' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-500/10 border border-teal-500/20 text-teal-300 mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Areas of Focus</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            A multidisciplinary skill set spanning AI research, healthcare systems, leadership, and innovation.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }} className="grid md:grid-cols-2 gap-6">
          {skillsData.map((cat) => (
            <motion.div key={cat.category} variants={cardVariants} whileHover={{ y: -4 }}
              className={`relative rounded-2xl border ${cat.borderColor} ${cat.bgColor} p-7 overflow-hidden group transition-all duration-300`}>
              <div className="absolute top-0 left-0 w-full h-[2px] opacity-50"
                style={{ background: `linear-gradient(to right, ${cat.accentColor}, transparent)` }} />
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-2xl opacity-0 group-hover:opacity-8 transition-opacity duration-500 pointer-events-none"
                style={{ background: cat.accentColor }} />
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl border"
                  style={{ background: `${cat.accentColor}12`, borderColor: `${cat.accentColor}25`, color: cat.accentColor }}>
                  {cat.icon}
                </div>
                <h3 className={`text-lg font-bold ${cat.textColor}`}>{cat.category}</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{cat.description}</p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span key={skill} whileHover={{ scale: 1.04 }}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200 ${cat.tagBg} ${cat.tagText} ${cat.tagBorder}`}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
