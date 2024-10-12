import axios from "axios"
import { getUser } from "./getUser"

export interface AchievementResponse {
	"_links": {
		"self": {
			"href": string
		}
	},
	"id": number,
	"category": {
		"key": {
			"href": string
		},
		"name": string,
		"id": number
	},
	"name": string,
	"description": string,
	"points": number,
	"is_account_wide": boolean,
	"criteria": {
		"id": number,
		"description": string,
		"amount": number
	},
	"next_achievement": {
		"key": {
			"href": string
		},
		"name": string,
		"id": number
	},
	"media": {
		"key": {
			"href": string
		},
		"id": number
	},
	"display_order": number
}

export interface Achievement {
	data: AchievementResponse
	media: object
}

export const getAchievement = async (id: number): Promise<Achievement> => {
	const {
		credentials: { accessToken }
	} = getUser()

	const { location: { localeBN, region, regionHosting } } = getUser()

	const achievementResponse = await axios.get<AchievementResponse>(`${regionHosting}/data/wow/achievement/${id}`, {
		params: {
			namespace: `static-${region}`,
			locale: localeBN,
			access_token: accessToken
		}
	})

	const mediaResponse = await axios.get<object>(`${regionHosting}/data/wow/media/achievement/${id}`, {
		params: {
			namespace: `static-${region}`,
			locale: localeBN,
			access_token: accessToken
		}
	})

	return {
		data: achievementResponse.data,
		media: mediaResponse.data,
	}
}