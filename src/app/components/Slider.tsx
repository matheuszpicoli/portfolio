"use client"

//- Next
import Image, { StaticImageData } from "next/image"

//- React
import React, { useState, useLayoutEffect } from "react"

//- React Slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

//- Style
import "../../app/index.scss"

//- Languages Images
import CSSLogo from "../../../public/images/language/CSS.png"
import GitLogo from "../../../public/images/language/Git.png"
import GulpLogo from "../../../public/images/language/Gulp.png"
import HTMLLogo from "../../../public/images/language/HTML.png"
import JavaScriptLogo from "../../../public/images/language/JavaScript.png"
import jQueryLogo from "../../../public/images/language/jQuery.png"
import MongoDBLogo from "../../../public/images/language/MongoDB.png"
import MySQLLogo from "../../../public/images/language/MySQL.png"
import NextJSLogo from "../../../public/images/language/NextJS.png"
import NodeJSLogo from "../../../public/images/language/NodeJS.png"
import OracleLogo from "../../../public/images/language/Oracle.png"
import ReactJSLogo from "../../../public/images/language/ReactJS.png"
import SCSSLogo from "../../../public/images/language/SCSS.png"
import TailwindCSSLogo from "../../../public/images/language/TailwindCSS.png"
import TypeScriptLogo from "../../../public/images/language/TypeScript.png"
import VueJSLogo from "../../../public/images/language/VueJS.png"

const languages: StaticImageData[] = [CSSLogo, GitLogo, GulpLogo, HTMLLogo, JavaScriptLogo, jQueryLogo, MongoDBLogo, MySQLLogo, NextJSLogo, NodeJSLogo, OracleLogo, ReactJSLogo, SCSSLogo, TailwindCSSLogo, TypeScriptLogo, VueJSLogo]
const languageName: string[] = ["CSS", "Git", "Gulp", "HTML", "JavaScript", "jQuery", "MongoDB", "MySQL", "Next JS", "Node JS", "Oracle", "React JS", "SCSS", "Tailwind CSS", "TypeScript", "Vue JS"]

export default function LanguageSlider() {
	const [numberOfSlides, setNumberOfSlides] = useState<number>(12)

	useLayoutEffect(() => {
		const handleResize = () => {
			if (window.matchMedia("(max-width: 615px)").matches) setNumberOfSlides(6)
		}

		window.addEventListener("resize", handleResize)
		handleResize()

		return () => window.removeEventListener("resize", handleResize)
	}, [])

	const sliderSettings = {
		dots: false,
		infinite: true,
		slidesToShow: numberOfSlides,
		slidesToScroll: 1,
		draggable: false,
		autoplay: true,
		autoplaySpeed: 1000
	}

	return (
		<React.Fragment>
			<h3 className="languages-title">Linguagens, libs e frameworks</h3>

			<div className="languages-layout">
				<Slider
					{...sliderSettings}
					className="languages-slider"
				>
					{languages.map((language, index) => (
						<figure key={index}>
							<div className="languages-figure-images-layout">
								<Image
									className="languages-images"
									src={language}
									alt={languageName[index]}
									priority
								/>
								<figcaption className="languages-subtitle">
									{languageName[index]}
								</figcaption>
							</div>
						</figure>
					))}
				</Slider>
			</div>
		</React.Fragment>
	)
}
