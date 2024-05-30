"use client"

//- Next
import Image, { StaticImageData } from "next/image"

//- React
import React, { useLayoutEffect, useState } from "react"

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

export default function Slider() {
	const [currentImage, setCurrentImage] = useState<number>(0)

	useLayoutEffect(() => {
		const timer = setInterval(() => setCurrentImage(previousImage => (previousImage + 1) % languages.length), 1000)

		return () => clearInterval(timer)
	}, [])

	return (
		<React.Fragment>
			<h3 className="languages-title">Linguagens, libs e frameworks</h3>
			<div className="languages-slider">
				{languages.map((language, index) => (
					<Image
						key={index}
						className="languages-images"
						src={language}
						alt={`Linguagem ${index}`}
					/>
				))}
			</div>
		</React.Fragment>
	)
}
