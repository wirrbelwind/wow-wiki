import axios from "axios"
import { getUser } from "./getUser"

interface MediaRequestData {
	key: {
		href: string
	}
	id: number
}

export const getMedia = async (requestData: MediaRequestData): Promise<object> => {
	const {
		credentials: { accessToken }
	} = getUser()

	const response = await axios.get(requestData.key.href, {
		params: {
			access_token: accessToken
		}
	})

	const media = await response.data
	return media
}
