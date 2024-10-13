import axios, { AxiosError } from "axios";
import { notFound } from "next/navigation";

export const $axios = axios.create()
$axios.interceptors.response.use(response => {
	return response
}, (error: AxiosError) => {
	if(error.status === 404) {
		notFound()
	}
	
	throw error
})
