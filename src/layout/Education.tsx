import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, ExternalLink, FileBadge, GraduationCap, X } from "lucide-react";
import React, { useState } from "react";

interface Certification {
  name: string; issuer: string; date: string;
  status: "completed" | "in progress"; url: string; category: string;
}

const educationData = {
  institution: "African Leadership University (ALU)",
  degree: "BSc Software Engineering — First Class Honours",
  specialization: "Machine Learning · AI for Healthcare",
  duration: "Jan 2022 – June 2025",
  highlights: [
    "Graduated with First Class Honours (4.56 GPA)",
    "Specialization in AI-driven healthcare diagnostics",
    "Led multiple research & innovation projects",
    "Active member of Alliance4AI ALU Chapter",
  ],
};

const allCertifications: Certification[] = [
  { name: "AI For Good", issuer: "DeepLearning.AI", date: "Sept 2025", status: "completed", url: "/certifications/project-management.pdf", category: "AI & Machine Learning" },
  { name: "AI For Medicine", issuer: "DeepLearning.AI", date: "Sept 2025", status: "completed", url: "/certifications/project-management.pdf", category: "AI & Machine Learning" },
  { name: "Generative AI for Data Scientists", issuer: "IBM", date: "May 2025", status: "completed", url: "/certifications/generative_ai.pdf", category: "AI & Machine Learning" },
  { name: "AI Foundations For Everyone", issuer: "IBM", date: "May 2025", status: "completed", url: "/certifications/AI_Foundations.pdf", category: "AI & Machine Learning" },
  { name: "IT & Cloud Fundamentals Specialization", issuer: "IBM", date: "Mar 2023", status: "completed", url: "/certifications/cloud-fundamentals.pdf", category: "Cloud & Infrastructure" },
];

const featuredCerts = allCertifications.slice(0, 4);

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "AI & Machine Learning": { bg: "bg-teal-500/10", text: "text-teal-300", border: "border-teal-500/20" },
  "Cloud & Infrastructure": { bg: "bg-indigo-500/10", text: "text-indigo-300", border: "border-indigo-500/20" },
};

const CertCard: React.FC<{ cert: Certification; onClick: () => void; index: number }> = ({ cert, onClick, index }) => {
  const cat = categoryColors[cert.category] ?? { bg: "bg-gray-500/10", text: "text-gray-300", border: "border-gray-500/20" };
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.08 }}
      whileHover={{ y: -3 }} onClick={onClick}
      className="group cursor-pointer bg-white/[0.02] border border-white/8 hover:border-teal-500/25 rounded-xl p-5 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex items-start gap-3">
        <div className="p-2 bg-teal-500/10 border border-teal-500/15 rounded-lg shrink-0">
          <Award className="h-4 w-4 text-teal-400" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-white text-sm font-semibold leading-snug mb-1">{cert.name}</h4>
          <p className="text-gray-500 text-xs">{cert.issuer}</p>
          <div className="flex items-center justify-between mt-2">
            <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${cat.bg} ${cat.text} ${cat.border}`}>{cert.category}</span>
            <span className="text-gray-600 text-[10px]">{cert.date}</span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 right-3 text-gray-700 group-hover:text-teal-400 transition-colors duration-200">
        <ExternalLink className="h-3.5 w-3.5" />
      </div>
    </motion.div>
  );
};

const CertModal: React.FC<{ cert: Certification | null; onClose: () => void }> = ({ cert, onClose }) => {
  if (!cert) return null;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.93, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="bg-gray-950 border border-teal-500/15 rounded-2xl p-6 max-w-4xl w-full relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/8 transition-all duration-200">
          <X className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-teal-500/10 border border-teal-500/20 rounded-xl">
            <Award className="h-5 w-5 text-teal-400" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">{cert.name}</h3>
            <p className="text-gray-400 text-sm">{cert.issuer} · {cert.date}</p>
          </div>
        </div>
        <div className="bg-gray-900 rounded-xl overflow-hidden border border-white/5">
          <iframe src={cert.url} className="w-full h-[480px]" title={`${cert.name} Certificate`} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const AllCertsModal: React.FC<{ isOpen: boolean; onClose: () => void; onSelect: (cert: Certification) => void }> = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;
  const grouped = allCertifications.reduce((acc, cert) => {
    if (!acc[cert.category]) acc[cert.category] = [];
    acc[cert.category].push(cert);
    return acc;
  }, {} as Record<string, Certification[]>);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.93, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 24 }}
        className="bg-gray-950 border border-teal-500/15 rounded-2xl p-6 max-w-3xl w-full relative shadow-2xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/8 transition-all duration-200">
          <X className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-teal-500/10 border border-teal-500/20 rounded-xl">
            <FileBadge className="h-5 w-5 text-teal-400" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">All Certifications</h3>
            <p className="text-gray-500 text-sm">{allCertifications.length} certificates · Click to view</p>
          </div>
        </div>
        <div className="space-y-6">
          {Object.entries(grouped).map(([category, certs]) => {
            const cat = categoryColors[category] ?? { bg: "bg-gray-500/10", text: "text-gray-300", border: "border-gray-500/20" };
            return (
              <div key={category}>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${cat.bg} ${cat.text} ${cat.border} mb-3`}>{category}</span>
                <div className="grid sm:grid-cols-2 gap-3">
                  {certs.map((cert, i) => (
                    <motion.button key={i} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      onClick={() => { onSelect(cert); onClose(); }}
                      className="text-left p-4 bg-white/[0.02] border border-white/8 hover:border-teal-500/25 rounded-xl transition-all duration-200 group">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-white text-sm font-medium leading-snug">{cert.name}</p>
                          <p className="text-gray-500 text-xs mt-1">{cert.issuer} · {cert.date}</p>
                        </div>
                        <ExternalLink className="h-3.5 w-3.5 text-gray-700 group-hover:text-teal-400 shrink-0 transition-colors duration-200 mt-0.5" />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 pt-4 border-t border-white/5 flex justify-center">
          <a href="https://drive.google.com/drive/folders/1YWkW5CRaslwAh_fMdb1roDbti71WBWO2?usp=sharing"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500/10 border border-teal-500/20 text-teal-300 rounded-full text-sm font-medium hover:bg-teal-500/18 transition-all duration-200">
            <ExternalLink className="h-3.5 w-3.5" />
            View Full Certificate Drive
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Education = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [showAllCerts, setShowAllCerts] = useState(false);

  return (
    <section id="education" className="py-24 px-6 sm:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #030712, #060c1a, #030712)' }}>
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-teal-500" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-500/10 border border-teal-500/20 text-teal-300 mb-4">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Education & Certifications</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Academic foundation and continuous professional development in AI, machine learning, and healthcare technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Education */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-teal-500/[0.03] border border-teal-500/15 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/45 to-transparent" />
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-[0.06] bg-teal-500 pointer-events-none" />
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Education</p>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2.5 bg-teal-500/10 border border-teal-500/15 rounded-xl shrink-0">
                <GraduationCap className="h-5 w-5 text-teal-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base leading-snug">{educationData.institution}</h3>
                <p className="text-teal-300/80 text-sm mt-0.5">{educationData.degree}</p>
                <p className="text-gray-600 text-xs italic mt-0.5">{educationData.specialization}</p>
                <div className="flex items-center gap-1.5 mt-2 text-gray-600 text-xs">
                  <Calendar className="h-3.5 w-3.5" />{educationData.duration}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {educationData.highlights.map((h, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-2.5 text-xs text-gray-400">
                  <span className="w-1 h-1 rounded-full bg-teal-400 mt-1.5 shrink-0" />{h}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="md:col-span-3 bg-teal-500/[0.03] border border-teal-500/15 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/45 to-transparent" />
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">Certifications</p>
              </div>
              <button onClick={() => setShowAllCerts(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 hover:bg-indigo-500/18 transition-all duration-200">
                <FileBadge className="h-3.5 w-3.5" />
                View All ({allCertifications.length})
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {featuredCerts.map((cert, i) => (
                <CertCard key={i} cert={cert} index={i} onClick={() => setSelectedCert(cert)} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}
      </AnimatePresence>
      <AnimatePresence>
        {showAllCerts && (
          <AllCertsModal isOpen={showAllCerts} onClose={() => setShowAllCerts(false)} onSelect={(cert) => setSelectedCert(cert)} />
        )}
      </AnimatePresence>
    </section>
  );
};
