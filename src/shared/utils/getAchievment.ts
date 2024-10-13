import { getUser } from "./getUser"
import { AchievementResponse } from "../types"
import { getMedia } from "./getMedia"
import { ENTITY_TAGS } from "../constants"
import { $axios } from "./api"

export const getAchievement = async (id: string) => {
	const {
		credentials: { accessToken }
	} = getUser()

	const { location: { localeBN, region, regionHosting } } = getUser()

	const achievementRequest = $axios.get<AchievementResponse>(`${regionHosting}/data/wow/achievement/${id}`, {
		params: {
			namespace: `static-${region}`,
			locale: localeBN,
			access_token: accessToken
		}
	})

	const mediaRequest = getMedia(ENTITY_TAGS.ACHIEVEMENT, parseInt(id))

	const [achievementResponse, mediaResponse] = await Promise.all([achievementRequest, mediaRequest])

	return {
		...achievementResponse,
		// Achievement API returns only 1 image
		imageHref: mediaResponse[0].value
	}
}
