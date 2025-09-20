import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Activity,
	Brain,
	Heart,
	BookOpen,
	Apple,
	Cloud,
	ChevronDown,
	ArrowRight,
} from "lucide-react";
import { Card } from "../common/Card";

// Interfaces
interface Project {
	id: number;
	title: string;
	description: string;
	category: string;
	dataset: string;
	tools: string;
	skills: string;
	icon: React.ReactNode;
	githubUrl: string;
}

// Animation Variants
const sectionVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
};

const heroVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			delayChildren: 0.4,
		},
	},
};

const titleVariants = {
	hidden: { opacity: 0, y: 70, scale: 0.9 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
			mass: 0.8,
		},
	},
};

const textVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeOut",
		},
	},
};

const floatVariants = {
	float: {
		y: [0, -15, 0],
		transition: {
			duration: 2.5,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

const cardVariants = {
	hidden: (isLeft: boolean) => ({
		opacity: 0,
		x: isLeft ? -20 : 20,
		scale: 0.95,
	}),
	visible: {
		opacity: 1,
		x: 0,
		scale: 1,
		transition: { duration: 0.5, type: "spring", stiffness: 100 },
	},
	hover: {
		y: -5,
		scale: 1.02,
		boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
		transition: { duration: 0.3 },
	},
};

const particleVariants = {
	animate: {
		y: [0, -20, 0],
		opacity: [0, 1, 0],
		scale: [0.5, 1.2, 0.5],
		transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
	},
};

// Data Science Projects Data
const projectsData: Project[] = [
	{
		id: 1,
		title: "Cancer Risk Factor Analysis",
		description:
			"Explored breast cancer patient data to identify risk factors like tumor size and lymph node status, visualizing distributions and correlations.",
		category: "Healthcare",
		dataset: "Breast Cancer Wisconsin (Kaggle)",
		tools: "Python, pandas, seaborn, matplotlib, scipy, Jupyter Notebook",
		skills:
			"EDA, statistical tests (t-tests), visualization (box plots, correlation heatmaps), report writing",
		icon: <Brain className="h-6 w-6 text-coral-500" />,
		githubUrl: "https://github.com/username/cancer-risk-analysis",
	},
	{
		id: 2,
		title: "Air Pollution and Health Impact Analysis",
		description:
			"Correlated air pollutant levels with health outcomes like respiratory issues, using visualizations and statistical tests.",
		category: "Environment",
		dataset: "Air Quality Data (Kaggle)",
		tools: "Python, pandas, seaborn, scipy",
		skills:
			"Correlation analysis, visualization (line plots, scatter plots), statistical tests",
		icon: <Cloud className="h-6 w-6 text-amber-400" />,
		githubUrl: "https://github.com/username/air-pollution-analysis",
	},
	{
		id: 3,
		title: "Heart Disease Risk Factor Exploration",
		description:
			"Analyzed heart disease data to identify risk factors such as cholesterol and blood pressure, with visualized distributions.",
		category: "Healthcare",
		dataset: "Heart Disease UCI (Kaggle)",
		tools: "Python, pandas, seaborn, scipy",
		skills: "EDA, statistical tests, visualization (box plots, histograms)",
		icon: <Heart className="h-6 w-6 text-coral-500" />,
		githubUrl: "https://github.com/username/heart-disease-analysis",
	},
	{
		id: 4,
		title: "Student Dropout Risk Analysis",
		description:
			"Explored student data to identify factors contributing to dropout, such as grades and attendance, with visual insights.",
		category: "Education",
		dataset: "Student Dropout (Kaggle)",
		tools: "Python, pandas, seaborn, scipy",
		skills: "EDA, statistical analysis, visualization",
		icon: <BookOpen className="h-6 w-6 text-violet-500" />,
		githubUrl: "https://github.com/username/student-dropout-analysis",
	},
	{
		id: 5,
		title: "Online Learning Engagement Analysis",
		description:
			"Investigated MOOC data to understand student engagement patterns, including completion rates and activity levels.",
		category: "Education",
		dataset: "MOOC Dataset (Kaggle)",
		tools: "Python, pandas, seaborn, matplotlib",
		skills: "EDA, visualization (bar charts, histograms), data cleaning",
		icon: <Activity className="h-6 w-6 text-teal-500" />,
		githubUrl: "https://github.com/username/online-learning-analysis",
	},
	{
		id: 6,
		title: "Food Nutrition Analysis",
		description:
			"Analyzed nutritional data to distinguish healthy vs. unhealthy foods, visualizing nutrient distributions.",
		category: "Nutrition",
		dataset: "Food Nutrition (Kaggle)",
		tools: "Python, pandas, seaborn, scipy",
		skills:
			"EDA, statistical analysis, visualization (box plots, scatter plots)",
		icon: <Apple className="h-6 w-6 text-coral-500" />,
		githubUrl: "https://github.com/username/food-nutrition-analysis",
	},
];

// Hero Section Component
const HeroSection: React.FC = () => {
	return (
<section className="relative pt-12 pb-16 md:pt-14 md:pb-24 flex items-center justify-center bg-gradient-to-br from-teal-900 to-indigo-900 text-white overflow-hidden">
			{/* Particle Background */}
			<div className="absolute inset-0 pointer-events-none">
				{[...Array(8)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute bg-amber-400/50 rounded-full"
						initial={{
							scale: 0,
							opacity: 0,
							x: `${Math.random() * 100}%`,
							y: `${Math.random() * 100}%`,
						}}
						animate={{
							scale: [0, Math.random() * 1.5 + 0.5, 0],
							opacity: [0, 0.7, 0],
							x: `${Math.random() * 100}%`,
							y: `${Math.random() * 100}%`,
						}}
						transition={{
							duration: Math.random() * 5 + 3,
							repeat: Infinity,
							ease: "easeInOut",
							delay: Math.random() * 2,
						}}
						style={{
							width: `${Math.random() * 10 + 5}px`,
							height: `${Math.random() * 10 + 5}px`,
						}}
					/>
				))}
			</div>

			{/* Main Content */}
			<motion.div
				variants={heroVariants}
				initial="hidden"
				animate="visible"
				className="relative z-10 text-center px-6 max-w-6xl md:px-12 lg:px-16">
				{/* Title */}
				<motion.div variants={titleVariants} className="relative inline-block">
					<h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-300 to-indigo-200 bg-clip-text text-transparent">
						Data Science Projects
					</h1>
					<motion.div
						className="bg-gradient-to-r from-teal-300 to-indigo-200 bg-clip-text text-transparent"
						initial={{ scaleX: 0 }}
						whileInView={{ scaleX: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					/>
				</motion.div>

				{/* Description */}
				<motion.p
					variants={textVariants}
					className="text-lg md:text-2xl mt-6 mx-auto max-w-3xl font-light text-gray-200 leading-relaxed">
					Crafting the future with{" "}
					<span className="text-teal-300 font-semibold">
						Artificial Intelligence
					</span>
					, <span className="text-cyan-300 font-semibold">Sustainability</span>,
					and{" "}
					<span className="text-indigo-300 font-semibold">Global Impact</span>.
				</motion.p>

				{/* Call-to-Action Button */}
				<motion.a
					href="#projects"
					variants={textVariants}
					whileHover={{
						scale: 1.1,
						boxShadow: "0 15px 40px rgba(45, 212, 191, 0.5)",
					}}
					whileTap={{ scale: 0.95 }}
					className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-teal-950 text-white rounded-full font-semibold shadow-md hover:bg-teal-800 border-2 border-transparent hover:border-teal-400 transition-all duration-300">
					Explore My Work
					<ArrowRight className="h-5 w-5" />
				</motion.a>
			</motion.div>
		</section>
	);
};

const DataScienceProjects = () => {
	const [categoryFilter, setCategoryFilter] = useState<string>("all");

	const categories = ["all", ...new Set(projectsData.map((p) => p.category))];

	const filteredProjects = projectsData.filter(
		(project) => categoryFilter === "all" || project.category === categoryFilter
	);

	return (
		<section
			id="projects"
			className="bg-gradient-to-br from-teal-900 to-indigo-900 text-white">
			{/* Hero Section */}
			<HeroSection />

			{/* Main Content */}
<motion.div
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="max-w-6xl mx-auto space-y-12 relative py-16 px-4 sm:px-6 lg:px-8">
				{/* Filter */}
				<div className="flex justify-between items-center">
					<div></div> {/* Placeholder for alignment */}
					<select
						value={categoryFilter}
						onChange={(e) => setCategoryFilter(e.target.value)}
						className="p-2 pl-4 pr-8 bg-gray-900/50 backdrop-blur-md rounded-lg text-white border border-teal-500/30 focus:border-teal-400 outline-none text-sm">
						{categories.map((cat) => (
							<option key={cat} value={cat}>
								{cat === "all" ? "All Categories" : cat}
							</option>
						))}
					</select>
				</div>

				{/* Projects List */}
				<div className="relative">
					<div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-500 to-indigo-500 rounded-full z-0" />
					<AnimatePresence>
						{filteredProjects.length ? (
							filteredProjects.map((project, index) => {
								const isLeft = index % 2 === 0; // Left for even, right for odd
								return (
									<motion.div
										key={project.id}
										custom={isLeft}
										variants={cardVariants}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true, amount: 0.3 }}
										className={`flex w-full max-w-4xl mx-auto relative z-10 mb-12 ${
											isLeft ? "justify-start" : "justify-end"
										}`}>
										<div className="w-full md:w-1/2 relative">
											<motion.div
												whileHover="hover"
												variants={cardVariants}
												className="h-full">
												<Card
													className={`p-6 bg-gray-900/50 backdrop-blur-md rounded-2xl border border-teal-500/30 flex flex-col min-h-[200px] shadow-md hover:shadow-lg transition-all ${
														isLeft ? "mr-0" : "ml-0"
													}`}
													title={
														<div className="flex items-start space-x-4">
															<motion.div
																whileHover={{ rotate: 10, scale: 1.1 }}
																transition={{ duration: 0.2 }}
																className="text-coral-500">
																{project.icon}
															</motion.div>
															<div className="text-xl font-semibold text-white">
																{project.title}
															</div>
														</div>
													}
													description={
														<div className="space-y-4 flex-1 mt-4">
															<p className="text-sm text-violet-500 font-medium">
																{project.category}
															</p>
															<p className="text-gray-200">
																{project.description}
															</p>
															<div className="space-y-2 text-sm text-gray-300">
																<p>
																	<strong>Dataset:</strong> {project.dataset}
																</p>
																<p>
																	<strong>Tools:</strong> {project.tools}
																</p>
																<p>
																	<strong>Skills:</strong> {project.skills}
																</p>
															</div>
														</div>
													}
													footer={
														<div className="mt-4 pt-4 border-t border-gray-700">
															<a
																href={project.githubUrl}
																target="_blank"
																rel="noopener noreferrer"
																className="inline-flex">
																<motion.button
																	whileHover={{ scale: 1.05 }}
																	whileTap={{ scale: 0.95 }}
																	className="relative bg-teal-950 text-white py-3 px-6 rounded-full font-semibold hover:bg-teal-800 border-2 border-transparent hover:border-teal-400 transition shadow-md overflow-hidden"
																	aria-label={`View ${project.title} on GitHub`}>
																	View on GitHub
																	<motion.div
																		className="absolute inset-0 bg-amber-400/30"
																		initial={{ scale: 0 }}
																		whileHover={{ scale: 1.5 }}
																		transition={{ duration: 0.3 }}
																	/>
																</motion.button>
															</a>
														</div>
													}
												/>
											</motion.div>
										</div>
										{index < filteredProjects.length - 1 && (
											<motion.div
												className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-coral-500 rounded-full z-10"
												animate={{ scale: [1, 1.2, 1] }}
												transition={{ duration: 2, repeat: Infinity }}
												style={{ top: "100%", marginTop: "-2px" }}
											/>
										)}
									</motion.div>
								);
							})
						) : (
							<motion.p
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="text-gray-400 text-center">
								No projects match your filter.
							</motion.p>
						)}
					</AnimatePresence>
				</div>

				{/* Particle Effects */}
				{Array.from({ length: 8 }).map((_, i) => (
					<motion.div
						key={i}
						variants={particleVariants}
						animate="animate"
						className="absolute w-2 h-2 bg-amber-400 rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
					/>
				))}
			</motion.div>
		</section>
	);
};

export default DataScienceProjects;
