import Link from 'next/link'

export default function Home() {
	return (
		<>
			<header>
				<nav>
					<ul className="flex">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/recipes">Recipes</Link>
						</li>
					</ul>
				</nav>
			</header>

			<main>
				<h1>Hi, my name is João Vitor and I live in Brazil.</h1>
			</main>
		</>
	)
}
