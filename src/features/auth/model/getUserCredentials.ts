import { cookies } from "next/headers";
import { ACCESS_TOKEN_COOKIES_KEY } from "../config";

export const getUserCredentials = () => {
	const cookiesManager = cookies() 

	return {
		accessToken: cookiesManager.get(ACCESS_TOKEN_COOKIES_KEY)?.value
	}
}
