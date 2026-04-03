import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  ExternalLink,
  FlaskConical,
  Globe,
  Heart,
  Microscope,
  ScrollText,
  Shield,
  Zap,
} from "lucide-react";

interface ResearchInterest {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
}

interface Publication {
  title: string;
  description: string;
  status: "published" | "preprint" | "in preparation" | "poster";
  year?: string;
  venue?: string;
  tags: string[];
  url?: string;
}

const researchInterests: ResearchInterest[] = [
  {
    title: "AI-Driven Cardiovascular Diagnostics",
    description: "Developing deep learning models for ECG interpretation and cardiac risk stratification, with a focus on accessibility in resource-limited African healthcare settings.",
    icon: <Heart className="h-5 w-5" />,
    accentColor: "#14B8A6",
    borderColor: "border-teal-500/20",
    bgColor: "bg-teal-500/[0.04]",
    textColor: "text-teal-300",
  },
  {
    title: "Predictive Analytics for Preventive Medicine",
    description: "Applying ML techniques to identify early biomarkers for diabetes, stroke, and chronic conditions before clinical onset — enabling proactive, preventive care delivery.",
    icon: <Brain className="h-5 w-5" />,
    accentColor: "#06B6D4",
    borderColor: "border-cyan-500/20",
    bgColor: "bg-cyan-500/[0.04]",
    textColor: "text-cyan-300",
  },
  {
    title: "Health AI for Resource-Limited Settings",
    description: "Designing lightweight, offline-capable AI diagnostic tools for deployment in low-bandwidth and low-compute environments across Sub-Saharan Africa.",
    icon: <Globe className="h-5 w-5" />,
    accentColor: "#f59e0b",
    borderColor: "border-amber-500/20",
    bgColor: "bg-amber-500/[0.04]",
    textColor: "text-amber-300",
  },
  {
    title: "Ethical AI in Healthcare",
    description: "Investigating fairness, bias, and transparency in medical AI systems, especially across diverse demographic groups in underrepresented African populations.",
    icon: <Shield className="h-5 w-5" />,
    accentColor: "#84cc16",
    borderColor: "border-lime-500/20",
    bgColor: "bg-lime-500/[0.04]",
    textColor: "text-lime-300",
  },
  {
    title: "Epidemic Surveillance & Outbreak Prediction",
    description: "Using time-series models and epidemiological data — combined with environmental and demographic signals — to predict and spatially map disease outbreaks.",
    icon: <Zap className="h-5 w-5" />,
    accentColor: "#06b6d4",
    borderColor: "border-cyan-500/20",
    bgColor: "bg-cyan-500/[0.04]",
    textColor: "text-cyan-300",
  },
  {
    title: "Multimodal Medical Imaging",
    description: "Exploring the fusion of imaging modalities — ECG, X-ray, and ultrasound — with structured clinical data to build richer, more accurate diagnostic AI models.",
    icon: <Microscope className="h-5 w-5" />,
    accentColor: "#a855f7",
    borderColor: "border-violet-500/20",
    bgColor: "bg-violet-500/[0.04]",
    textColor: "text-violet-300",
  },
];

const publications: Publication[] = [
  {
    title: "ECG Waveform Analysis for Cardiac Abnormality Detection using Convolutional Neural Networks",
    description: "Presents a CNN-based approach for detecting P, Q, R, S, T, and U waves in 12-lead ECG recordings, with Grad-CAM interpretability overlays for clinical validation. Evaluated on the PTB-XL dataset.",
    status: "in preparation",
    year: "2025",
    tags: ["Deep Learning", "Cardiology", "Interpretable AI", "ECG"],
    url: undefined,
  },
  {
    title: "Stroke Risk Prediction in African Populations: A Machine Learning Approach",
    description: "Develops and evaluates an XGBoost classifier with SHAP-based feature attribution for stroke risk prediction, with attention to demographic fairness across sub-Saharan African patient profiles.",
    status: "in preparation",
    year: "2025",
    tags: ["Predictive Modeling", "Stroke Prevention", "SHAP", "Health Equity"],
    url: undefined,
  },
  {
    title: "CardiacTEK: An AI-Powered Diagnostic Tool for Low-Resource Clinical Settings",
    description: "Research poster presenting CardiacTEK — a transfer learning-based ECG analysis system achieving 96% accuracy while optimized for deployment in resource-constrained African healthcare facilities.",
    status: "poster",
    year: "2024",
    venue: "Alliance4AI Research Symposium, ALU",
    tags: ["CardiacTEK", "Transfer Learning", "Health AI", "Africa"],
    url: undefined,
  },
  {
    title: "Personalized Treatment Recommendations Using Hybrid Collaborative Filtering in Healthcare",
    description: "Explores the use of collaborative and content-based filtering to generate patient-specific treatment pathways using anonymized clinical records, with a focus on explainability and ethical deployment.",
    status: "in preparation",
    year: "2025",
    tags: ["Recommender Systems", "Personalized Medicine", "Clinical AI"],
    url: undefined,
  },
];

const statusConfig: Record<Publication['status'], { label: string; bg: string; text: string; border: string }> = {
  published: { label: "Published", bg: "bg-teal-500/10", text: "text-teal-300", border: "border-teal-500/20" },
  preprint: { label: "Preprint", bg: "bg-cyan-500/10", text: "text-cyan-300", border: "border-cyan-500/20" },
  poster: { label: "Research Poster", bg: "bg-amber-500/10", text: "text-amber-300", border: "border-amber-500/20" },
  "in preparation": { label: "In Preparation", bg: "bg-gray-500/10", text: "text-gray-400", border: "border-gray-500/20" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 110, damping: 18 } },
};

export function ResearchSection() {
  return (
    <section
      id="research"
      className="py-24 px-6 sm:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #030712, #060c1a, #030712)' }}>

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-teal-400" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-indigo-500" />
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-500/10 border border-teal-500/20 text-teal-300 mb-4">
            <FlaskConical className="h-3 w-3" /> Research
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Research & Publications</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Advancing the frontiers of AI in healthcare through rigorous research, clinical validation, and open knowledge-sharing.
          </p>
        </motion.div>

        {/* ── Research Interests ── */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <h3 className="text-lg font-bold text-white">Research Interests</h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ staggerChildren: 0.08 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchInterests.map((interest, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border ${interest.borderColor} ${interest.bgColor} p-6 relative overflow-hidden group transition-all duration-300`}>
                <div
                  className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, transparent, ${interest.accentColor}55, transparent)` }}
                />
                <div
                  className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ background: interest.accentColor }}
                />
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border"
                  style={{ background: `${interest.accentColor}12`, borderColor: `${interest.accentColor}25`, color: interest.accentColor }}>
                  {interest.icon}
                </div>
                <h4 className={`text-sm font-bold ${interest.textColor} mb-2 leading-snug`}>{interest.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{interest.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Publications ── */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <h3 className="text-lg font-bold text-white">Publications</h3>
          </div>

          <div className="space-y-5">
            {publications.map((pub, i) => {
              const statusCfg = statusConfig[pub.status];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group bg-white/[0.02] border border-white/8 hover:border-teal-500/20 rounded-2xl p-6 relative overflow-hidden transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-teal-500/[0.08] border border-teal-500/15 rounded-xl shrink-0 mt-0.5">
                        <ScrollText className="h-4 w-4 text-teal-400" />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-bold leading-snug mb-1">{pub.title}</h4>
                        {pub.venue && (
                          <p className="text-teal-400/60 text-xs">{pub.venue}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {pub.year && <span className="text-gray-600 text-xs">{pub.year}</span>}
                      <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${statusCfg.bg} ${statusCfg.text} ${statusCfg.border}`}>
                        {statusCfg.label}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-500 text-xs leading-relaxed mb-4 ml-11">{pub.description}</p>

                  <div className="flex items-center justify-between ml-11">
                    <div className="flex flex-wrap gap-1.5">
                      {pub.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/[0.04] border border-white/8 text-gray-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {pub.url && (
                      <a href={pub.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-gray-600 hover:text-teal-300 transition-colors duration-200">
                        <ExternalLink className="h-3.5 w-3.5" /> Read
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Research CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center">
            <p className="text-gray-600 text-sm mb-4">Interested in collaborating on research?</p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-teal-500/10 border border-teal-500/20 text-teal-300 hover:bg-teal-500/18 transition-all duration-300">
              <BookOpen className="h-4 w-4" />
              Discuss Research Collaboration
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
