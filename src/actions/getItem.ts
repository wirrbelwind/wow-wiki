'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getItem(id: number) {
	const accessToken = cookies().get('accessToken')?.value

	const itemResponse = await fetch(`https://eu.api.blizzard.com/data/wow/item/${id}?namespace=static-eu&locale=en_US&access_token=${accessToken}`)

	const item = await itemResponse.json()
	return item
}

