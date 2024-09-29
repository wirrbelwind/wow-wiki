'use server'

import { ACCESS_TOKEN_COOKIES_KEY } from "@/constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getItem(id: number) {
	const accessToken = cookies().get(ACCESS_TOKEN_COOKIES_KEY)?.value

	const itemResponse = await fetch(`https://eu.api.blizzard.com/data/wow/item/${id}?namespace=static-eu&locale=ru_RU&access_token=${accessToken}`)

	const item = await itemResponse.json()
	return item
}
