import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'JVZO',
	description: 'Johnny is a web developer based in Brazil.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="container mx-auto lg:max-w-2xl" style={inter.style}>
				{children}
			</body>
		</html>
	)
}
