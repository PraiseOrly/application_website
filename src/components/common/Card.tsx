import React from "react";

interface CardProps {
	title: React.ReactNode;
	description: React.ReactNode;
	icon?: React.ReactNode;
	footer?: React.ReactNode;
	className?: string;
}

export function Card({
	title,
	description,
	icon,
	footer,
	className = "",
}: CardProps) {
	return (
		<div
			className={`
        bg-gray-900/50 backdrop-blur-md 
        border border-teal-500/30
        rounded-xl shadow-sm hover:shadow-md
        transition-all duration-200 
        p-6 
        flex flex-col 
        ${className}
      `}>
			<div className="flex items-start mb-4">
				{icon && <div className="mr-4">{icon}</div>}
				<div className="text-xl font-semibold text-white">{title}</div>
			</div>
			<div className="text-gray-200 flex-grow mb-4">{description}</div>
			{footer && (
				<div className="mt-auto pt-4 border-t border-gray-700">{footer}</div>
			)}
		</div>
	);
}
