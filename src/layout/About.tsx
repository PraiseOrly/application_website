import { motion } from "framer-motion";
import { Award, Brain, Calendar, FileBadge, GraduationCap, SparklesIcon } from "lucide-react";
import { useEffect, useState } from "react";
const profileImages = [
	"/images/Praise_Headshot.jpg",
	"/images/PraiseAlliance.jpg",
	"/images/Praise_Speech.jpg",
	"/images/Health2.jpg",
	"/images/Swiss.jpg",
	"/images/Moyo.jpg",
	"/images/Health.jpg",
	"/images/AI for Good.jpg",
	"/images/QABF.jpg",
];

const aboutData = {
	personal: {
		name: "Praise Orly Atadja",
		title: "AI & Healthcare Enthusiast | Machine Learning | Project Manager",
		intro:
			"I am a passionate software engineer and researcher dedicated to leveraging AI and machine learning to advance healthcare systems, with a particular focus on Africa. My goal is to develop innovative, accessible, and sustainable healthtech solutions that improve diagnosis, treatment, and health outcomes across diverse communities.",
	},
	highlights: [
		{
			id: "1",
			title: "AI Diagnostics",
			description:
				"Developed deep learning models for 12-lead ECG interpretation, achieving high accuracy across multiple cardiac conditions.",
			icon: <Brain className="h-4 w-4 text-teal-400" />,
		},
		{
			id: "2",
			title: "Community Impact",
			description:
				"Mentored peers and emerging professionals, fostering skill development, collaboration, and career growth.",
			icon: <Award className="h-4 w-4 text-lime-300" />,
		},
		{
			id: "3",
			title: "Tech Innovation",
			description:
				"Built scalable AI solutions addressing critical healthcare challenges in underserved regions.",
			icon: <SparklesIcon className="h-4 w-4 text-orange-400" />,
		},
	],
	education: {
		institution: "African Leadership University (ALU)",
		degree: "BSc Software Engineering - First Class Honours",
		specialization: "Machine Learning, AI for Healthcare",
		duration: "Jan 2022 - June 2025",
	},
	certifications: [
		{ name: "AI For Good", issuer: "DeepLearning.AI", date: "Sept 2025" },
		{ name: "AI For Medicine", issuer: "DeepLearning.AI", date: "Sept 2025" },
		{ name: "Generative AI for Data Scientists", issuer: "IBM", date: "May 2025" },
	],
};

export function About() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section id="about" className="w-full sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 to-indigo-900 relative overflow-hidden text-gray-100">
			{/* Background Decorative Element */}
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

			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center">
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 py-12">
					{/* Profile Image Container */}
					<motion.div
						className="relative w-96 h-96 rounded-xl border-2 border-teal-400/30 overflow-hidden shadow-2xl backdrop-blur-sm"
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.6 }}>
						{profileImages.map((img, index) => (
							<motion.img
								key={img}
								src={img}
								alt="Praise Orly Atadja"
								className="absolute inset-0 w-full h-full object-cover"
								initial={{ opacity: 0 }}
								animate={{
									opacity: index === currentImageIndex ? 1 : 0,
									scale: index === currentImageIndex ? 1 : 1.1,
								}}
								transition={{ duration: 0.8, ease: "easeInOut" }}
							/>
						))}
					</motion.div>

					{/* Content Section */}
					<div className="flex-1 space-y-10 relative z-10">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}>
							<SparklesIcon className="h-12 w-12 text-teal-400 mb-4 animate-pulse" />
							<h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-300 to-indigo-200 bg-clip-text text-transparent">
								{aboutData.personal.name}
							</h1>
							<p className="text-xl md:text-2xl text-teal-100 font-medium mt-2">
								{aboutData.personal.title}
							</p>
						</motion.div>

						<motion.p
							className="text-lg text-gray-200 leading-relaxed max-w-2xl"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6 }}>
							{aboutData.personal.intro}
						</motion.p>

						{/* Resume Button */}
						<motion.a
							href="https://docs.google.com/document/d/1hpOO01I7PB5sJytnXY1sThD4xyxU48Co/edit?usp=sharing&ouid=101909117862344144947&rtpof=true&sd=true"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-3 bg-teal-500/90 hover:bg-teal-400 text-slate-950 font-semibold rounded-lg
                transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-teal-500/30 inline-block"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.9 }}>
							View Resume
						</motion.a>
					</div>
				</div>
			</section>

			{/* Content Sections */}
			<div className="relative space-y-8 py-2 px-2 lg:px-8">
				
				{/* Row 1: My Mission + Key Achievements */}
				<div className="grid md:grid-cols-2 gap-8">
					
					{/* My Mission - Left Column */}
					<div>
						<motion.div
							className="space-y-4"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}>
							<h2 className="text-2xl font-bold text-teal-300 text-center">
								My Mission
							</h2>

							<div className="space-y-3 text-gray-200 text-base leading-relaxed">
								<ul className="space-y-3">
									{[
										"Democratizing medical AI tools",
										"Building locally-relevant solutions",
										"Mentoring tech leaders",
										"Bridging research & impact",
									].map((item, index) => (
										<motion.li
											key={item}
											className="flex items-center gap-2 p-3 bg-gray-400/20 rounded-lg backdrop-blur-sm"
											initial={{ opacity: 0, x: -20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}>
											<SparklesIcon className="h-4 w-4 text-teal-400 flex-shrink-0" />
											<span className="text-sm">{item}</span>
										</motion.li>
									))}
								</ul>
							</div>
						</motion.div>
					</div>

					{/* Key Achievements - Right Column */}
					<div>
						<motion.h2
							className="text-2xl font-bold mb-4 text-teal-300 text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}>
							Key Achievements
						</motion.h2>

						<div className="grid gap-2">
							{aboutData.highlights.map((highlight) => (
								<motion.div
									key={highlight.id}
									className="flex items-center gap-2 p-2 bg-gray-400/20 rounded-lg backdrop-blur-sm border border-teal-400/20"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									whileHover={{ x: 3 }}>
									<div className="p-1 bg-teal-400/10 rounded-lg shrink-0">
										{highlight.icon}
									</div>
									<div className="min-w-0">
										<h3 className="text-sm font-semibold text-teal-200">
											{highlight.title}
										</h3>
										<p className="text-gray-200 text-xs truncate">
											{highlight.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>

				{/* Row 2: Education + Certifications */}
				<div className="grid md:grid-cols-2 gap-8">
					
					{/* Education Card */}
					<div>
						<motion.h2
							className="text-2xl font-bold mb-4 text-teal-300 text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}>
							Education
						</motion.h2>
						
						<motion.div
							className="p-4 bg-gray-400/20 rounded-lg backdrop-blur-sm border border-teal-400/20"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{ y: -3 }}>
							<div className="flex items-center gap-3 mb-3">
								<div className="p-2 bg-teal-700 rounded-full">
									<GraduationCap className="h-5 w-5 text-teal-400" />
								</div>
								<div>
									<h3 className="text-base font-bold text-teal-400">
										{aboutData.education.institution}
									</h3>
									<p className="text-white text-sm font-medium">
										{aboutData.education.degree}
									</p>
									<p className="text-white text-xs italic">
										{aboutData.education.specialization}
									</p>
								</div>
							</div>
							<div className="flex items-center gap-2 text-teal-300 bg-teal-900/50 rounded-lg p-2">
								<Calendar className="h-4 w-4" />
								<span className="text-sm">{aboutData.education.duration}</span>
							</div>
						</motion.div>
					</div>

					{/* Certifications Card */}
					<div>
						<motion.h2
							className="text-2xl font-bold mb-4 text-teal-300 text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}>
							Certifications
						</motion.h2>
						
						<div className="space-y-2">
							{aboutData.certifications.map((cert, index) => (
								<motion.div
									key={index}
									className="flex items-center gap-3 p-3 bg-gray-400/20 rounded-lg backdrop-blur-sm border border-teal-400/20"
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ x: 3 }}>
									<div className="p-1.5 bg-teal-400/10 rounded-lg">
										<FileBadge className="h-4 w-4 text-teal-400" />
									</div>
									<div className="min-w-0 flex-1">
										<h3 className="text-sm font-semibold text-teal-200 truncate">
											{cert.name}
										</h3>
										<p className="text-gray-400 text-xs">
											{cert.issuer} • {cert.date}
										</p>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

