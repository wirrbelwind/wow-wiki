import axios from "axios";

export const $axios = axios.create()
$axios.interceptors.response.use(response => {
	console.log('---------------',response.status)

	return response
})
