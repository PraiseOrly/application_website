import { motion } from "framer-motion";
import { Award, Brain, SparklesIcon } from "lucide-react";
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
			icon: <Brain className="h-6 w-6 text-teal-400" />,
		},
		{
			id: "2",
			title: "Community Impact",
			description:
				"Mentored peers and emerging professionals, fostering skill development, collaboration, and career growth.",
			icon: <Award className="h-6 w-6 text-lime-300" />,
		},
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
		<div className="w-full sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 to-indigo-900 relative overflow-hidden text-gray-100">
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
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-8 py-12">
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
			<div className="relative space-y-12 py-2 px-2 lg:px-8 lg:py-2">
				{/* My Mission Section */}
				<section className="max-w-4xl mx-auto">
					<motion.div
						className="space-y-6 text-center"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}>
						<h2 className="text-3xl font-bold text-teal-300 mb-4">
							My Mission
						</h2>

						<div className="space-y-4 text-gray-200 text-lg leading-relaxed">
							<p className="max-w-2xl mx-auto">
								Transforming African healthcare through ethical AI innovation
								and community empowerment.
							</p>

							<ul className="grid md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
								{[
									"Democratizing medical AI tools",
									"Building locally-relevant solutions",
									"Mentoring tech leaders",
									"Bridging research & impact",
								].map((item, index) => (
									<motion.li
										key={item}
										className="flex items-center gap-3 p-4 bg-gray-400/20 rounded-lg backdrop-blur-sm"
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}>
										<SparklesIcon className="h-5 w-5 text-teal-400 flex-shrink-0" />
										<span>{item}</span>
									</motion.li>
								))}
							</ul>
						</div>
					</motion.div>
				</section>

				{/* Key Achievements */}
				<section className="max-w-6xl mx-auto">
					<motion.h2
						className="text-3xl font-bold text-center mb-6 text-teal-300"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}>
						Key Achievements
					</motion.h2>

					<div className="grid md:grid-cols-2 gap-6 py-8">
						{aboutData.highlights.map((highlight) => (
							<motion.div
								key={highlight.id}
								className="p-6 bg-gray-400/20 rounded-xl backdrop-blur-sm border border-teal-400/20"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								whileHover={{ y: -5 }}>
								<div className="flex items-center gap-6 mb-4">
									<div className="p-3 bg-teal-400/10 rounded-lg">
										{highlight.icon}
									</div>
									<h3 className="text-xl font-semibold text-teal-200">
										{highlight.title}
									</h3>
								</div>
								<p className="text-gray-200 leading-relaxed">
									{highlight.description}
								</p>
							</motion.div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
