//- React
import React from "react"

//- Styles
import "../index.scss"

type LinkProps = {
	href: string,
	content: string
}

const links: LinkProps[] = [
	{
		href: "https://nextjs.org/",
		content: "Next JS"
	},
	{
		href: "https://www.typescriptlang.org/",
		content: "Typescript"
	},
	{
		href: "https://sass-lang.com/",
		content: "SCSS"
	},
	{
		href: "https://fonts.google.com/specimen/Rethink+Sans",
		content: "Rethink Sans"
	},
	{
		href: "https://vercel.com",
		content: "Vercel"
	}
]

const FooterLink: React.FunctionComponent<LinkProps> = ({ href, content }) => {
	return (
		<a
			href={href}
			className="footer-link"
			target="_blank"
			rel="noreferrer noopener"
		>
			{content}
		</a>
	)
}

function Footer() {
	return (
		<footer className="footer">
			<p className="footer-text">
				Esse portfólio foi desenvolvido em&nbsp;
				<FooterLink
					href={links[0].href}
					content={links[0].content}
				/> com&nbsp;
				<FooterLink
					href={links[1].href}
					content={links[1].content}
				/> e&nbsp;
				<FooterLink
					href={links[2].href}
					content={links[2].content}
				/>. Todo o porfólio está na fonte&nbsp;
				<FooterLink
					href={links[3].href}
					content={links[3].content}
				/>. Implantado com a&nbsp;
				<FooterLink
					href={links[4].href}
					content={links[4].content}
				/>.
			</p>
		</footer>
	)
}

export default React.memo(Footer)
