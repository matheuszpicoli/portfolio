//- React Icons
import * as Icon from "../../icons/reactIcons"
import { IconType } from "react-icons"

type Project = {
	id: number
	title: string
	icon: IconType,
	repository: string
	link: string
	description: string
}

export const projects: Project[] = [
	{
		id: 1,
		title: "MP Spaceship",
		icon: Icon.Spaceship,
		repository: "https://github.com/matheuszpicoli/spaceship-game",
		link: "https://mp-spaceship-game.vercel.app/",
		description: "Um jogo de nave espacial construído com HTML, JavaScript puro e SCSS."
	},
	{
		id: 2,
		title: "MP Burger",
		icon: Icon.Burger,
		repository: "https://github.com/matheuszpicoli/burguer-place",
		link: "https://mp-burguer-place.vercel.app/",
		description: "Um projeto de uma hamburgueria criado com React, Tailwind CSS e JSON Server."
	}
]

export default projects
