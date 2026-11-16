import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import {
  aboutBio,
  aboutName,
  aboutSubtitle,
  achievements,
  missionItems,
  profileImages,
  resumeUrl,
} from "../data/portfolio/about";

export function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="w-full relative overflow-hidden text-gray-100"
      style={{ background: 'linear-gradient(to bottom, #0a1628, #0f1e38, #0a1628)' }}>

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #14b8a6 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Hero: Photo + Bio */}
      <div className="relative flex items-center">
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 px-6 pt-20 pb-10">

          {/* Photo */}
          <motion.div
            className="relative shrink-0"
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}>
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
              {profileImages.map((img, index) => (
                <motion.img
                  key={img.src}
                  src={img.src}
                  alt="Praise Orly Atadja"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                />
              ))}
              {/* Caption */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-black/85 via-black/50 to-transparent">
                  <p className="text-xs text-white/80 font-medium tracking-wide">
                    {profileImages[currentImageIndex].caption}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-1.5 mt-4">
              {profileImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImageIndex(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === currentImageIndex ? 16 : 6,
                    height: 4,
                    background: i === currentImageIndex ? '#14B8A6' : 'rgba(255,255,255,0.18)',
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Bio */}
          <div className="flex-1 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-500/10 border border-teal-500/20 text-teal-300 mb-4">
                <Sparkles className="h-3 w-3" /> About Me
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                {aboutName}
              </h1>
              <p className="text-teal-300/80 text-base font-medium mt-1.5">
                {aboutSubtitle}
              </p>
            </motion.div>

            <motion.p
              className="text-gray-300 text-[15px] leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}>
              {aboutBio}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-500/12 border border-teal-500/25 text-teal-300 rounded-full text-sm font-medium hover:bg-teal-500/22 hover:border-teal-400/40 transition-all duration-300">
                View Resume <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-sm font-medium hover:bg-white/8 hover:text-white transition-all duration-300">
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Vision & Key Achievements */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-teal-500/[0.03] border border-teal-500/15 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-8 bg-teal-500 pointer-events-none" />
            <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              My Vision & Mission
            </h2>
            <div className="space-y-3">
              {missionItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-teal-500/20 transition-colors duration-200">
                  <span className="mt-0.5 text-teal-400 shrink-0"><item.icon className="h-4 w-4" /></span>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-teal-500/[0.03] border border-teal-500/15 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
            <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              Key Achievements
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -2 }}
                  className={`p-4 rounded-xl border ${item.borderColor} ${item.bgColor} group transition-all duration-200`}>
                  <p className={`text-2xl font-bold ${item.textColor} leading-none mb-1`}>{item.metric}</p>
                  <p className="text-white text-xs font-semibold mb-1.5">{item.label}</p>
                  <p className="text-gray-500 text-[11px] leading-snug">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
