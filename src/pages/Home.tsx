import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	SparklesIcon,
	ArrowRightIcon,
} from "lucide-react";
import AcademicExcellenceChampion from "../assets/images/AcademicExcellenceChampion.jpg";
import CreatorofCardiactek from "../assets/images/CreatorofCardiactek.jpg";
import PresidentofAlliance4AI from "../assets/images/PresidentofAlliance4AI.jpg";
import AIinMedicine from "../assets/images/AIinMedicine.jpg";
import SocialImpactCoderina from "../assets/images/SocialImpactCoderina.jpg";
import HomeButtons from "./HomeButtons";
import { About } from "../layout/About";
import { Experience } from "../layout/Experience";
import { Education } from "../layout/Education";
import { Skills } from "../layout/Skills";

// New complementary color palette
const sliderColors = [
	{ name: "Vibrant Teal", hex: "#14B8A6" },
	{ name: "Bright Coral", hex: "#FF6B6B" },
	{ name: "Deep Indigo", hex: "#4B5EAA" },
	{ name: "Lime Glow", hex: "#A3E635" },
	{ name: "Vivid Violet", hex: "#8B5CF6" },
];
const particleVariants = {
  animate: {
    y: [0, -30, 0],
    opacity: [0, 1, 0],
    scale: [0.5, 1.2, 0.5],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
};
const slideshowData = [
	{
		title: "Revolutionizing Healthcare",
		subtitle: "AI-Powered Diagnostics",
		description:
			"Harnessing machine learning to transform healthcare delivery across Africa with precision and speed.",
		image: CreatorofCardiactek,
		bgGradient: "from-gray-200 to-gray-400",
		buttonText: "Discover More",
		buttonLink: "#experience",
		colorIndex: 0,
		tagline:
			"Creator of CardiacTek – an AI tool for ECG analysis and cardiac risk prediction.",
	},
	{
		title: "Empowering Communities",
		subtitle: "Tech Leadership",
		description:
			"Leading initiatives that inspire and educate the next generation of African innovators.",
		image: PresidentofAlliance4AI,
		bgGradient: "from-gray-200 to-gray-400",
		buttonText: "Explore Impact",
		buttonLink: "#skills",
		colorIndex: 1,
		tagline:
			"President of Alliance4AI ALU & Rwanda Team Lead at Shenovate’s STEM initiative.",
	},
	{
		title: "Academic Excellence",
		subtitle: "Software & AI",
		description:
			"Mastering cutting-edge tech at ALU to solve real-world challenges.",
		image: AcademicExcellenceChampion,
		bgGradient: "from-gray-200 to-gray-400",
		buttonText: "Learn Journey",
		buttonLink: "#education",
		colorIndex: 2,
		tagline:
			"Excelling in Software Engineering at ALU with a 4.56 GPA, specializing in AI and data-driven solutions.",
	},
	{
		title: "Future of Medicine",
		subtitle: "Innovative Solutions",
		description:
			"Pioneering AI tools for early detection and equitable healthcare access.",
		image: AIinMedicine,
		bgGradient: "from-gray-200 to-gray-400",
		buttonText: "See Innovations",
		buttonLink: "#experience",
		colorIndex: 3,
		tagline:
			"Building Medical Solutions for better care and access with AI and data science.",
	},
	{
		title: "Tech for Good",
		subtitle: "Social Impact",
		description:
			"Building bridges between technology and humanity for a better tomorrow.",
		image: SocialImpactCoderina,
		bgGradient: "from-gray-200 to-gray-400",
		buttonText: "Get Involved",
		buttonLink: "#feed",
		colorIndex: 4,
		tagline:
			"Driving inclusive education and health access across Africa through tech-powered platforms.",
	},
];

// Animation Variants
const slideVariants = {
	hidden: { opacity: 0, x: 150 },
	visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
	exit: { opacity: 0, x: -150, transition: { duration: 1, ease: "easeIn" } },
};

const textVariants = {
	hidden: { opacity: 0, y: 30, rotate: -5 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		rotate: 0,
		transition: {
			duration: 0.8,
			delay: i * 0.2,
			type: "spring",
			stiffness: 80,
		},
	}),
};

export function Home() {
	const [currentSlide, setCurrentSlide] = useState(0);

	// Auto-slide every 4 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slideshowData.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	const handleNext = () =>
		setCurrentSlide((prev) => (prev + 1) % slideshowData.length);
	const handlePrev = () =>
		setCurrentSlide(
			(prev) => (prev - 1 + slideshowData.length) % slideshowData.length
		);

	return (
		<div className="w-full min-h-screen bg-gray-900 overflow-x-hidden text-white">
			{/* Slideshow Section */}
			<section className="relative h-[95vh] overflow-hidden">
				{slideshowData.map((slide, index) => (
					<motion.div
						key={index}
						initial="hidden"
						animate={index === currentSlide ? "visible" : "hidden"}
						exit="exit"
						variants={slideVariants}
						className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`}
						style={{
							background: `linear-gradient(135deg, ${
								sliderColors[slide.colorIndex].hex
							}AA 0%, ${
								slide.bgGradient.includes("teal") ? "#2A5A6A" : "#3B4B7A"
							} 100%)`,
						}}>
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col md:flex-row items-center justify-between gap-10">
							{/* Text Content */}
							<div className="text-center md:text-left text-white md:w-1/2 py-10">
								<motion.h2
									custom={0}
									initial="hidden"
									animate="visible"
									variants={textVariants}
									className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-wide">
									{slide.subtitle}
								</motion.h2>
								<motion.h1
									custom={1}
									initial="hidden"
									animate="visible"
									variants={textVariants}
									className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
									{slide.title}
									<motion.span
										animate={{ rotate: [0, 10, -10, 0] }}
										transition={{ repeat: Infinity, duration: 2 }}
										className="inline-block ml-3">
										<SparklesIcon
											className="h-8 w-8"
											style={{ color: sliderColors[slide.colorIndex].hex }}
										/>
									</motion.span>
								</motion.h1>
								<motion.p
									custom={2}
									initial="hidden"
									animate="visible"
									variants={textVariants}
									className="text-lg md:text-xl lg:text-2xl mb-8 font-light max-w-lg mx-auto md:mx-0 leading-relaxed text-gray-200">
									{slide.description}
								</motion.p>
								<motion.a
									href={slide.buttonLink}
									custom={3}
									initial="hidden"
									animate="visible"
									variants={textVariants}
									whileHover={{
										scale: 1.1,
										boxShadow: "0 12px 40px rgba(255, 255, 255, 0.4)",
										backgroundImage: `linear-gradient(to right, ${
											sliderColors[slide.colorIndex].hex
										}, #4B5EAA)`,
									}}
									whileTap={{ scale: 0.95 }}
									className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full font-semibold shadow-md transition-all"
									style={{
										backgroundColor: sliderColors[slide.colorIndex].hex,
									}}>
									{slide.buttonText}
									<ArrowRightIcon className="h-5 w-5" />
								</motion.a>
							</div>

							{/* Image */}
							<motion.div
								initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
								animate={{ opacity: 1, scale: 1, rotate: 0 }}
								transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
								className="md:w-1/2 relative">
								<img
									src={slide.image}
									alt={slide.title}
									className="w-full h-72 md:h-[450px] object-cover rounded-2xl shadow-2xl border"
									style={{ borderColor: sliderColors[slide.colorIndex].hex }}
								/>
								<motion.div
									animate={{ scale: [1, 1.05, 1] }}
									transition={{ repeat: Infinity, duration: 3 }}
									className="absolute -top-4 -right-4 w-16 h-16 rounded-full blur-xl"
									style={{
										backgroundColor: sliderColors[slide.colorIndex].hex + "30",
									}}
								/>
							</motion.div>
						</div>
					</motion.div>
				))}

				{/* Navigation Arrows */}
				<button
					onClick={handlePrev}
					style={{
						backgroundColor:
							sliderColors[slideshowData[currentSlide].colorIndex].hex + "CC",
					}}
					className="absolute left-6 top-1/2 transform -translate-y-1/2 p-4 rounded-full hover:opacity-90 backdrop-blur-sm transition-all"
					aria-label="Previous Slide">
					<ChevronLeftIcon
						style={{
							color: sliderColors[slideshowData[currentSlide].colorIndex].hex,
						}}
						className="h-7 w-7"
					/>
				</button>
				<button
					onClick={handleNext}
					style={{
						backgroundColor:
							sliderColors[slideshowData[currentSlide].colorIndex].hex + "CC",
					}}
					className="absolute right-6 top-1/2 transform -translate-y-1/2 p-4 rounded-full hover:opacity-90 backdrop-blur-sm transition-all"
					aria-label="Next Slide">
					<ChevronRightIcon
						style={{
							color: sliderColors[slideshowData[currentSlide].colorIndex].hex,
						}}
						className="h-7 w-7"
					/>
				</button>

				{/* Dots Navigation */}
				<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
					{slideshowData.map((slide, index) => {
						const baseColor = sliderColors[index].hex;
						const activeBgColor = baseColor;
						const inactiveBgColor = baseColor + "80";
						return (
							<motion.div
								key={index}
								animate={{
									scale: index === currentSlide ? 1.3 : 1,
									opacity: index === currentSlide ? 1 : 0.5,
									backgroundColor:
										index === currentSlide ? activeBgColor : inactiveBgColor,
								}}
								transition={{ duration: 0.3 }}
								className="w-4 h-4 rounded-full cursor-pointer"
								onClick={() => setCurrentSlide(index)}
								aria-label={`Go to slide ${index + 1}`}
							/>
						);
					})}
				</div>
			</section>

			{/* Main Content */}
			<main className="relative z-10">
				<About />
				<HomeButtons />
				<Experience />
				<Education />
				<Skills />
			</main>

			<section className="py-6 bg-gradient-to-br from-teal-900 to-indigo-900 text-center relative overflow-hidden">
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-white to-coral-500 bg-clip-text text-transparent mb-6 p-8">
					Let's Build the Future
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.2 }}
					className="text-xl mb-8 max-w-2xl mx-auto font-light text-gray-200">
					I'm always open to new projects and collaborations. Reach out and
					let's build something impactful together.
				</motion.p>

				<motion.a
					href="/contact"
					whileHover={{
						scale: 1.1,
						boxShadow: "0 15px 50px rgba(255, 255, 255, 0.4)",
					}}
					whileTap={{ scale: 0.95 }}
					className="inline-flex items-center gap-3 px-10 py-4 bg-teal-700 text-white rounded-full font-semibold shadow-lg hover:bg-coral-500 transition-all">
					Contact Me
					<ArrowRightIcon className="h-6 w-6" />
				</motion.a>

				{/* Animated background particles */}
				{Array.from({ length: 10 }).map((_, i) => (
					<motion.div
						key={i}
						variants={particleVariants}
						animate="animate"
						className="absolute w-2 h-2 bg-violet-500 rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
					/>
				))}
			</section>
		</div>
	);
}

export default Home;
