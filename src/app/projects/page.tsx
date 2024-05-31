"use client"

//- React
import React, { useState } from "react"

//- Styles
import "../index.scss"

//- Icons
import * as Icon from "../../icons/reactIcons"

//- API
import projects from "@/api/projects/projects"

export default function ProjectsPage() {
	const [showProject, setShowProject] = useState<boolean>(false)

	return (
		<div className="main-layout">
			<h1>Projetos</h1>

			<div className="project-layout">
				<section>

					<span
						className="highlighted"
						onAnimationEnd={
							() => setTimeout(() => setShowProject(true), 1000)
						}>
						<p>
							Em destaqu<span className="different-letter">e</span>
						</p>
					</span>

					{showProject && (
						<ul className="project-list">
							{projects.map((project, index) => (
								<li
									key={project.id}
									style={{
										opacity: 0,
										animation: showProject ? `fade-projects 1000ms ease ${index * 500}ms forwards` : "none"
									}}
								>
									<h3 className="project-list-title">{project.title}</h3>

									<div className="adjustment">
										<project.icon className="project-list-icon" />

										<div className="links">
											<p className="project-list-deploy">
												<span className="bold">Link:</span>&nbsp;
												<a
													href={project.link}
													target="_blank"
												>
													{project.link}
													<Icon.Arrow className="project-list-url-icon" />
												</a>
											</p>
											<p className="project-list-repository">
												<span className="bold">Repositório:</span>&nbsp;
												<a
													href={project.repository}
													target="_blank"
												>
													{project.repository}
													<Icon.Arrow className="project-list-url-icon" />
												</a>
											</p>
										</div>

									</div>

									<p className="project-list-description">
										{project.description}
									</p>
								</li>
							))}
						</ul>
					)}
				</section>
			</div>
		</div>
	)
}
