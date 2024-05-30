//- React
import React from "react"

//- Next
import Link from "next/link"
import Image from "next/image"

//- Styles
import "./index.scss"

//- Components
import Slider from "./components/Slider"

//- Icons
import * as Icon from "../icons/reactIcons"

//- Images
import ProfilePicture from "../../public/images/profile/profilePicture.png"

export default function HomePage() {
	return (
		<div className="main-layout">
			<h1>Home</h1>

			<div className="home-layout">
				<section className="about">
					<div className="about-image">
						<Image
							className="profile"
							src={ProfilePicture}
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

				<section className="languages">
					<Slider />
				</section>
			</div>

		</div>
	)
}
