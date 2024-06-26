//- React
import React from "react"

//- Styles
import "../index.scss"

//- Components
import Contact from "../components/Contact"

//- Icons
import * as Icon from "../../icons/reactIcons"

export default function ContactPage() {
	return (
		<div className="main-layout">
			<h1>Contato</h1>

			<div className="contact-layout">
				<section className="contact">
					<Contact
						contact="GitHub"
						icon={Icon.GitHub}
						link="https://github.com/matheuszpicoli"
					/>

					<Contact
						contact="LinkedIn"
						icon={Icon.LinkedIn}
						link="https://www.linkedin.com/in/matheus-zpicoli"
					/>

					<Contact
						contact="E-mail"
						icon={Icon.Email}
						link="mailto:matheuspicoli2011@gmail.com"
						newTab={false}
						text="matheuspicoli2011@gmail.com"
					/>

					<Contact
						contact="Currículo"
						icon={Icon.Pdf}
						link="./pdf/Currículo.pdf"
						text="Clique aqui para visualizar meu currículo"
					/>
				</section>
			</div>
		</div>
	)
}
