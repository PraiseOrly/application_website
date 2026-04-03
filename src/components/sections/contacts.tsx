import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, CheckCircle, Send, Loader2 } from 'lucide-react';
import resumeData from '../../data/resume.json';

interface FormInputs {
  name: string;
  email: string;
  formType: 'message' | 'collaborate' | 'event' | 'speaking' | 'teaching';
  message?: string;
  repoUrl?: string;
  role?: string;
  timeCommitment?: string;
  projectDetails?: string;
  eventName?: string;
  eventUrl?: string;
  date?: string;
  topic?: string;
  duration?: string;
  audience?: string;
  eventDate?: string;
  additionalNotes?: string;
  subject?: string;
  format?: string;
  frequency?: string;
  audienceLevel?: string;
  learningObjectives?: string;
}

const formTypeLabels: Record<FormInputs['formType'], string> = {
  message: 'General Message',
  collaborate: 'GitHub Collaboration',
  event: 'Event Participation',
  speaking: 'Speaking Engagement',
  teaching: 'Teaching Request',
};

const inputCls = "w-full p-3.5 rounded-xl bg-white/[0.04] border border-white/8 text-white placeholder-gray-600 focus:border-teal-500/40 focus:ring-2 focus:ring-teal-500/10 outline-none transition-all duration-200 text-sm";
const selectCls = "w-full p-3.5 rounded-xl bg-white/[0.04] border border-white/8 text-white focus:border-teal-500/40 focus:ring-2 focus:ring-teal-500/10 outline-none transition-all duration-200 text-sm";
const labelCls = "block text-xs font-semibold tracking-wide text-gray-500 uppercase mb-1.5";

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<FormInputs>({
    defaultValues: { name: '', email: '', formType: 'message' },
  });

  const formType = watch('formType');

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSending(true);
    setSendError(null);
    try {
      const filteredData = Object.fromEntries(
        Object.entries(data).filter(([, v]) => v !== undefined && v !== '')
      );
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `Portfolio: ${formTypeLabels[data.formType]} from ${data.name}`,
          from_name: data.name,
          email: data.email,
          message: Object.entries(filteredData)
            .map(([k, v]) => `${k}: ${v}`)
            .join('\n'),
        }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.message);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch {
      setSendError('Failed to send. Please try again or email praiseorly.a@gmail.com directly.');
    } finally {
      setIsSending(false);
    }
  };

  const renderFields = () => {
    switch (formType) {
      case 'message':
        return (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-4">
            <div>
              <label className={labelCls}>Your Message</label>
              <textarea {...register('message', { required: 'Message is required' })}
                className={`${inputCls} resize-none h-36`}
                placeholder="How can I assist you with AI or healthcare projects?" />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
            </div>
          </motion.div>
        );
      case 'collaborate':
        return (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-4">
            <div>
              <label className={labelCls}>GitHub Repository URL (optional)</label>
              <input {...register('repoUrl')} className={inputCls} placeholder="https://github.com/username/repo" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Desired Role</label>
                <select {...register('role', { required: 'Role is required' })} className={selectCls}>
                  <option value="">Select Role</option>
                  {['contributor', 'maintainer', 'reviewer'].map(r => <option key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</option>)}
                </select>
                {errors.role && <p className="text-red-400 text-xs mt-1">{errors.role.message}</p>}
              </div>
              <div>
                <label className={labelCls}>Time Commitment</label>
                <select {...register('timeCommitment', { required: 'Required' })} className={selectCls}>
                  <option value="">Select Time</option>
                  {['<5h', '5-10h', '10-20h', '20+h'].map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.timeCommitment && <p className="text-red-400 text-xs mt-1">{errors.timeCommitment.message}</p>}
              </div>
            </div>
            <div>
              <label className={labelCls}>Project Details (optional)</label>
              <textarea {...register('projectDetails')} className={`${inputCls} resize-none h-28`} placeholder="Describe your AI/healthcare project or collaboration goals" />
            </div>
          </motion.div>
        );
      case 'event':
        return (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-4">
            <div>
              <label className={labelCls}>Event Name</label>
              <input {...register('eventName', { required: 'Required' })} className={inputCls} placeholder="e.g., AI in Healthcare Summit 2025" />
              {errors.eventName && <p className="text-red-400 text-xs mt-1">{errors.eventName.message}</p>}
            </div>
            <div>
              <label className={labelCls}>Event Website (optional)</label>
              <input {...register('eventUrl')} className={inputCls} placeholder="https://event-website.com" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Your Role</label>
                <select {...register('role', { required: 'Required' })} className={selectCls}>
                  <option value="">Select Role</option>
                  {['attendee', 'speaker', 'organizer'].map(r => <option key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Event Date</label>
                <input type="date" {...register('date', { required: 'Required' })} className={inputCls} />
              </div>
            </div>
          </motion.div>
        );
      case 'speaking':
        return (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-4">
            <div>
              <label className={labelCls}>Event Name</label>
              <input {...register('eventName', { required: 'Required' })} className={inputCls} placeholder="e.g., AI Healthcare Conference 2025" />
              {errors.eventName && <p className="text-red-400 text-xs mt-1">{errors.eventName.message}</p>}
            </div>
            <div>
              <label className={labelCls}>Topic</label>
              <input {...register('topic', { required: 'Required' })} className={inputCls} placeholder="e.g., AI for Cardiovascular Diagnostics" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Duration</label>
                <select {...register('duration', { required: 'Required' })} className={selectCls}>
                  <option value="">Select Duration</option>
                  {['30m', '45m', '60m', 'custom'].map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Audience</label>
                <select {...register('audience', { required: 'Required' })} className={selectCls}>
                  <option value="">Select Audience</option>
                  {['healthcare professionals', 'researchers', 'students', 'general'].map(a => <option key={a} value={a}>{a.charAt(0).toUpperCase() + a.slice(1)}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className={labelCls}>Event Date</label>
              <input type="date" {...register('eventDate', { required: 'Required' })} className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Additional Notes (optional)</label>
              <textarea {...register('additionalNotes')} className={`${inputCls} resize-none h-24`} placeholder="Any specific requirements or details" />
            </div>
          </motion.div>
        );
      case 'teaching':
        return (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="space-y-4">
            <div>
              <label className={labelCls}>Subject</label>
              <input {...register('subject', { required: 'Required' })} className={inputCls} placeholder="e.g., Machine Learning for Healthcare" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Format</label>
                <select {...register('format', { required: 'Required' })} className={selectCls}>
                  <option value="">Select Format</option>
                  {['workshop', 'course', 'tutorial', 'mentorship'].map(f => <option key={f} value={f}>{f.charAt(0).toUpperCase() + f.slice(1)}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Frequency</label>
                <select {...register('frequency', { required: 'Required' })} className={selectCls}>
                  <option value="">Select Frequency</option>
                  {['single', 'weekly', 'bi-weekly', 'monthly'].map(f => <option key={f} value={f}>{f.charAt(0).toUpperCase() + f.slice(1)}</option>)}
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Duration</label>
                <select {...register('duration', { required: 'Required' })} className={selectCls}>
                  <option value="">Select Duration</option>
                  {['1h', '2h', '3h', 'custom'].map(d => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Audience Level</label>
                <select {...register('audienceLevel', { required: 'Required' })} className={selectCls}>
                  <option value="">Select Level</option>
                  {['beginner', 'intermediate', 'advanced'].map(l => <option key={l} value={l}>{l.charAt(0).toUpperCase() + l.slice(1)}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className={labelCls}>Learning Objectives</label>
              <textarea {...register('learningObjectives', { required: 'Required' })} className={`${inputCls} resize-none h-24`} placeholder="What participants will learn about AI in healthcare" />
              {errors.learningObjectives && <p className="text-red-400 text-xs mt-1">{errors.learningObjectives.message}</p>}
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: resumeData.profile.contact.github },
    { name: 'LinkedIn', icon: Linkedin, url: resumeData.profile.contact.linkedin || '#' },
    { name: 'Email', icon: Mail, url: `mailto:${resumeData.profile.contact.email}` },
    { name: 'Portfolio', icon: Globe, url: resumeData.profile.contact.portfolio },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center py-14 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0a1628, #0f1e38, #0a1628)' }}>

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(20,184,166,0.06) 0%, transparent 70%)' }} />
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-[0.05] pointer-events-none bg-teal-500" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-[0.04] pointer-events-none bg-indigo-500" />

      <div className="max-w-5xl w-full flex flex-col lg:flex-row gap-8 relative z-10">

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-72 shrink-0 space-y-6">

          <div className="bg-teal-500/[0.04] border border-teal-500/15 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/45 to-transparent" />
            <h3 className="text-white font-bold text-base mb-1">Let's Collaborate</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Open to AI projects, research partnerships, speaking, and teaching opportunities.
            </p>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-teal-300 transition-colors duration-200 text-sm">
                  <link.icon className="h-4 w-4 shrink-0" />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="bg-amber-500/[0.04] border border-amber-500/15 rounded-2xl p-6">
            <p className="text-amber-300 text-xs font-semibold tracking-widest uppercase mb-2">Response Time</p>
            <p className="text-white font-bold text-lg mb-1">Within 48 hours</p>
            <p className="text-gray-600 text-xs">All inquiries are read and responded to personally.</p>
          </div>
        </motion.aside>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex-1 bg-teal-500/[0.03] border border-teal-500/15 rounded-2xl p-7 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/45 to-transparent" />

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-5">
                  <CheckCircle className="h-8 w-8 text-teal-400" />
                </div>
                <h2 className="text-white font-bold text-xl mb-2">Message Sent!</h2>
                <p className="text-gray-400 text-sm max-w-xs">
                  Your {formTypeLabels[formType].toLowerCase()} has been received. I'll respond within 48 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full text-sm font-medium bg-teal-500/10 border border-teal-500/20 text-teal-300 hover:bg-teal-500/18 transition-all duration-200">
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                initial={{ opacity: 1 }}>
                <div>
                  <h2 className="text-white font-bold text-xl mb-1">Get in Touch</h2>
                  <p className="text-gray-500 text-sm">Let's collaborate on AI-driven healthcare solutions.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Full Name</label>
                    <input {...register('name', { required: 'Name is required' })} className={inputCls} placeholder="Your Name" />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className={labelCls}>Email</label>
                    <input {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' } })} className={inputCls} placeholder="your@email.com" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Request Type</label>
                  <select {...register('formType')} className={selectCls}>
                    {Object.entries(formTypeLabels).map(([type, label]) => (
                      <option key={type} value={type}>{label}</option>
                    ))}
                  </select>
                </div>

                <AnimatePresence mode="wait">{renderFields()}</AnimatePresence>

                {sendError && (
                  <p className="text-red-400 text-xs text-center">{sendError}</p>
                )}

                <motion.button
                  whileHover={{ scale: isSending ? 1 : 1.02 }}
                  whileTap={{ scale: isSending ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 rounded-full text-sm font-semibold bg-teal-500/15 border border-teal-500/30 text-teal-200 hover:bg-teal-500/25 hover:border-teal-400/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                  {isSending
                    ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                    : <><Send className="h-4 w-4" /> Send Request</>
                  }
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
