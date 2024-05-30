//- React
import React from "react"

//- Styles
import "../index.scss"

//- Icons
import * as Icon from "../../icons/reactIcons"

//- API
import projects from "@/api/projects/projects"

export default function ProjectsPage() {
	return (
		<div className="main-layout">
			<h1>Projetos</h1>

			<div className="project-layout">
				<section>

					<span className="highlighted">
						Em destaqu<span className="different-letter">e</span>
					</span>

					<ul className="project-list">
						{projects.map(project => (
							<li key={project.id}>
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
				</section>
			</div>
		</div>
	)
}
