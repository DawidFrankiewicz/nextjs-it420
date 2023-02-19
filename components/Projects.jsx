import React from "react";

export default function Projects({ projects }) {
	return (
		<div className="relative z-30 px-5 -mt-44 mb-32">
			<div className="2xl:container">
				<h2 className="text-4xl mb-5">Projekty</h2>

				<div className="relative">
					<div className="flex gap-14 overflow-x-scroll snap-x snap-mandatory scroll-smooth no-scrollbar scroll-pl-[1px]">
						{projects.map((project) => (
							<div
								key={project.name}
								className="bg-black/10 dark:bg-white/10 w-full sm:w-[66%] lg:w-[36%] snap-start h-auto shadow-lg rounded-lg bg-cover aspect-video flex-shrink-0"
								style={{ backgroundImage: `url(${project.thumbnail})` }}
							></div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
