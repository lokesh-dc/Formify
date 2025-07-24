import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PrivateRouteHandler({ isAuthPage = false }) {
	const cookieStore = cookies();
	const token = (await cookieStore).get("auth_token");

	if (!token && !isAuthPage) redirect("/auth");

	if (token && isAuthPage) redirect("/forms");
	return null;
}
