import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	GraduationCap,
	BookOpen,
	Calendar,
	FileBadge,
	Briefcase,
	X,
} from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface EducationData {
	institution: string;
	degree: string;
	specialization: string;
	duration: string;
	courses: string[];
}

interface Certification {
	name: string;
	issuer: string;
	date: string;
	status: "completed" | "in progress";
	url: string;
}

const educationData: EducationData = {
	institution: "African Leadership University (ALU)",
	degree: "BSc Software Engineering - First Class Honours",
	specialization: "Machine Learning, AI for Healthcare",
	duration: "Jan 2022 - June 2025",
	courses: [
		"Mathematics for Machine Learning",
		"Machine Learning Techniques",
		"Ethics in Software Engineering",
		"Frontend & Backend Development",
		"Entrepreneurial Leadership",
	],
};

const certificationsData: Certification[] = [
	{
		name: "Data Analytics Certificate",
		issuer: "ALX",
		date: "Apr 2025",
		status: "completed",
		url: "/certifications/data-analytics.pdf",
	},
	{
		name: "Artificial Intelligence Essentials V2",
		issuer: "IBM",
		date: "Mar 2025",
		status: "in progress",
		url: "/certifications/ai-essentials.pdf",
	},
	{
		name: "IT & Cloud Fundamentals Specialization",
		issuer: "IBM",
		date: "Mar 2023",
		status: "completed",
		url: "/certifications/cloud-fundamentals.pdf",
	},
	{
		name: "Foundations of Project Management",
		issuer: "Google",
		date: "Feb 2023",
		status: "completed",
		url: "/certifications/project-management.pdf",
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
				ease: "easeOut",
				when: "beforeChildren",
				staggerChildren: 0.2,
			},
		},
	},
	card: {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.6, type: "spring", stiffness: 100 },
		},
		hover: {
			scale: 1.03,
			boxShadow: "0 15px 40px rgba(0, 0, 0, 0.3)",
			transition: { duration: 0.3, ease: "easeInOut" },
		},
	},
	item: {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.5, ease: "easeOut" },
		},
		hover: { x: 5, transition: { duration: 0.3 } },
	},
};

const CourseItem: React.FC<{ course: string }> = ({ course }) => (
	<motion.li
		variants={animationConfig.item}
		whileHover="hover"
		className="flex items-center gap-3 p-3 bg-gray-800 rounded-md hover:bg-teal-700 transition-colors">
		<span className="h-2 w-2 bg-teal-400 rounded-full" />
		<span className="text-white">{course}</span>
	</motion.li>
);

const CertificationItem: React.FC<{
	certification: Certification;
	onClick: () => void;
}> = ({ certification, onClick }) => (
	<motion.div
		variants={animationConfig.item}
		whileHover="hover"
		className="flex items-center gap-4 p-4 bg-gray-800 rounded-md hover:bg-teal-700 transition-colors cursor-pointer"
		onClick={onClick}>
		<FileBadge className="h-6 w-6 text-teal-400" />
		<div className="flex-1">
			<h4 className="text-white font-medium">{certification.name}</h4>
			<div className="flex items-center gap-3 mt-1">
				<span className="text-gray-400 text-sm">{certification.issuer}</span>
				<span
					className={`text-xs px-2 py-1 rounded-full ${
						certification.status === "completed"
							? "bg-green-800 text-green-300"
							: "bg-yellow-800 text-yellow-300"
					}`}>
					{certification.status}
				</span>
			</div>
			<p className="text-gray-500 text-xs mt-2">{certification.date}</p>
		</div>
	</motion.div>
);

const CertificateModal: React.FC<{
	certificate: Certification | null;
	onClose: () => void;
}> = ({ certificate, onClose }) => {
	if (!certificate) return null;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
			onClick={onClose}>
			<motion.div
				initial={{ scale: 0.9 }}
				animate={{ scale: 1 }}
				className="bg-gray-800 rounded-xl p-6 max-w-5xl w-full relative"
				onClick={(e) => e.stopPropagation()}>
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
					<X className="h-8 w-8" />
				</button>

				<h3 className="text-2xl font-bold text-white mb-4">
					{certificate.name}
				</h3>

				<div className="bg-gray-900 rounded-lg overflow-hidden">
					<iframe
						src={certificate.url}
						className="w-full h-[500px]"
						title={`${certificate.name} Certificate`}
					/>
				</div>

				<div className="mt-4 flex items-center gap-2 text-gray-400">
					<FileBadge className="h-5 w-5" />
					<span>Issued by: {certificate.issuer}</span>
					<span className="mx-2">•</span>
					<Calendar className="h-5 w-5" />
					<span>{certificate.date}</span>
				</div>
			</motion.div>
		</motion.div>
	);
};

export const Education = () => {
	const [selectedCertificate, setSelectedCertificate] =
		useState<Certification | null>(null);

	return (
		<section
			className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900 to-indigo-900 relative overflow-hidden"
			id="education">
			<div className="max-w-7xl mx-auto relative z-10">
				<motion.div
					variants={animationConfig.section}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="text-center mb-16">
					<h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
						Education & Certifications
					</h2>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Education Card */}
					<motion.div
						variants={animationConfig.card}
						initial="hidden"
						whileInView="visible"
						whileHover="hover"
						className="bg-gray-800 rounded-xl shadow-xl p-8 border border-teal-700 relative overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-teal-500 via-indigo-500 to-teal-500" />

						<div className="space-y-6">
							<motion.div
								variants={animationConfig.item}
								className="flex items-center gap-4">
								<div className="p-3 bg-teal-700 rounded-full">
									<GraduationCap className="h-8 w-8 text-teal-400" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-teal-400">
										{educationData.institution}
									</h3>
									<p className="text-lg text-white font-medium">
										{educationData.degree}
									</p>
									<p className="text-white italic">
										{educationData.specialization}
									</p>
								</div>
							</motion.div>

							<motion.div variants={animationConfig.item}>
								<div className="flex items-center gap-3 mb-4">
									<BookOpen className="h-6 w-6 text-indigo-400" />
									<h4 className="text-lg font-semibold text-teal-400">
										Core Coursework
									</h4>
								</div>
								<ul className="space-y-3">
									{educationData.courses.map((course, index) => (
										<CourseItem key={index} course={course} />
									))}
								</ul>
							</motion.div>

							<motion.div
								variants={animationConfig.item}
								className="bg-teal-900 rounded-xl p-5">
								<div className="flex items-center gap-3">
									<Calendar className="h-6 w-6 text-teal-400" />
									<div>
										<p className="text-white font-medium">Program Duration</p>
										<p className="text-white">{educationData.duration}</p>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>

					{/* Certifications Card */}
					<motion.div
						variants={animationConfig.card}
						initial="hidden"
						whileInView="visible"
						whileHover="hover"
						className="bg-gray-800 rounded-xl shadow-xl p-8 border border-teal-700 relative overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-500 to-teal-500" />

						<div className="space-y-6">
							<motion.div
								variants={animationConfig.item}
								className="flex items-center gap-4 mb-6">
								<div className="p-3 text-teal-300 rounded-full">
									<Briefcase className="h-8 w-8 " />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-teal-300">
										Professional Certifications
									</h3>
									<p className="text-white">
										Validated technical expertise and continuous learning
									</p>
								</div>
							</motion.div>

							<div className="space-y-4">
								{certificationsData.map((certification, index) => (
									<CertificationItem
										key={index}
										certification={certification}
										onClick={() => setSelectedCertificate(certification)}
									/>
								))}
							</div>

							{/* Add the "Other Course Certificates" button */}
							<motion.a
								href="https://drive.google.com/drive/folders/1YWkW5CRaslwAh_fMdb1roDbti71WBWO2?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								variants={animationConfig.item}
								whileHover={{ scale: 1.05 }}
								className="inline-block w-full px-6 py-3 bg-teal-900 hover:bg-teal-500 text-white font-medium rounded-lg transition-all duration-300 text-center">
								<div className="flex items-center justify-center gap-2">
									<FileBadge className="h-5 w-5" />
									View All Course Certificates
								</div>
							</motion.a>
						</div>
					</motion.div>
				</div>

				<CertificateModal
					certificate={selectedCertificate}
					onClose={() => setSelectedCertificate(null)}
				/>

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
