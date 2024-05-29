//- React
import React from "react"

//- Styles
import "../index.scss"

//- Icons
import { IconType } from "react-icons"

interface ContactProps {
	contact: string
	icon: IconType
	link: string
	newTab?: boolean
}

Contact.defaultProps = {
	newTab: true
}

export default function Contact<T extends ContactProps>(props: T) {
	return (
		<div>
			<h3 className="contact-title">{props.contact}</h3>
			<props.icon className="icon" />
			<a
				className="contact-link"
				href={props.link}
				target={props.newTab ? "_blank" : "_self"}
				rel={props.newTab ? "noreferrer noopener nofollow" : ""}
			>
				{props.link}
			</a>
		</div>
	)
}
