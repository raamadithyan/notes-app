import { unstable_noStore } from "next/cache";

export async function GET(request: Request) {
	unstable_noStore();
	const data = await fetch("https://dummyjson.com/users", {
		next: { revalidate: 60 },
	});
	const jsony = await data.json();

	return Response.json(jsony);
}
