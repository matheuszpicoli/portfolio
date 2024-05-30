"use client"

//- Next
import Image, { StaticImageData } from "next/image"

//- React
import React from "react"

//- React Slick
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

//- Style
import "../../app/index.scss"

//- Languages Images
import CSS from "../../../public/images/language/CSS.png"
import Git from "../../../public/images/language/Git.png"
import Gulp from "../../../public/images/language/Gulp.png"
import HTML from "../../../public/images/language/HTML.png"
import JavaScript from "../../../public/images/language/JavaScript.png"
import jQuery from "../../../public/images/language/jQuery.png"
import MongoDB from "../../../public/images/language/MongoDB.png"
import MySQL from "../../../public/images/language/MySQL.png"
import NextJS from "../../../public/images/language/NextJS.png"
import NodeJS from "../../../public/images/language/NodeJS.png"
import Oracle from "../../../public/images/language/Oracle.png"
import ReactJS from "../../../public/images/language/ReactJS.png"
import SCSS from "../../../public/images/language/SCSS.png"
import TailwindCSS from "../../../public/images/language/TailwindCSS.png"
import TypeScript from "../../../public/images/language/TypeScript.png"
import VueJS from "../../../public/images/language/VueJS.png"

const languages: StaticImageData[] = [CSS, Git, Gulp, HTML, JavaScript, jQuery, MongoDB, MySQL, NextJS, NodeJS, Oracle, ReactJS, SCSS, TailwindCSS, TypeScript, VueJS]
const languageName: string[] = ["CSS", "Git", "Gulp", "HTML", "JavaScript", "jQuery", "MongoDB", "MySQL", "Next JS", "Node JS", "Oracle", "React JS", "SCSS", "Tailwind CSS", "TypeScript", "Vue JS"]

export default function LanguageSlider() {
	const sliderSettings = {
		dots: false,
		infinite: true,
		slidesToShow: 12,
		slidesToScroll: 1,
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
