import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { getUser } from "./getUser";

export const $axios = axios.create()
$axios.interceptors.response.use(response => {
	return response
}, (error: AxiosError) => {
	if (error.status === 404) {
		notFound()
	}

	throw error
})

$axios.interceptors.request.use(request => {
	const { 
		credentials: { accessToken }
	 } = getUser()
	 
	request.headers.Authorization = `Bearer ${accessToken}`

	return request
})
