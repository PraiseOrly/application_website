import React from "react";
import { MenuIcon } from "lucide-react";

export const Header = () => {
	return (
<header className="fixed top-0 left-0 w-full bg-black z-50 border-b border-teal-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					<div className="text-xl font-bold text-white">Praise Orly Atadja</div>
					<nav className="hidden md:flex gap-8">
						<a
							href="#about"
							className="text-gray-200 hover:text-teal-400 transition-colors duration-300">
							About
						</a>
						<a
							href="#experience"
							className="text-gray-200 hover:text-teal-400 transition-colors duration-300">
							Experience
						</a>
						<a
							href="#education"
							className="text-gray-200 hover:text-teal-400 transition-colors duration-300">
							Education
						</a>
						<a
							href="#skills"
							className="text-gray-200 hover:text-teal-400 transition-colors duration-300">
							Skills
						</a>
					</nav>
					<button className="md:hidden text-white">
						<MenuIcon className="w-6 h-6" />
					</button>
				</div>
			</div>
		</header>
	);
};
