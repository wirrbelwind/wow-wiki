import { getUser } from "@/shared/utils/getUser"
import axios from "axios"
import { MediaResponse, MountResponse } from "../types"
import { ENTITY_TAGS } from "../constants"
import { $axios } from "./api"

export const getMount = async (id: string) => {
	const {
		credentials: { accessToken }
	} = getUser()

	const { location: { localeBN, region, regionHosting } } = getUser()

	const mountResponse = await $axios.get<MountResponse>(`${regionHosting}/data/wow/${ENTITY_TAGS.MOUNT}/${id}`, {
		params: {
			namespace: `static-${region}`,
			locale: localeBN,
			access_token: accessToken
		}
	})

	/**
	 * Media of mount have no predicted URL. 
	 * Actual URL of media should be retrieved from MountResponse and then requested.
	 */
	const mountMediaHref = mountResponse.data.creature_displays[0].key.href
	const mediaResponse = await $axios.get<MediaResponse>(mountMediaHref, {
		params: {
			access_token: accessToken
		}
	})

	return {
		...mountResponse.data,
		// Mount API returns only 1 image
		imageHref: mediaResponse.data.assets[0].value
	}
}
