"use client"

//- Next
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation"

//- Styles
import "../index.scss"

//- Icons
import * as Icon from "../../icons/reactIcons"

type CurrentLinkProps = {
	children: React.ReactNode
} & LinkProps

const CurrentLink = ({ href, children, ...params }: CurrentLinkProps) => {
	const pathname = usePathname()

	const isCurrentPath =
		pathname === href ||
		pathname === params.as ||
		pathname?.startsWith(String(params.as))

	return (
		<Link
			{...params}
			href={href}
			style={{
				pointerEvents: `${isCurrentPath ? "none" : "all"}`,
				color: `${isCurrentPath ? "#ffffff" : ""}`,
				opacity: `${isCurrentPath ? "0.3" : "1"}`
			}}
		>
			{children}
		</Link>
	)
}

export default function Header() {
	return (
		<header>
			<nav className="navbar">
				<div className="logo">
					<Icon.Code className="icon" />
					<p>Matheus Picoli<span className="pipe"></span>Web Developer</p>
				</div>
				<div className="link">
					<CurrentLink href="/">
						Home
					</CurrentLink>
					<CurrentLink href="/projects">
						Projetos
					</CurrentLink>
					<CurrentLink href="/contact">
						Contato
					</CurrentLink>
				</div>
			</nav>
		</header>
	)
}
