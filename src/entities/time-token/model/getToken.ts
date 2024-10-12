'use server'

import { TokenTime } from "../types"
import axios from "axios"
import { getUser } from "@/entities/user/model/getUser"

export const getTimeToken = async (): Promise<TokenTime> => {
	const { location: { localeBN, region, regionHosting } } = getUser()
	const {
		credentials: { accessToken }
	} = getUser()

	const response = await axios.get<TokenTime>(`${regionHosting}/data/wow/token/index`, {
		params: {
			namespace: `dynamic-${region}`,
			locale: localeBN,
			access_token: accessToken
		}
	})

	const token = response.data
	return token
}
