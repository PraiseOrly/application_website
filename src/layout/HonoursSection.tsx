import { motion } from "framer-motion";
import { Award, Link2, Mic2 } from "lucide-react";
import {
  conferences,
  honours,
  programmeCertificates,
  type HonourItem,
} from "../data/portfolio/honours";

const cardCls = "bg-teal-500/[0.03] border border-teal-500/15 rounded-2xl p-8 relative overflow-hidden";

const CardHeading = ({ label, dotCls }: { label: string; dotCls: string }) => (
  <div className="flex items-center gap-2 mb-6">
    <span className={`w-1.5 h-1.5 rounded-full ${dotCls}`} />
    <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">{label}</p>
  </div>
);

const ItemList = ({ items, dotCls }: { items: HonourItem[]; dotCls: string }) => (
  <div className="space-y-3">
    {items.map((item, i) => (
      <motion.div key={item.text} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ delay: i * 0.06 }}
        className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed">
        <span className={`w-1 h-1 rounded-full ${dotCls} mt-1.5 shrink-0`} />
        <p>
          {item.text}
          {item.date && <span className="text-gray-600"> · {item.date}</span>}
        </p>
      </motion.div>
    ))}
  </div>
);

export const HonoursSection = () => {
  return (
    <section id="honours" className="py-14 px-6 sm:px-8 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a1628, #0f1e38, #0a1628)' }}>
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-violet-500" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-teal-500/10 border border-teal-500/20 text-teal-300 mb-4">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Honours & Conferences</h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Awards, delegations and programme certificates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* Honours and Awards */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className={`md:col-span-3 ${cardCls}`}>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/45 to-transparent" />
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full blur-2xl opacity-[0.06] bg-teal-500 pointer-events-none" />
            <div className="flex items-center justify-between">
              <CardHeading label="Honours and Awards" dotCls="bg-teal-400" />
              <Award className="h-4 w-4 text-teal-400 mb-6" />
            </div>
            <ItemList items={honours} dotCls="bg-teal-400" />
          </motion.div>

          <div className="md:col-span-2 space-y-6">
            {/* Conferences and Delegations */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }} className={cardCls}>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/45 to-transparent" />
              <div className="flex items-center justify-between">
                <CardHeading label="Conferences and Delegations" dotCls="bg-violet-400" />
                <Mic2 className="h-4 w-4 text-violet-400 mb-6" />
              </div>
              <ItemList items={conferences} dotCls="bg-violet-400" />
            </motion.div>

            {/* Programme certificates */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.2 }} className={cardCls}>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/45 to-transparent" />
              <CardHeading label="Programme Certificates" dotCls="bg-indigo-400" />
              <ul className="space-y-2">
                {programmeCertificates.map((cert) => {
                  const content = (
                    <>
                      <Link2 className={`h-3.5 w-3.5 shrink-0 mt-0.5 ${cert.url ? "text-teal-400" : "text-gray-700"}`} />
                      <span>
                        {cert.name}
                        {cert.date && <span className="text-gray-600"> · {cert.date}</span>}
                      </span>
                    </>
                  );
                  return (
                    <li key={cert.name}>
                      {cert.url ? (
                        <a href={cert.url} target="_blank" rel="noopener noreferrer"
                          className="flex items-start gap-2.5 text-xs text-gray-400 hover:text-teal-300 transition-colors duration-200">
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-start gap-2.5 text-xs text-gray-400">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
