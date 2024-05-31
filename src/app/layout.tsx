//- Next
import type { Metadata } from "next"

//- Components
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata: Metadata = {
	title: "Portfólio | Matheus Picoli",
	description: "Meu portfólio pessoal, feito em Next JS com Typescript e SCSS.",
	authors: [{
		name: "Matheus Zanela Picoli",
		url: "https://github.com/matheuszpicoli/portfolio"
	}],
	keywords: [
		"NextJS",
		"Next",
		"Portfólio",
		"Portfólio Pessoal",
		"React",
		"ReactJS",
		"JavaScript",
		"JS",
		"TypeScript",
		"TS",
		"Git",
		"GitHub"
	]
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-br">
			<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
			<body>
				<Header />

				<main>
					{children}
				</main>

				<Footer />
			</body>
		</html>
	)
}
