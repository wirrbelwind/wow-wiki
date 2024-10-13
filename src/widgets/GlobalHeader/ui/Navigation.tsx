import { Link } from "@nextui-org/react"
import { navigationLinks } from "../config/navigation"

export const Navigation = () => {
	return (
		<ul className="flex justify-between gap-10">
			{
				navigationLinks.map((link, index) => (
					<li key={index}>
						<Link
							href={link.href}
						>
							{link.title}
						</Link>
					</li>
				))
			}
		</ul>
	)
}