//- Next
import type { Metadata } from "next"

//- Components
import Header from "./components/Header"

export const metadata: Metadata = {
	title: "Matheus Zanela Picoli",
	description: "Generated by create next app"
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-br">
			<body>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
