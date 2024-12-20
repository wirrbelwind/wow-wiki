import { getUser } from "./getUser"
import { MediaResponse } from "../types"
import { $axios } from "./api"

export const getMedia = async (entityTag: string, id: number) => {
	const { location: { localeBN, region, regionHosting } } = getUser()

	const mediaResponse = await $axios.get<MediaResponse>(`${regionHosting}/data/wow/media/${entityTag}/${id}`, {
		params: {
			namespace: `static-${region}`,
			locale: localeBN
		}
	})
	console.log(mediaResponse)
	return mediaResponse.data.assets
}
