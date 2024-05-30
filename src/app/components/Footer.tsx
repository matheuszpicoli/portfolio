//- React
import React from "react"

//- Styles
import "../index.scss"

export default function Footer() {
	return (
		<footer className="footer">
			<p className="footer-text">
				Esse portfólio foi desenvolvido em <a
					href="https://nextjs.org/"
					className="footer-link"
					target="_blank"
					rel="noreferrer noopener"
				>
					Next JS</a> com <a
						href="https://www.typescriptlang.org/"
						className="footer-link"
						target="_blank"
						rel="noreferrer noopener"
					>
					Typescript</a> e <a
						href="https://sass-lang.com/"
						className="footer-link"
						target="_blank"
						rel="noreferrer noopener"
					>
					SCSS</a>. Todo o porfólio está na fonte <a
						href="https://fonts.google.com/specimen/Rethink+Sans"
						className="footer-link"
						target="_blank"
						rel="noreferrer noopener"
					>
					Rethink Sans</a>. Implantado com a <a
						href="https://vercel.com"
						className="footer-link"
						target="_blank"
						rel="noreferrer noopener"
					>
					Vercel</a>.
			</p>
		</footer>
	)
}
