import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './ProjectCard';
import Popup from './ProjectPopup';
import { ChevronDown, ChevronUp, Heart, Share2, Eye, Brain, Zap, Code, Globe, BarChart3, Lightbulb, Heart as HeartIcon, Microscope, Stethoscope, AlertTriangle, Target, Activity } from 'lucide-react';
import Button from './Projectbutton';
import ProjectHero from './ProjectHero';

// Project-specific Analysis and Insights Data

// ECG Waveform Analysis Analysis
const ecgAnalysisData = [
  {
    title: 'Predictive Accuracy',
    description: 'CNN models achieved reliable detection of P-QRS-T-U waveforms and classification of cardiac abnormalities with strong performance across multiple classes.',
    icon: <BarChart3 className="h-8 w-8 text-teal-400" />,
  },
  {
    title: 'Model Interpretability',
    description: 'Grad-CAM visualizations highlighted clinically relevant ECG regions, improving transparency for cardiologists.',
    icon: <Brain className="h-8 w-8 text-indigo-400" />,
  },
  {
    title: 'Practical Challenges',
    description: 'Addressed issues of noisy ECG scans, dataset imbalance, and computational efficiency for potential clinical use.',
    icon: <Zap className="h-8 w-8 text-purple-400" />,
  },
];

// ECG Waveform Analysis Insights
const ecgInsightsData = [
  {
    title: 'Clinical Impact',
    description: 'Accurate wave detection and abnormality classification can support early diagnosis and assist overburdened cardiologists.',
    icon: <HeartIcon className="h-8 w-8 text-teal-400" />,
  },
  {
    title: 'Trust & Usability',
    description: 'Visual explanations of model predictions build clinician confidence in AI-assisted ECG tools.',
    icon: <Globe className="h-8 w-8 text-green-400" />,
  },
  {
    title: 'Future Potential',
    description: 'Extensible to mobile and low-resource diagnostic platforms, enabling scalable, accessible cardiac care.',
    icon: <Lightbulb className="h-8 w-8 text-yellow-400" />,
  },
];

// Stroke Prediction Analysis
const strokeAnalysisData = [
  {
    title: 'Predictive Accuracy',
    description: 'Achieved strong classification performance (AUC > 0.85) in identifying patients at elevated risk of stroke, maintaining a balance between precision and recall.',
    icon: <BarChart3 className="h-8 w-8 text-teal-400" />,
  },
  {
    title: 'Model Interpretability',
    description: 'Applied SHAP values to rank medical and lifestyle risk factors, enabling clinicians to understand and validate model outputs.',
    icon: <Brain className="h-8 w-8 text-indigo-400" />,
  },
  {
    title: 'Practical Challenges',
    description: 'Managed imbalanced datasets, ensured proper calibration of risk scores, and optimized deployment for real-time use.',
    icon: <Zap className="h-8 w-8 text-purple-400" />,
  },
];

// Stroke Prediction Insights
const strokeInsightsData = [
  {
    title: 'Health Impact',
    description: 'Early identification of high-risk patients supports timely interventions, reducing the burden of stroke in underserved communities.',
    icon: <HeartIcon className="h-8 w-8 text-teal-400" />,
  },
  {
    title: 'Trust & Usability',
    description: 'Transparent feature importance and risk scoring improve clinical adoption of predictive models.',
    icon: <Globe className="h-8 w-8 text-green-400" />,
  },
  {
    title: 'Future Potential',
    description: 'Integration into mobile apps and hospital systems can deliver real-time, personalized stroke risk alerts at scale.',
    icon: <Lightbulb className="h-8 w-8 text-yellow-400" />,
  },
];

// Healthcare Recommendations Analysis
const healthcareRecAnalysisData = [
  {
    title: 'Recommendation Accuracy',
    description: 'Hybrid collaborative and content-based filtering generated personalized treatment suggestions aligned with patient data.',
    icon: <BarChart3 className="h-8 w-8 text-teal-400" />,
  },
  {
    title: 'Patient Profiling',
    description: 'Clustering algorithms identified similar patient profiles to optimize care pathways and outcomes.',
    icon: <Brain className="h-8 w-8 text-indigo-400" />,
  },
  {
    title: 'Real-Time Processing',
    description: 'Algorithms were optimized to deliver instantaneous recommendations during clinical consultations.',
    icon: <Zap className="h-8 w-8 text-purple-400" />,
  },
];

// Healthcare Recommendations Insights
const healthcareRecInsightsData = [
  {
    title: 'Treatment Optimization',
    description: 'Data-driven recommendations improve treatment selection and patient outcomes through evidence-based care.',
    icon: <HeartIcon className="h-8 w-8 text-teal-400" />,
  },
  {
    title: 'Care Personalization',
    description: 'Individualized care pathways enhance patient engagement and treatment adherence.',
    icon: <Globe className="h-8 w-8 text-green-400" />,
  },
  {
    title: 'Clinical Decision Support',
    description: 'AI-powered insights augment clinical expertise for more informed treatment decisions.',
    icon: <Lightbulb className="h-8 w-8 text-yellow-400" />,
  },
];

// Diabetes Risk Assessment Analysis
const diabetesAnalysisData = [
  {
    title: 'Risk Stratification',
    description: 'Integrated biomarkers, demographics, and lifestyle data to accurately predict diabetes risk.',
    icon: <BarChart3 className="h-8 w-8 text-teal-400" />,
  },
  {
    title: 'Feature Engineering',
    description: 'Applied advanced techniques to capture complex interactions among health metrics.',
    icon: <Brain className="h-8 w-8 text-indigo-400" />,
  },
  {
    title: 'Population Screening',
    description: 'Designed scalable tools for large-scale population health risk assessment.',
    icon: <Zap className="h-8 w-8 text-purple-400" />,
  },
];

// Diabetes Risk Assessment Insights
const diabetesInsightsData = [
  {
    title: 'Early Intervention',
    description: 'Enables preventive measures and lifestyle changes before disease onset.',
    icon: <HeartIcon className="h-8 w-8 text-teal-400" />,
  },
  {
    title: 'Public Health Impact',
    description: 'Supports targeted prevention programs and optimized resource allocation.',
    icon: <Globe className="h-8 w-8 text-green-400" />,
  },
  {
    title: 'Healthcare Efficiency',
    description: 'Risk-based screening enhances preventive care delivery and resource management.',
    icon: <Lightbulb className="h-8 w-8 text-yellow-400" />,
  },
];

// Project Data
const projectsData = [
		{
		id: 1,
		title: "ECG Waveform Analysis with Deep Learning",
		domain: "Computer Vision + Healthtech + Deep Learning",
		goal: "Detect P, Q, R, S, T, and U waves in ECG images using CNNs and classify cardiac abnormalities.",
		image: "/src/assets/images/CreatorofCardiactek.jpg",
		concepts: [
			"Image preprocessing and augmentation",
			"CNN architectures (ResNet, EfficientNet)",
			"Multi-label classification",
			"Grad-CAM for model interpretability",
		],
		techStack: ["PyTorch/TensorFlow", "OpenCV", "Matplotlib/Seaborn"],
		bonus:
			"Uses PTB-XL ECG dataset. Includes wave detection overlays and an interactive dashboard for clinicians.",
		icon: <Zap className="h-8 w-8 text-indigo-400" />,
		analysis: ecgAnalysisData,
		insights: ecgInsightsData,
	},
		{
		id: 2,
		title: "Stroke Prediction Model",
		domain: "Risk Assessment + Predictive Analytics + Preventive Healthcare",
		goal: "Building a model to predict stroke risk based on medical and lifestyle data from patients.",
		image: "/src/assets/images/stroke.jpg",
		concepts: [
			"Risk factor analysis and feature selection",
			"Classification modeling for stroke prediction",
			"Model validation and calibration",
			"Risk score development",
			"Early warning system design",
		],
		techStack: [
			"Python",
			"scikit-learn",
			"TensorFlow",
			"pandas",
			"NumPy",
			"matplotlib",
			"Flask",
		],
		bonus:
			"Uses comprehensive patient health datasets. Features real-time risk assessment and early warning notifications.",
		icon: <AlertTriangle className="h-8 w-8 text-orange-400" />,
		analysis: strokeAnalysisData,
		insights: strokeInsightsData,
	},
	{
		id: 3,
		title: "Healthcare Recommendations",
		domain:
			"Recommendation Systems + Patient-Centered Care + AI-Driven Medicine",
		goal: "Creating personalized healthcare recommendations based on individual patient data and medical history.",
		image: "/src/assets/images/health recommendation.jpg",
		concepts: [
			"Collaborative filtering for treatment recommendations",
			"Content-based recommendation algorithms",
			"Patient similarity analysis",
			"Treatment outcome optimization",
			"Personalized care pathway design",
		],
		techStack: [
			"Python",
			"Surprise",
			"scikit-learn",
			"pandas",
			"FastAPI",
			"PostgreSQL",
			"Redis",
		],
		bonus:
			"Integrates multiple healthcare datasets. Features real-time personalized treatment recommendations and care pathway optimization.",
		icon: <Target className="h-8 w-8 text-green-400" />,
		analysis: healthcareRecAnalysisData,
		insights: healthcareRecInsightsData,
	},
	{
		id: 4,
		title: "Diabetes Risk Assessment",
		domain: "Risk Prediction + Preventive Medicine + Population Health",
		goal: "Creating a predictive model to assess diabetes risk based on personal and health information.",
		image: "/src/assets/images/diabetes.jpg",
		concepts: [
			"Risk factor identification and analysis",
			"Predictive modeling for diabetes onset",
			"Feature engineering for health metrics",
			"Model interpretability for clinical use",
			"Population health risk stratification",
		],
		techStack: [
			"Python",
			"scikit-learn",
			"XGBoost",
			"pandas",
			"matplotlib",
			"seaborn",
			"Streamlit",
		],
		bonus:
			"Uses comprehensive health and lifestyle datasets. Includes interactive risk assessment tools and preventive care recommendations.",
		icon: <Activity className="h-8 w-8 text-pink-400" />,
		analysis: diabetesAnalysisData,
		insights: diabetesInsightsData,
	},
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: 'spring', stiffness: 100 } },
  hover: { scale: 1.03, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } },
};

const slideshowVariants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const inactivityTimer = useRef<NodeJS.Timeout | null>(null);
  const slideshowTimer = useRef<NodeJS.Timeout | null>(null);
  const slideshowRef = useRef<HTMLDivElement>(null);

  // Handle inactivity timer reset
  const resetInactivityTimer = () => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    inactivityTimer.current = setTimeout(() => {
      setIsSlideshowActive(true);
      startSlideshow();
    }, 5 * 60 * 1000); // 5 minutes
  };

  // Start slideshow with 5-second intervals
  const startSlideshow = () => {
    if (slideshowTimer.current) clearInterval(slideshowTimer.current);
    setCurrentSlide(0); // Start from first slide
    slideshowTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectsData.length);
    }, 5000); // Change slide every 5 seconds
  };

  // Close slideshow and reset inactivity timer
  const closeSlideshow = () => {
    setIsSlideshowActive(false);
    if (slideshowTimer.current) clearInterval(slideshowTimer.current);
    resetInactivityTimer(); // Reset the 5-minute inactivity timer
  };

  // Handle click outside slideshow
  const handleClickOutside = (event: MouseEvent) => {
    if (slideshowRef.current && !slideshowRef.current.contains(event.target as Node)) {
      closeSlideshow();
    }
  };

  // Set up inactivity detection and outside click handler
  useEffect(() => {
    const events = ['mousemove', 'keydown', 'scroll', 'click'];
    events.forEach(event => window.addEventListener(event, resetInactivityTimer));
    
    resetInactivityTimer(); // Start the timer initially

    if (isSlideshowActive) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      events.forEach(event => window.removeEventListener(event, resetInactivityTimer));
      document.removeEventListener('mousedown', handleClickOutside);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      if (slideshowTimer.current) clearInterval(slideshowTimer.current);
    };
  }, [isSlideshowActive]);

  const toggleExpand = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const handleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleShare = (title: string) => {
    const url = window.location.href;
    navigator.clipboard.writeText(`${title}: ${url}`).then(() => alert('Project link copied to clipboard!'));
  };

  const handleSeeMore = (project: typeof projectsData[0]) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white relative">
      {/* Hero Section */}
      <ProjectHero />

      {/* Main Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 to-indigo-900 relative overflow-hidden">
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-indigo-500/20 blur-3xl pointer-events-none"
        />
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-12"
        >
          {/* <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-teal-300 to-indigo-300 bg-clip-text text-transparent mb-12"
          >
            Project Showcase
          </motion.h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="relative"
              >
                <Card
                  className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-teal-500/30 p-6 h-full flex flex-col justify-between cursor-pointer transition-all duration-300"
                  onClick={() => toggleExpand(project.id)}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="flex items-center gap-4 mb-4">
                    {project.icon}
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <p className="text-sm text-teal-300 mb-2">{project.domain}</p>
                  <p className="text-gray-300 leading-relaxed">{project.goal}</p>
                  <div className="mt-4 flex justify-between items-center gap-2">
                    <Button
                      label={<span className="flex items-center gap-1"><Heart className="h-4 w-4" /> {likes[project.id] || 0}</span>}
                      variant="outline"
                      onClick={(e) => { e.stopPropagation(); handleLike(project.id); }}
                      className="flex-1 bg-transparent border-teal-400 text-teal-300 hover:bg-teal-400/20 rounded-full text-sm py-2"
                    />
                    {/* <Button
                      label={<span className="flex items-center gap-1"><Share2 className="h-4 w-4" /> Share</span>}
                      variant="outline"
                      onClick={(e) => { e.stopPropagation(); handleShare(project.title); }}
                      className="flex-1 bg-transparent border-indigo-400 text-indigo-300 hover:bg-indigo-400/20 rounded-full text-sm py-2"
                    /> */}
                    <Button
                      label={<span className="flex items-center gap-1"><Eye className="h-4 w-4" /> See More</span>}
                      onClick={(e) => { e.stopPropagation(); handleSeeMore(project); }}
                      className="flex-1 bg-teal-500 text-white hover:bg-teal-600 rounded-full text-sm py-2"
                    />
                  </div>
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <h4 className="text-sm font-semibold text-indigo-300">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.techStack.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <motion.div
                    className="mt-4 flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedProject === project.id ? (
                      <ChevronUp className="h-6 w-6 text-teal-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-teal-400" />
                    )}
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <AnimatePresence>
          {selectedProject && (
            <Popup
              isOpen={!!selectedProject}
              onClose={closePopup}
              title={
                <div className="flex items-center gap-4">
                  {selectedProject.icon}
                  <span className="text-2xl font-bold text-white">{selectedProject.title}</span>
                </div>
              }
              message={selectedProject.goal}
              variant="info"
              className="w-full max-w-2xl"
            >
              <motion.img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-teal-300">Domain:</h4>
                  <p className="text-gray-300">{selectedProject.domain}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-teal-300">Concepts Covered:</h4>
                  <ul className="list-disc pl-5 text-gray-300">
                    {selectedProject.concepts.map((concept, idx) => (
                      <li key={idx}>{concept}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-teal-300">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-teal-300">Bonus:</h4>
                  <p className="text-gray-300">{selectedProject.bonus}</p>
                </div>
                {/* Render Analysis */}
                <div>
                  <h4 className="text-lg font-semibold text-teal-300 mt-6">Project Analysis:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    {selectedProject.analysis.map((item, idx) => (
                      <Card key={idx} className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-teal-500/30 p-6 flex flex-col items-center text-center">
                        <div className="mb-4">{item.icon}</div>
                        <h5 className="text-xl font-semibold text-white mb-2">{item.title}</h5>
                        <p className="text-gray-300">{item.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
                {/* Render Insights */}
                <div>
                  <h4 className="text-lg font-semibold text-teal-300 mt-6">Project Insights:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    {selectedProject.insights.map((item, idx) => (
                      <Card key={idx} className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl border border-teal-500/30 p-6 flex flex-col items-center text-center">
                        <div className="mb-4">{item.icon}</div>
                        <h5 className="text-xl font-semibold text-white mb-2">{item.title}</h5>
                        <p className="text-gray-300">{item.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </Popup>
          )}
        </AnimatePresence>
      </section>

      {/* Slideshow Overlay */}
      <AnimatePresence>
        {isSlideshowActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              key={currentSlide}
              variants={slideshowVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="max-w-4xl w-full"
              ref={slideshowRef}
            >
              <Card className="bg-gray-800/95 rounded-2xl shadow-2xl border border-teal-500/40 p-6">
                <motion.img
                  src={projectsData[currentSlide].image}
                  alt={projectsData[currentSlide].title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    {projectsData[currentSlide].icon}
                    <h3 className="text-2xl font-bold text-white">
                      {projectsData[currentSlide].title}
                    </h3>
                  </div>
                  <p className="text-teal-300 text-sm">{projectsData[currentSlide].domain}</p>
                  <p className="text-gray-300">{projectsData[currentSlide].goal}</p>
                  <div className="flex flex-wrap gap-2">
                    {projectsData[currentSlide].techStack.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-gray-400 text-sm">
                    Slide {currentSlide + 1} of {projectsData.length}
                  </span>
                  <Button
                    label="Close Slideshow"
                    onClick={closeSlideshow}
                    className="bg-teal-500 text-white hover:bg-teal-600 rounded-full px-4 py-2"
                  />
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
