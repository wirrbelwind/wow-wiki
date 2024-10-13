import { getMount } from "@/shared/utils/getMount"

export default async function MountPage({ params: { id } }: { params: { id: string } }) {
	const mount = await getMount(id)

	return (
		<div>
			<div>
				<p>{mount.name} <span>[{mount.id}]</span></p>
				<p>Description: {mount.description}</p>
				{mount?.faction && <p>Fraction: {mount?.faction.name}</p>}

				<p>Source: {mount.source.name}</p>
			</div>

			<img src={mount.imageHref} />
		</div>
	)
}
