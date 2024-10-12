import { getUser } from "@/shared/utils/getUser"
import axios from "axios"
import { MediaPayload } from "./getMedia"

export interface Mount {
	id: number
	name: string
	creature_displays: MediaPayload[]
	description: string
	"source": {
		"type": string,
		"name": string
	},
	"faction"?: {
		"type": string,
		"name": string
	},
	"requirements": {
		"faction": {
			"type": string,
			"name": string
		}
	}
}

export const getMount = async (id: string) => {
	const {
		credentials: { accessToken }
	} = getUser()

	const { location: { localeBN, region, regionHosting } } = getUser()

	const response = await axios.get<Mount>(`${regionHosting}/data/wow/mount/${id}`, {
		params: {
			namespace: `static-${region}`,
			locale: localeBN,
			access_token: accessToken
		}
	})

	const mount = await response.data
	return mount
}
