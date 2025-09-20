import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';

const testimonialsData = [
  { id: "1", quote: "Amazing work on the AI project!", author: "Jane Doe", role: "Data Scientist" },
  { id: "2", quote: "The task management system is top-notch.", author: "John Smith", role: "Project Manager" },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <div className="py-16 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-poppins font-bold text-teal-700 dark:text-teal-300 mb-8 text-center">
          What People Say
        </h2>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
        >
          <QuoteIcon className="h-8 w-8 text-coral-600 mb-4" />
          <p className="text-lg font-inter text-gray-800 dark:text-gray-200 italic">
            "{testimonialsData[currentIndex].quote}"
          </p>
          <p className="mt-4 text-sm font-inter text-teal-700 dark:text-teal-300">
            - {testimonialsData[currentIndex].author}, {testimonialsData[currentIndex].role}
          </p>
        </motion.div>
        <div className="flex justify-center gap-4 mt-6">
          <button onClick={handlePrev} className="p-2 bg-teal-700 text-white rounded-full hover:bg-coral-600">
            ←
          </button>
          <button onClick={handleNext} className="p-2 bg-teal-700 text-white rounded-full hover:bg-coral-600">
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;