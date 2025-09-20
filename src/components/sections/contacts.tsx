import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, CheckCircle } from 'lucide-react';
import resumeData from '../../data/resume.json';

// Define form input types
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

const ContactForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      email: '',
      formType: 'message',
    },
  });

  const formType = watch('formType');

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setTimeout(() => {
      console.log('Form Data:', data);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1000);
  };

  const renderFormFields = () => {
    switch (formType) {
      case 'message':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                Your Message
              </label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none resize-none h-36 backdrop-blur-md"
                placeholder="How can I assist you with AI or healthcare projects?"
              />
              {errors.message && <p className="text-red-400 text-sm">{errors.message.message}</p>}
            </div>
          </motion.div>
        );
      case 'collaborate':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label htmlFor="repoUrl" className="block text-sm font-medium text-gray-200">
                GitHub Repository URL (optional)
              </label>
              <input
                id="repoUrl"
                {...register('repoUrl')}
                className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                placeholder="https://github.com/username/repo"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="role" className="block text-sm font-medium text-gray-200">
                  Desired Role
                </label>
                <select
                  id="role"
                  {...register('role', { required: 'Role is required' })}
                  className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                >
                  <option value="">Select Role</option>
                  {['contributor', 'maintainer', 'reviewer'].map((role) => (
                    <option key={role} value={role}>
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </option>
                  ))}
                </select>
                {errors.role && <p className="text-red-400 text-sm">{errors.role.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="timeCommitment" className="block text-sm font-medium text-gray-200">
                  Time Commitment
                </label>
                <select
                  id="timeCommitment"
                  {...register('timeCommitment', { required: 'Time commitment is required' })}
                  className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                >
                  <option value="">Select Time</option>
                  {['<5h', '5-10h', '10-20h', '20+h'].map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.timeCommitment && <p className="text-red-400 text-sm">{errors.timeCommitment.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-200">
                Project Details (optional)
              </label>
              <textarea
                id="projectDetails"
                {...register('projectDetails')}
                className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none resize-none h-28 backdrop-blur-md"
                placeholder="Describe your AI/healthcare project or collaboration goals"
              />
            </div>
          </motion.div>
        );
      case 'event':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label htmlFor="eventName" className="block text-sm font-medium text-gray-200">
                Event Name
              </label>
              <input
                id="eventName"
                {...register('eventName', { required: 'Event name is required' })}
                className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                placeholder="e.g., AI in Healthcare Summit 2025"
              />
              {errors.eventName && <p className="text-red-400 text-sm">{errors.eventName.message}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="eventUrl" className="block text-sm font-medium text-gray-200">
                Event Website (optional)
              </label>
              <input
                id="eventUrl"
                {...register('eventUrl')}
                className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                placeholder="https://event-website.com"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="role" className="block text-sm font-medium text-gray-200">
                  Your Role
                </label>
                <select
                  id="role"
                  {...register('role', { required: 'Role is required' })}
                  className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                >
                  <option value="">Select Role</option>
                  {['attendee', 'speaker', 'organizer'].map((role) => (
                    <option key={role} value={role}>
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </option>
                  ))}
                </select>
                {errors.role && <p className="text-red-400 text-sm">{errors.role.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="date" className="block text-sm font-medium text-gray-200">
                  Event Date
                </label>
                <input
                  id="date"
                  type="date"
                  {...register('date', { required: 'Event date is required' })}
                  className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                />
                {errors.date && <p className="text-red-400 text-sm">{errors.date.message}</p>}
              </div>
            </div>
          </motion.div>
        );
      case 'speaking':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label htmlFor="eventName" className="block text-sm font-medium text-gray-200">
                Event Name
              </label>
              <input
                id="eventName"
                {...register('eventName', { required: 'Event name is required' })}
                className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                placeholder="e.g., AI Healthcare Conference 2025"
              />
              {errors.eventName && <p className="text-red-400 text-sm">{errors.eventName.message}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="topic" className="block text-sm font-medium text-gray-200">
                Topic
              </label>
              <input
                id="topic"
                {...register('topic', { required: 'Topic is required' })}
                className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                placeholder="e.g., AI for Cardiovascular Diagnostics"
              />
              {errors.topic && <p className="text-red-400 text-sm">{errors.topic.message}</p>}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="duration" className="block text-sm font-medium text-gray-200">
                  Duration
                </label>
                <select
                  id="duration"
                  {...register('duration', { required: 'Duration is required' })}
                  className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                >
                  <option value="">Select Duration</option>
                  {['30m', '45m', '60m', 'custom'].map((duration) => (
                    <option key={duration} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>
                {errors.duration && <p className="text-red-400 text-sm">{errors.duration.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="audience" className="block text-sm font-medium text-gray-200">
                  Audience
                </label>
                <select
                  id="audience"
                  {...register('audience', { required: 'Audience is required' })}
                  className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                >
                  <option value="">Select Audience</option>
                  {['healthcare professionals', 'researchers', 'students', 'general'].map((audience) => (
                    <option key={audience} value={audience}>
                      {audience.charAt(0).toUpperCase() + audience.slice(1)}
                    </option>
                  ))}
                </select>
                {errors.audience && <p className="text-red-400 text-sm">{errors.audience.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="eventDate" className="block text-sm font-medium text-gray-200">
                Event Date
              </label>
              <input
                id="eventDate"
                type="date"
                {...register('eventDate', { required: 'Event date is required' })}
                className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
              />
              {errors.eventDate && <p className="text-red-400 text-sm">{errors.eventDate.message}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-200">
                Additional Notes (optional)
              </label>
              <textarea
                id="additionalNotes"
                {...register('additionalNotes')}
                className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none resize-none h-28 backdrop-blur-md"
                placeholder="Any specific requirements or details"
              />
            </div>
          </motion.div>
        );
      case 'teaching':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-200">
                Subject
              </label>
              <input
                id="subject"
                {...register('subject', { required: 'Subject is required' })}
                className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                placeholder="e.g., Machine Learning for Healthcare"
              />
              {errors.subject && <p className="text-red-400 text-sm">{errors.subject.message}</p>}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="format" className="block text-sm font-medium text-gray-200">
                  Format
                </label>
                <select
                  id="format"
                  {...register('format', { required: 'Format is required' })}
                  className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                >
                  <option value="">Select Format</option>
                  {['workshop', 'course', 'tutorial', 'mentorship'].map((format) => (
                    <option key={format} value={format}>
                      {format.charAt(0).toUpperCase() + format.slice(1)}
                    </option>
                  ))}
                </select>
                {errors.format && <p className="text-red-400 text-sm">{errors.format.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="frequency" className="block text-sm font-medium text-gray-200">
                  Frequency
                </label>
                <select
                  id="frequency"
                  {...register('frequency', { required: 'Frequency is required' })}
                  className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                >
                  <option value="">Select Frequency</option>
                  {['single', 'weekly', 'bi-weekly', 'monthly'].map((frequency) => (
                    <option key={frequency} value={frequency}>
                      {frequency.charAt(0).toUpperCase() + frequency.slice(1)}
                    </option>
                  ))}
                </select>
                {errors.frequency && <p className="text-red-400 text-sm">{errors.frequency.message}</p>}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="duration" className="block text-sm font-medium text-gray-200">
                  Duration
                </label>
                <select
                  id="duration"
                  {...register('duration', { required: 'Duration is required' })}
                  className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                >
                  <option value="">Select Duration</option>
                  {['1h', '2h', '3h', 'custom'].map((duration) => (
                    <option key={duration} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>
                {errors.duration && <p className="text-red-400 text-sm">{errors.duration.message}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="audienceLevel" className="block text-sm font-medium text-gray-200">
                  Audience Level
                </label>
                <select
                  id="audienceLevel"
                  {...register('audienceLevel', { required: 'Audience level is required' })}
                  className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                >
                  <option value="">Select Level</option>
                  {['beginner', 'intermediate', 'advanced'].map((level) => (
                    <option key={level} value={level}>
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </option>
                  ))}
                </select>
                {errors.audienceLevel && <p className="text-red-400 text-sm">{errors.audienceLevel.message}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="learningObjectives" className="block text-sm font-medium text-gray-200">
                Learning Objectives
              </label>
              <textarea
                id="learningObjectives"
                {...register('learningObjectives', { required: 'Learning objectives are required' })}
                className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none resize-none h-28 backdrop-blur-md"
                placeholder="What participants will learn about AI in healthcare"
              />
              {errors.learningObjectives && <p className="text-red-400 text-sm">{errors.learningObjectives.message}</p>}
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-coral-900 flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.2),transparent_50%)] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,127,127,0.2),transparent_50%)] z-0" />

      <div className="max-w-5xl w-full flex flex-col lg:flex-row gap-8 z-10">
        {/* Social Links Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/4 bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center border border-gray-700/50"
        >
          <h3 className="text-xl font-bold text-teal-300 mb-6">Connect With Me</h3>
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, x: 5 }}
                className="flex items-center gap-3 text-gray-200 hover:text-teal-400 transition-colors"
              >
                <link.icon className="h-5 w-5" />
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.aside>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-3/4 bg-gray-800/40 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-700/50"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle className="h-16 w-16 text-teal-400 mx-auto mb-4" />
              </motion.div>
              <h2 className="text-3xl font-bold text-teal-300 mb-4">Thank You!</h2>
              <p className="text-gray-300 mb-6">
                Your {formTypeLabels[formType].toLowerCase()} request has been sent successfully!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSubmitted(false)}
                className="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition"
              >
                Send Another
              </motion.button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h2 className="text-3xl font-bold text-teal-300 text-center">Get in Touch</h2>
              <p className="text-gray-400 text-center mb-6">
                Let's collaborate on AI-driven healthcare solutions or discuss opportunities!
              </p>

              {/* Name and Email Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-2"
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                    Full Name
                  </label>
                  <input
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-2"
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                    Email
                  </label>
                  <input
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
                </motion.div>
              </div>

              {/* Form Type Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-2"
              >
                <label htmlFor="formType" className="block text-sm font-medium text-gray-200">
                  Request Type
                </label>
                <select
                  id="formType"
                  {...register('formType', { required: 'Please select a request type' })}
                  className="w-full p-4 rounded-xl bg-gray-800/60 border border-gray-700 text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none backdrop-blur-md"
                >
                  <option value="">Select Request Type</option>
                  {Object.keys(formTypeLabels).map((type) => (
                    <option key={type} value={type}>
                      {formTypeLabels[type as keyof typeof formTypeLabels]}
                    </option>
                  ))}
                </select>
                {errors.formType && <p className="text-red-400 text-sm">{errors.formType.message}</p>}
              </motion.div>

              {/* Dynamic Form Fields */}
              <AnimatePresence>{renderFormFields()}</AnimatePresence>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition flex items-center justify-center gap-2 text-lg font-semibold"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send Request
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;