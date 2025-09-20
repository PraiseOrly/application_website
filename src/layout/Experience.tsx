import React from "react";
import { motion } from "framer-motion";
import {
	Briefcase,
	Calendar,
	MapPin,
	Users,
	DollarSign,
	Trophy,
	HeartPulse,
	BrainCircuit,
	Code2,
	BookOpen,
	HandHeart,
	Microscope,
	School,
	Globe,
} from "lucide-react";

interface Achievement {
	text: string;
	icon: React.ReactNode;
}

interface ExperienceItem {
	title: string;
	company: string;
	location: string;
	duration: string;
	achievements: Achievement[];
}

const experienceData: ExperienceItem[] = [
	// Work Experience
	{
		title: "AI Research Assistant",
		company: "Cardiac TEK",
		location: "Tanzania, Remote",
		duration: "Feb 2024 – Present",
		achievements: [
			{
				text: "Built transfer learning-based ML model for ECG analysis (96% accuracy on 10,000+ PhysioNet samples), reducing cardiologist reliance by 70%",
				icon: <Microscope className="h-5 w-5 text-purple-400" />,
			},
			{
				text: "Developed XGBoost risk stratification model with 90% accuracy for cardiovascular event prediction in underserved populations",
				icon: <BrainCircuit className="h-5 w-5 text-indigo-300" />,
			},
			{
				text: "Improved diagnostic tool UI for low-resource settings, boosting data accuracy by 30%",
				icon: <Code2 className="h-5 w-5 text-teal-300" />,
			},
		],
	},
	{
		title: "Team Lead",
		company: "She Innovate Initiative",
		location: "Kigali, Rwanda",
		duration: "March 2024 – Present",
		achievements: [
			{
				text: "Led 2-week Summer School training 30 Rwandan girls in tech & design, increasing retention by 40%",
				icon: <School className="h-5 w-5 text-pink-400" />,
			},
			{
				text: "Managed $2K budget and secured 3 corporate partnerships for hackathon with 6 teams from 4 schools",
				icon: <DollarSign className="h-5 w-5 text-green-400" />,
			},
			{
				text: "Created inclusive learning materials boosting engagement by 40%",
				icon: <BookOpen className="h-5 w-5 text-blue-300" />,
			},
		],
	},
	{
		title: "Hub Ambassador",
		company: "African Leadership University",
		location: "Lagos, Nigeria",
		duration: "May 2023 – Sept 2023",
		achievements: [
			{
				text: "Organized educational trips and 5+ tech events, increasing student participation by 15%",
				icon: <Globe className="h-5 w-5 text-orange-300" />,
			},
			{
				text: "Reduced event costs by 30% through vendor negotiations",
				icon: <DollarSign className="h-5 w-5 text-green-400" />,
			},
			{
				text: "Facilitated ALU student engagement with Nigeria's tech ecosystem",
				icon: <Users className="h-5 w-5 text-cyan-400" />,
			},
		],
	},

	// Leadership Experience
	{
		title: "Vice President",
		company: "Alliance4AI, ALU Chapter",
		location: "Kigali, Rwanda",
		duration: "Sept 2024 – Present",
		achievements: [
			{
				text: "Oversaw 8+ ML workshops using TensorFlow/Scikit-learn, leading to 40% participants securing AI roles",
				icon: <BrainCircuit className="h-5 w-5 text-indigo-300" />,
			},
			{
				text: "Managed team of 10, increasing student engagement by 25%",
				icon: <Users className="h-5 w-5 text-cyan-400" />,
			},
			{
				text: "Mentored 15+ students in project-based AI initiatives",
				icon: <School className="h-5 w-5 text-pink-400" />,
			},
		],
	},
	{
		title: "Participant",
		company: "Swiss Business Case Challenge",
		location: "Lucerne, Switzerland",
		duration: "June 2024",
		achievements: [
			{
				text: "Researched green hydrogen's potential to meet 25% of Africa's energy needs",
				icon: <Globe className="h-5 w-5 text-orange-300" />,
			},
			{
				text: "Led negotiations securing 40% stakeholder support for SDG-aligned energy project",
				icon: <HandHeart className="h-5 w-5 text-red-300" />,
			},
		],
	},

	// Volunteering Experience
	{
		title: "Global Volunteer",
		company: "AIESEC",
		location: "Nairobi, Kenya",
		duration: "Sept 2024 – Oct 2024",
		achievements: [
			{
				text: "Improved literacy/numeracy skills for 70% of 30 students in Nairobi slums",
				icon: <BookOpen className="h-5 w-5 text-blue-300" />,
			},
			{
				text: "Increased classroom participation by 30% through engaging activities",
				icon: <Users className="h-5 w-5 text-cyan-400" />,
			},
		],
	},

];

const animationConfig = {
	section: {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				staggerChildren: 0.2,
				when: "beforeChildren",
			},
		},
	},
	card: {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 120,
				damping: 15,
			},
		},
		hover: {
			scale: 1.03,
			boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
		},
	},
	item: {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				ease: "backOut",
			},
		},
	},
};

const AchievementCard: React.FC<{ achievement: Achievement }> = ({
	achievement,
}) => (
	<motion.div
		variants={animationConfig.item}
		whileHover={{ x: 5 }}
		className="flex items-start gap-4 p-4 bg-gray-700 rounded-lg border border-teal-700 hover:border-indigo-500 shadow-sm transition-all">
		<div className="p-2 bg-gray-800 rounded-full">{achievement.icon}</div>
		<p className="text-white text-base flex-1">{achievement.text}</p>
	</motion.div>
);

export const Experience = () => {
	return (
		<section
			id="experience"
			className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 to-indigo-900 relative overflow-hidden">
			<div className="max-w-7xl mx-auto relative z-10">
				<motion.div
					variants={animationConfig.section}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
					className="text-center mb-16">
					<h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent">
						Professional Experience
					</h2>
					<motion.p
						variants={animationConfig.item}
						className="text-teal-300 text-xl max-w-3xl mx-auto">
						Demonstrating technical leadership and social impact through diverse
						roles
					</motion.p>
				</motion.div>

				<motion.div
					variants={animationConfig.section}
					className="grid gap-8 lg:grid-cols-2">
					{experienceData.map((exp) => (
						<motion.div
							key={`${exp.company}-${exp.title}`}
							variants={animationConfig.card}
							whileHover="hover"
							className="bg-gray-800 rounded-xl shadow-lg p-6 border border-teal-700 relative overflow-hidden">
							<div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 to-teal-500" />

							<div className="flex flex-col gap-4 mb-6">
								<div className="flex items-center justify-between gap-4">
									<div className="flex items-center gap-4">
										<div className="p-3 bg-indigo-900 rounded-lg">
											<Briefcase className="h-6 w-6 text-indigo-400" />
										</div>
										<div>
											<h3 className="text-2xl font-bold text-teal-300">
												{exp.title}
											</h3>
											<p className="text-white font-medium">{exp.company}</p>
										</div>
									</div>
									<div className="flex items-center gap-2 text-white">
										<Calendar className="h-5 w-5" />
										<span className="font-medium">{exp.duration}</span>
									</div>
								</div>

								<div className="flex items-center gap-2 text-teal-400">
									<MapPin className="h-5 w-5" />
									<span>{exp.location}</span>
								</div>
							</div>

							<div className="space-y-4">
								{exp.achievements.map((achievement, idx) => (
									<AchievementCard key={idx} achievement={achievement} />
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 0.1, scale: 1 }}
					transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
					className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-teal-700 to-indigo-700 rounded-full blur-3xl pointer-events-none"
				/>
			</div>
		</section>
	);
};
