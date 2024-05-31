"use client"

//- React
import React, { useState, useLayoutEffect } from "react"

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
	const [showButton, setShowButton] = useState<boolean>(false)
	const [showSlider, setShowSlider] = useState<boolean>(false)

	useLayoutEffect(() => {
		const aboutText: string = "Formado em Análise e Desenvolvimento de Sistemas, tenho experiência em construir aplicações web acessíveis que variam as suas utilidades, trazendo assim interfaces responsivas e funcionais."

		let index: number = 0
		let textArray: Array<typeof aboutText> = []

		const typing = () => {
			const typeEffect = document.getElementById("type-effect")

			if (typeEffect) {
				if (index < aboutText.length) {
					textArray.push(aboutText.charAt(index))
					typeEffect.innerHTML = textArray.join("")
					index++

					setTimeout(typing, 10)
				} else setShowButton(true)
			}
		}

		setTimeout(() => typing(), 500)
	}, [])

	useLayoutEffect(() => {
		const timer = setTimeout(() => setShowSlider(true), 4000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<div className="main-layout">
			<h1>Home</h1>

			<div className="home-layout">
				<section className="about">
					<div className="about-image">
						<Image
							style={{
								"filter": `${showButton ? "grayscale(0)" : "grayscale(1)"}`,
								"opacity": `${showButton ? "1" : "0.2"}`
							}}
							className="profile"
							src={ProfilePicture}
							alt="Foto de Matheus Picoli"
							priority
						/>
					</div>

					<div className="about-content">
						<h2>Olá, sou Matheus Picoli.</h2>
						<p>
							<span id="type-effect"></span>
							<span className="cursor"></span>
						</p>
						<button
							className={`
								${showButton ? "fade-in" : ""}
								projects-button
							`}
							style={{
								"opacity": `${!showButton ? "0" : "1"}`
							}}
						>
							<Link href="/projects">
								Projetos
								<Icon.Arrow className="icon" />
							</Link>
						</button>
						<button
							className={`
								${showButton ? "fade-in" : ""}
								contact-button
							`}
							style={{
								"opacity": `${!showButton ? "0" : "1"}`
							}}
						>
							<Link href="/contact">
								Contato
								<Icon.Arrow className="icon" />
							</Link>
						</button>
					</div>
				</section>

				<section className="languages">
					{showSlider && (
						<div className="slider-fade">
							<Slider />
						</div>
					)}
				</section>
			</div>

		</div>
	)
}
