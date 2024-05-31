//- React
import React from "react"

//- Styles
import "../index.scss"

//- Icons
import { IconType } from "react-icons"
import * as Icon from "../../icons/reactIcons"

interface ContactProps {
	contact: string
	icon: IconType
	link: string
	newTab?: boolean
	text?: string
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
				className="contact-link fade-link"
				href={props.link}
				target={props.newTab ? "_blank" : "_self"}
				rel={props.newTab ? "noreferrer noopener nofollow" : undefined}
			>
				{props.text || props.link}
				<Icon.Arrow className="contact-link-icon" />
			</a>
		</div>
	)
}
