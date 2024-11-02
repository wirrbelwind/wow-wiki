'use server'

import { TokenTime } from "../types"
import { getUser } from "@/shared/utils/getUser"
import { $axios } from "@/shared/utils/api"

export const getTimeToken = async (): Promise<TokenTime> => {
	const { location: { localeBN, region, regionHosting } } = getUser()

	const response = await $axios.get<TokenTime>(`${regionHosting}/data/wow/token/index`, {
		params: {
			namespace: `dynamic-${region}`,
			locale: localeBN,
		}
	})

	const token = response.data
	return token
}
