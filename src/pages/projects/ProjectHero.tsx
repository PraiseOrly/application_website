import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import React from "react";

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

const ProjectHero: React.FC = () => {
	const { scrollY } = useScroll();
	const parallaxY = useTransform(scrollY, [0, 300], [0, -100]);

	return (
		<section className="relative pt-12 pb-16 md:pt-14 md:pb-24 flex items-center justify-center bg-gradient-to-br from-teal-900 to-indigo-900 text-white overflow-hidden">
			{/* Dynamic Particle Background */}
			<div className="absolute inset-0 pointer-events-none">
				{[...Array(20)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute bg-teal-400/50 rounded-full"
						initial={{
							scale: 0,
							opacity: 0,
							x: Math.random() * 100 + "%",
							y: Math.random() * 100 + "%",
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

			{/* Holographic Grid Overlay */}
			<div className="absolute inset-0 opacity-15 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)] pointer-events-none">
				<div className="absolute inset-0 [background-size:50px_50px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)]" />
			</div>

			{/* Parallax Background Sphere */}
			<motion.div
				style={{ y: parallaxY }}
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.2)_0%,transparent_70%)] pointer-events-none"
				animate={{
					scale: [1, 1.1, 1],
					rotate: [0, 10, 0],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			{/* Main Content */}
			<motion.div
				variants={heroVariants}
				initial="hidden"
				animate="visible"
				className="relative z-10 text-center px-6 max-w-6xl">
				{/* Title with Holographic Effect */}
				<motion.div variants={titleVariants} className="relative inline-block">
					<h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-300 to-indigo-200 bg-clip-text text-transparent">
						Innovative Projects
						<motion.span
							animate={{
								rotate: [0, 20, -20, 0],
								scale: [1, 1.3, 1],
								opacity: [1, 0.8, 1],
							}}
							transition={{
								duration: 2.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
							className="absolute -top-2 -right-10 md:-top-8 md:-right-14">
							<Sparkles className="h-8 w-8 md:h-12 md:w-12 text-yellow-300 drop-shadow-md" />
						</motion.span>
					</h1>
					{/* Holographic Glow */}
					<motion.div
						className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-400/30 to-indigo-400/30 blur-xl"
						animate={{ opacity: [0.5, 0.8, 0.5] }}
						transition={{ duration: 2, repeat: Infinity }}
					/>
				</motion.div>

				{/* Subtitle */}
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
						backgroundImage: "linear-gradient(to right, #34d399, #3b82f6)",
					}}
					whileTap={{ scale: 0.95 }}
					className="mt-10 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-full font-semibold shadow-lg hover:text-white transition-all duration-300">
					Explore My Work
					{/* <ArrowRight className="h-5 w-5" /> */}
				</motion.a>
			</motion.div>
		</section>
	);
};

export default ProjectHero;
