import axios from "axios"
import { getUser } from "./getUser"

export interface MediaPayload {
	key: {
		href: string
	}
	id: number
}

export interface Media {
	assets: Asset[]
}
export interface Asset {
	key: string
	value: string
	id: number
}

export const getMedia = async (requestData: MediaPayload): Promise<Asset[]> => {
	const {
		credentials: { accessToken }
	} = getUser()

	const response = await axios.get<Media>(requestData.key.href, {
		params: {
			access_token: accessToken
		}
	})

	const media = await response.data
	return media.assets
}
