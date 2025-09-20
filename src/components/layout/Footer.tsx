import React from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

export function Footer() {
	return (
<footer className="bg-black border-t border-teal-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="text-gray-300 mb-4 md:mb-0 text-sm">
						© 2024 Praise Orly Atadja. All rights reserved.
					</div>
					<div className="flex space-x-6">
						<a
							href="#"
							className="text-gray-200 hover:text-teal-400 transition-colors duration-300"
							aria-label="Github">
							<GithubIcon className="h-6 w-6" />
						</a>
						<a
							href="#"
							className="text-gray-200 hover:text-teal-400 transition-colors duration-300"
							aria-label="LinkedIn">
							<LinkedinIcon className="h-6 w-6" />
						</a>
						<a
							href="#"
							className="text-gray-200 hover:text-teal-400 transition-colors duration-300"
							aria-label="Twitter">
							<TwitterIcon className="h-6 w-6" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
