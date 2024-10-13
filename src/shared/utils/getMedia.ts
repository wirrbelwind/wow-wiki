import axios from "axios"
import { getUser } from "./getUser"
import { MediaResponse } from "../types"

export const getMedia = async (entityTag: string, id: number) => {
	const {
		credentials: { accessToken }
	} = getUser()

	const { location: { localeBN, region, regionHosting } } = getUser()

	const mediaResponse = await axios.get<MediaResponse>(`${regionHosting}/data/wow/${entityTag}/${id}`, {
		params: {
			namespace: `static-${region}`,
			locale: localeBN,
			access_token: accessToken
		}
	})

	return mediaResponse.data.assets
}
