import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Github, FileText, Award } from "lucide-react";

interface ResearchInterest {
	id: number;
	title: string;
	description: string;
	domain: string;
	focusAreas: string[];
	impact: string;
	collaborators?: string[];
	publications?: string[];
}

const researchInterests: ResearchInterest[] = [
	{
		id: 1,
		title: "AI for Cardiovascular Diagnostics",
		description:
			"Using deep learning models to detect and classify heart conditions like arrhythmia and myocardial infarction from ECG signals, with a focus on transfer learning and signal processing for resource-limited settings.",
		domain: "Healthcare AI",
		focusAreas: ["Deep Learning", "Signal Processing", "Transfer Learning"],
		impact:
			"Enabling early detection of heart conditions outside clinical environments for accessible heart health monitoring.",
		publications: ["Journal of Medical AI, 2025"],
	},
	{
		id: 2,
		title: "AI in Patient Routing and Hospital Optimization",
		description:
			"Developing reinforcement learning algorithms for intelligent patient routing systems to optimize hospital navigation, reduce congestion, and prioritize emergency care.",
		domain: "Healthcare Systems",
		focusAreas: ["Reinforcement Learning", "Simulation", "Patient Flow"],
		impact:
			"Improving patient experiences and reducing waiting times in clinical settings.",
		collaborators: ["Healthcare Systems Lab", "City Hospital Network"],
	},
	{
		id: 3,
		title: "Machine Learning for Predictive Healthcare",
		description:
			"Building machine learning models to predict patient outcomes, readmission risks, and treatment responses using EHR data, with an emphasis on explainability and ethical data handling.",
		domain: "Predictive Analytics",
		focusAreas: ["Predictive Modeling", "EHR Integration", "Explainable AI"],
		impact:
			"Enhancing clinician decision-making and reducing hospital readmissions.",
		publications: ["Health Data Science, 2024"],
	},
	{
		id: 4,
		title: "Data Privacy and Security in Healthcare AI",
		description:
			"Exploring privacy-preserving techniques like federated learning and differential privacy to ensure secure training and deployment of AI models in healthcare.",
		domain: "Healthcare Security",
		focusAreas: ["Federated Learning", "Differential Privacy", "Ethical AI"],
		impact:
			"Protecting patient data while maintaining model accuracy and reliability.",
		collaborators: ["Privacy Research Group", "HealthTech Security Inc."],
	},
	{
		id: 5,
		title: "AI-Driven Health Accessibility Tools",
		description:
			"Designing AI-embedded, low-cost devices like digital ECG monitors and self-service diagnostic kiosks to provide automated health assessments in underserved communities.",
		domain: "Health Equity",
		focusAreas: ["Embedded AI", "Health Accessibility", "Low-Cost Devices"],
		impact:
			"Bridging healthcare gaps in rural and underserved areas with scalable solutions.",
		publications: ["Global Health Technology, 2025"],
	},
	{
		id: 6,
		title: "AI-Driven Health Accessibility Tools",
		description:
			"Designing AI-embedded, low-cost devices like digital ECG monitors and self-service diagnostic kiosks to provide automated health assessments in underserved communities.",
		domain: "Health Equity",
		focusAreas: ["Embedded AI", "Health Accessibility", "Low-Cost Devices"],
		impact:
			"Bridging healthcare gaps in rural and underserved areas with scalable solutions.",
		publications: ["Global Health Technology, 2025"],
	},
];

export default function ResearchInterests() {
	const [selectedInterest, setSelectedInterest] =
		useState<ResearchInterest | null>(null);
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handleCardClick = (interest: ResearchInterest) => {
		setSelectedInterest(interest);
		setIsPopupOpen(true);
	};

	const closePopup = () => {
		setIsPopupOpen(false);
		setSelectedInterest(null);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-teal-900 to-indigo-900 relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10 pointer-events-none">
				<svg className="w-full h-full" fill="none">
					<pattern
						id="dots"
						x="0"
						y="0"
						width="40"
						height="40"
						patternUnits="userSpaceOnUse">
						<circle cx="20" cy="20" r="2" fill="#14b8a6" />
					</pattern>
					<rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
				</svg>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Hero Section */}
				<motion.section
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: {
								staggerChildren: 0.1,
								delayChildren: 0.3,
							},
						},
					}}
					className="text-center mb-16 relative overflow-hidden"
				>
					{/* Animated Background Elements */}
					<div className="absolute inset-0 overflow-hidden pointer-events-none">
						{[...Array(10)].map((_, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, scale: 0 }}
								animate={{
									opacity: [0, 0.3, 0],
									scale: [0, 1, 0],
									x: Math.random() * 100 - 50 + "%",
									y: Math.random() * 100 - 50 + "%",
								}}
								transition={{
									duration: 6 + Math.random() * 4,
									repeat: Infinity,
									ease: "easeInOut",
									delay: Math.random() * 2,
								}}
								className="absolute w-1 h-1 rounded-full bg-teal-400/30"
							/>
						))}
					</div>

					<div className="relative z-10 space-y-8">
						{/* Main Title */}
						<motion.div
							variants={{
								hidden: { opacity: 0, y: 40 },
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										type: "spring",
										stiffness: 80,
										damping: 15,
									},
								},
							}}
						>
							<h1 className="text-4xl md:text-5xl font-bold mb-4">
								<span className="bg-gradient-to-r from-teal-300 to-indigo-200 bg-clip-text text-transparent">
									<AnimatePresence>
										{"AI Research for".split(" ").map((word, wi) => (
											<motion.span
												key={wi}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: wi * 0.15 }}
												className="inline-block mr-4"
											>
												{word}
											</motion.span>
										))}
									</AnimatePresence>
								</span>
								<br />
								<motion.span
									initial={{ opacity: 0, x: -50 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.6, type: "spring" }}
									className="bg-gradient-to-r from-teal-400 to-indigo-300 bg-clip-text text-transparent"
								>
									Healthcare Innovation
								</motion.span>
							</h1>
						</motion.div>

						{/* Animated Icon */}
						<motion.div
							initial={{ scale: 0, rotate: -45 }}
							animate={{
								scale: 1,
								rotate: 0,
								transition: {
									type: "spring",
									stiffness: 150,
									delay: 0.4,
								},
							}}
							whileHover={{ scale: 1.1, rotate: 15 }}
							className="inline-block mb-8"
						>
							<BrainCircuit className="h-16 w-16 text-teal-400 drop-shadow-glow" />
						</motion.div>

						{/* Description Text */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 }}
							className="relative"
						>
							<motion.p className="text-lg text-gray-300 max-w-3xl mx-auto px-4 md:px-0">
								<motion.span
									initial={{ clipPath: "inset(0 100% 0 0)" }}
									animate={{ clipPath: "inset(0 0% 0 0)" }}
									transition={{ duration: 1.5, delay: 1, ease: "circOut" }}
									className="block"
								>
									Advancing healthcare through AI-driven solutions in diagnostics,
									patient care optimization, and accessible health tools.
								</motion.span>
							</motion.p>

							{/* Animated Underlines */}
							<motion.div
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								transition={{ delay: 1.8, duration: 0.8 }}
								className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent"
							/>
						</motion.div>
					</div>

					{/* Floating Particles */}
					<div className="absolute inset-0 pointer-events-none">
						{[...Array(8)].map((_, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, scale: 0 }}
								animate={{
									opacity: [0, 0.4, 0],
									scale: [0, 1, 0],
									x: ["0%", `${Math.random() * 100 - 50}%`],
									y: ["0%", `${Math.random() * 100 - 50}%`],
								}}
								transition={{
									duration: 4 + Math.random() * 4,
									repeat: Infinity,
									ease: "easeInOut",
									delay: Math.random() * 2,
								}}
								className="absolute w-2 h-2 bg-teal-400 rounded-full"
							/>
						))}
					</div>
				</motion.section>

				{/* Floating Particles */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
					className="absolute inset-0 pointer-events-none"
				>
					{[...Array(10)].map((_, i) => (
						<motion.div
							key={i}
							initial={{
								scale: 0,
								x: Math.random() * 100 - 50 + "%",
								y: Math.random() * 100 - 50 + "%",
							}}
							animate={{
								scale: [0, 1, 0],
								rotate: [0, 360],
							}}
							transition={{
								duration: 4 + Math.random() * 4,
								repeat: Infinity,
								ease: "easeInOut",
								delay: Math.random() * 2,
							}}
							className="absolute w-2 h-2 bg-teal-400 rounded-full"
						/>
					))}
				</motion.div>
				{/* Research Grid */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{researchInterests.map((interest) => (
						<motion.div
							key={interest.id}
							whileHover={{ y: -10 }}
							transition={{ type: "spring", stiffness: 300 }}
							className="cursor-pointer"
							onClick={() => handleCardClick(interest)}
						>
							<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-teal-700 hover:border-teal-400 transition-all h-full">
								<div className="flex items-start gap-4 mb-4">
									<div className="p-3 bg-teal-900/30 rounded-lg">
										<BrainCircuit className="h-6 w-6 text-teal-400" />
									</div>
									<h3 className="text-xl font-semibold text-teal-200">
										{interest.title}
									</h3>
								</div>
								<p className="text-gray-300 text-sm mb-4 line-clamp-3">
									{interest.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{interest.focusAreas.map((area) => (
										<span
											key={area}
											className="px-3 py-1 text-xs bg-teal-900/30 text-teal-300 rounded-full"
										>
											{area}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* GitHub Button */}
				<motion.div
					className="fixed bottom-8 right-8 z-50"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
				>
					<a
						href="https://github.com/yourusername"
						target="_blank"
						rel="noopener noreferrer"
						className="w-14 h-14 rounded-full flex items-center justify-center bg-teal-700 hover:bg-teal-600 transition-colors shadow-lg"
					>
						<Github className="h-6 w-6 text-white" />
					</a>
				</motion.div>
			</div>

			{/* Detail Popup */}
			<AnimatePresence>
				{isPopupOpen && selectedInterest && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
						onClick={closePopup}
					>
						<motion.div
							initial={{ scale: 0.95 }}
							animate={{ scale: 1 }}
							className="bg-gray-800 rounded-xl p-8 max-w-2xl w-full border border-teal-700 relative"
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={closePopup}
								className="absolute top-4 right-4 text-gray-400 hover:text-teal-400"
							>
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>

							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<BrainCircuit className="h-8 w-8 text-teal-400 flex-shrink-0" />
									<h2 className="text-2xl font-bold text-teal-300">
										{selectedInterest.title}
									</h2>
								</div>

								<div className="space-y-4 text-gray-300">
									<div>
										<h3 className="text-sm font-semibold text-teal-400 mb-2">
											Domain
										</h3>
										<p>{selectedInterest.domain}</p>
									</div>

									<div>
										<h3 className="text-sm font-semibold text-teal-400 mb-2">
											Focus Areas
										</h3>
										<div className="flex flex-wrap gap-2">
											{selectedInterest.focusAreas.map((area) => (
												<span
													key={area}
													className="px-3 py-1 text-sm bg-teal-900/30 text-teal-300 rounded-full"
												>
													{area}
												</span>
											))}
										</div>
									</div>

									<div>
										<h3 className="text-sm font-semibold text-teal-400 mb-2">
											Impact
										</h3>
										<p>{selectedInterest.impact}</p>
									</div>

									{selectedInterest.publications && (
										<div>
											<h3 className="text-sm font-semibold text-teal-400 mb-2">
												Publications
											</h3>
											<ul className="list-disc pl-6 space-y-2">
												{selectedInterest.publications.map((pub, index) => (
													<li key={index}>{pub}</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
