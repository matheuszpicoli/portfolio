//- React
import React from "react"

//- Next
import Link from "next/link"

//- Styles
import "./index.scss"

//- Icons
import * as Icon from "../icons/reactIcons"

export default function HomePage() {
	return (
		<div className="main-layout">
			<h1>Home</h1>

			<div className="home-layout">
				<section className="about">
					<div className="about-image">
						<img
							className="profile"
							src="./images/profilePicture.png"
							alt="Foto de Matheus Picoli"
						/>
					</div>

					<div className="about-content">
						<h2>Olá, sou Matheus Picoli.</h2>
						<p>
							Formado em Análise e Desenvolvimento de Sistemas, tenho experiência em construir aplicações web acessíveis que variam as suas utilidades, trazendo assim interfaces responsivas e funcionais.
						</p>
						<button className="projects-button">
							<Link href="/projects">
								Projetos
								<Icon.Arrow className="icon" />
							</Link>
						</button>
						<button className="contact-button">
							<Link href="/contact">
								Contato
								<Icon.Arrow className="icon" />
							</Link>
						</button>
					</div>
				</section>

				<section className="languages"></section>
			</div>

		</div>
	)
}
