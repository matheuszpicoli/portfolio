//- React
import React from "react"

//- Styles
import "../index.scss"

//- API
import projects from "@/api/projects/projects"

export default function ProjectsPage() {
	return (
		<div className="main-layout">
			<h1>Projetos</h1>

			<div className="project-layout">
				<ul className="project-list">
					{projects.map(project => (
						<li key={project.id}>
							<h3 className="project-list-title">{project.title}</h3>

							<div className="adjustment">
								<project.icon className="project-list-icon" />

								<div className="links">
									<p className="project-list-repository">
										<span className="bold">Repositório:</span> <a href={project.repository} target="_blank">{project.repository}</a>
									</p>
									<p className="project-list-deploy">
										<span className="bold">Link:</span> <a href={project.link} target="_blank">{project.link}</a>
									</p>
								</div>

							</div>

							<p className="project-list-description">
								{project.description}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
