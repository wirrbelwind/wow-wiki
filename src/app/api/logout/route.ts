import { ACCESS_TOKEN_COOKIES_KEY } from "@/features/auth/config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
	const cookie = cookies()
	cookie.delete(ACCESS_TOKEN_COOKIES_KEY)
	redirect('/login')
}