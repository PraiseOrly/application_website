import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowUpRight, Award, Calendar, FileText, Link2, MapPin, Mic2, Presentation, type LucideIcon } from "lucide-react";
import {
  conferences,
  honours,
  programmeCertificates,
} from "../data/portfolio/honours";

const honourAccents = ["#14B8A6", "#06B6D4", "#8B5CF6", "#F59E0B"];
const CONF_ACCENT = "#8B5CF6";
const CERT_ACCENT = "#06B6D4";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/** Group header, matching the Project Showcase category header. */
const GroupHeader = ({ icon: Icon, label, count, accent }: { icon: LucideIcon; label: string; count: number; accent: string }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="p-2.5 rounded-xl border"
      style={{ background: `${accent}12`, borderColor: `${accent}25`, color: accent }}>
      <Icon className="h-5 w-5" />
    </div>
    <div className="flex items-center gap-3">
      <h3 className="text-xl font-bold" style={{ color: accent }}>{label}</h3>
      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold border"
        style={{ background: `${accent}12`, borderColor: `${accent}25`, color: accent }}>
        {count}
      </span>
    </div>
    <div className="hidden sm:block h-px flex-1"
      style={{ background: `linear-gradient(to right, ${accent}30, transparent)` }} />
  </div>
);

/** Shared card shell: accent top line + corner glow, like the Experience cards. */
const CardShell = ({ accent, className = "", children }: { accent: string; className?: string; children: ReactNode }) => (
  <motion.div variants={item} whileHover={{ y: -4 }}
    className={`group relative h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 overflow-hidden transition-colors duration-300 ${className}`}>
    <div className="absolute top-0 left-0 w-full h-[2px]"
      style={{ background: `linear-gradient(to right, ${accent}90, transparent)` }} />
    <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
      style={{ background: accent }} />
    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </motion.div>
);

const DateChip = ({ date, accent }: { date: string; accent: string }) => (
  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border whitespace-nowrap"
    style={{ background: `${accent}10`, borderColor: `${accent}25`, color: accent }}>
    <Calendar className="h-3 w-3" />{date}
  </span>
);

export const HonoursSection = () => {
  return (
    <section id="honours" className="py-14 px-6 sm:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a1628, #0f1e38, #0a1628)' }}>
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-violet-500" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-teal-400" />
      <div className="max-w-6xl mx-auto relative z-10 space-y-14">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-500/10 border border-teal-500/20 text-teal-300 mb-4">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Honours & Conferences</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Awards, delegations and programme certificates.
          </p>
        </motion.div>

        {/* Honours and Awards */}
        <div>
          <GroupHeader icon={Award} label="Honours and Awards" count={honours.length} accent="#14B8A6" />
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {honours.map((h, i) => {
              const accent = honourAccents[i % honourAccents.length];
              return (
                <CardShell key={h.title} accent={accent}>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="p-2 rounded-xl"
                      style={{ background: `${accent}15`, border: `1px solid ${accent}25`, color: accent }}>
                      <h.icon className="h-5 w-5" />
                    </div>
                    {h.date && <DateChip date={h.date} accent={accent} />}
                  </div>
                  <h4 className="text-white text-sm font-semibold leading-snug mb-1.5">{h.title}</h4>
                  {h.detail && <p className="text-gray-500 text-xs leading-relaxed">{h.detail}</p>}
                </CardShell>
              );
            })}
          </motion.div>
        </div>

        {/* Conferences and Delegations */}
        <div>
          <GroupHeader icon={Mic2} label="Conferences and Delegations" count={conferences.length} accent={CONF_ACCENT} />
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conferences.map((c) => (
              <CardShell key={c.event} accent={CONF_ACCENT} className={c.wide ? "lg:col-span-2" : ""}>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase border bg-violet-500/10 text-violet-300 border-violet-500/25">
                    {c.wide ? <FileText className="h-3 w-3" /> : <Mic2 className="h-3 w-3" />}
                    {c.role}
                  </span>
                  <DateChip date={c.date} accent={CONF_ACCENT} />
                </div>
                <h4 className="text-white text-base font-bold leading-snug mb-3">{c.event}</h4>
                <div className="mt-auto space-y-2">
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                    <MapPin className="h-3.5 w-3.5 shrink-0" />{c.place}
                  </div>
                  {c.note && (
                    <div className="flex items-start gap-1.5 text-xs text-violet-200/80 bg-violet-500/[0.06] border border-violet-500/15 rounded-lg px-2.5 py-1.5">
                      <Presentation className="h-3.5 w-3.5 shrink-0 mt-px text-violet-300" />{c.note}
                    </div>
                  )}
                </div>
              </CardShell>
            ))}
          </motion.div>
        </div>

        {/* Programme Certificates */}
        <div>
          <GroupHeader icon={Link2} label="Programme Certificates" count={programmeCertificates.length} accent={CERT_ACCENT} />
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programmeCertificates.map((cert) => {
              const body = (
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg shrink-0"
                    style={{ background: `${CERT_ACCENT}12`, border: `1px solid ${CERT_ACCENT}22`, color: cert.url ? CERT_ACCENT : "#4b5563" }}>
                    <Link2 className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-white text-xs font-semibold leading-snug">{cert.name}</p>
                    {cert.date && <p className="text-gray-600 text-[10px] mt-1">{cert.date}</p>}
                  </div>
                  {cert.url && (
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-gray-600 group-hover:text-cyan-300 transition-colors duration-200" />
                  )}
                </div>
              );
              return (
                <CardShell key={cert.name} accent={CERT_ACCENT} className="!p-4">
                  {cert.url ? (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="block">{body}</a>
                  ) : body}
                </CardShell>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
