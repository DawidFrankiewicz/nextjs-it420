import React from "react";

export default function Projects({ projects }) {
	return (
		<div className="relative z-30 px-5 -mt-32 mb-32 overflow-x-clip ">
			<div className="2xl:container">
				<h2 className="text-4xl mb-5">Projekty</h2>
				<div className="flex gap-5">
					{projects.map((project) => (
						<div
							key={project.name}
							className="bg-black/10 dark:bg-white/10 w-[600px] max-w-[unset]: shadow-lg rounded-lg p-5 aspect-video bg-cover"
							style={{ backgroundImage: `url(${project.thumbnail})` }}
						></div>
					))}
				</div>
			</div>
		</div>
	);
}
