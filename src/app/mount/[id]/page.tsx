import { getMedia } from "@/shared/utils/getMedia"
import { getMount } from "@/shared/utils/getMount"

export default async function MountPage({ params: { id } }: { params: { id: string } }) {
	const mount = await getMount(id)
	const media = await getMedia(mount.creature_displays[0])

	return (
		<div>
			<div>
				<p>{mount.name} <span>[{mount.id}]</span></p>
				<p>Description: {mount.description}</p>
				{mount?.faction && <p>Fraction: {mount?.faction.name}</p>}
				
				<p>Source: {mount.source.name}</p>
			</div>

			{
				media.map(img => <img src={img.value} key={img.id} />)
			}
		</div>
	)
}
