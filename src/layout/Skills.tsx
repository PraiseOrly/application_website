import React from "react";
import { motion } from "framer-motion";
import {
	Code2,
	Database,
	Smartphone,
	LineChart,
	MessageSquareText,
	BrainCircuit,
	Briefcase,
	Rocket,
	SquareCode,
	FileCode2,
	BarChart2,
	Stethoscope,
	ShieldCheck,
	Laptop,
	FlaskConical,
	Users,
	TestTube2,
	Network,
} from "lucide-react";

export const Skills = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { type: "spring", stiffness: 120 },
		},
	};

	const skillsData = {
		technical: [
			{
				category: "AI Development",
				icon: <BrainCircuit className="h-5 w-5 text-teal-300" />,
				skills: [
					"Machine Learning",
					"Medical Imaging Analysis",
					"Predictive Modeling",
					"Natural Language Processing",
				],
			},
			{
				category: "Health Tech",
				icon: <Stethoscope className="h-5 w-5 text-teal-300" />,
				skills: [
					"Telemedicine Systems",
					"EHR Integration",
					"Medical IoT",
					"Clinical Decision Support",
				],
			},
		],
		professional: [
			{
				category: "Technical Leadership",
				icon: <Rocket className="h-5 w-5 text-teal-300" />,
				skills: [
					"Project Management",
					"Team Mentorship",
					"Technical Roadmapping",
					"Stakeholder Engagement",
				],
			},
			{
				category: "Research & Innovation",
				icon: <FlaskConical className="h-5 w-5 text-teal-300" />,
				skills: [
					"Clinical Trial Design",
					"AI Ethics Frameworks",
					"Research Publication",
					"Prototype Development",
				],
			},
		],
	};

	return (
		<section
			id="skills"
			className="w-full py-20 px-6 lg:px-8 bg-gradient-to-br from-teal-900 to-indigo-900 relative overflow-hidden">
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

			<div className="max-w-6xl mx-auto relative">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16">
					<h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
						Core Competencies
					</h2>
					<p className="text-teal-300 text-xl max-w-3xl mx-auto">
						Technical expertise driving innovation
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid md:grid-cols-2 gap-8">
					{/* Technical Skills Column */}
					<div className="space-y-8">
						{skillsData.technical.map((category, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								className="bg-gray-800 rounded-xl shadow-lg p-6 border border-teal-700 relative overflow-hidden"
								whileHover={{ scale: 1.02 }}>
								<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 to-teal-500" />
								<div className="flex items-center gap-4 mb-6">
									<div className="p-3 bg-gray-800 rounded-full">
										{category.icon}
									</div>
									<h3 className="text-2xl font-bold text-teal-300">
										{category.category}
									</h3>
								</div>
								<div className="grid grid-cols-2 gap-3">
									{category.skills.map((skill, idx) => (
										<motion.div
											key={idx}
											className="p-3 bg-gray-700 rounded-lg border border-teal-700 hover:border-indigo-500 text-center"
											whileHover={{ x: 5 }}>
											<span className="text-white text-sm">{skill}</span>
										</motion.div>
									))}
								</div>
							</motion.div>
						))}
					</div>

					{/* Professional Skills Column */}
					<div className="space-y-8">
						{skillsData.professional.map((category, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								className="bg-gray-800 rounded-xl shadow-lg p-6 border border-teal-700 relative overflow-hidden"
								whileHover={{ scale: 1.02 }}>
								<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 to-teal-500" />
								<div className="flex items-center gap-4 mb-6">
									<div className="p-3 bg-gray-800 rounded-full">
										{category.icon}
									</div>
									<h3 className="text-2xl font-bold text-teal-300">
										{category.category}
									</h3>
								</div>
								<div className="grid grid-cols-2 gap-3">
									{category.skills.map((skill, idx) => (
										<motion.div
											key={idx}
											className="p-3 bg-gray-700 rounded-lg border border-teal-700 hover:border-indigo-500 text-center"
											whileHover={{ x: 5 }}>
											<span className="text-white text-sm">{skill}</span>
										</motion.div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};
