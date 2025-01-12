import { cookies } from "next/headers";

export default function Page({ searchParams }) {
	
	const cookieStore = cookies();
	console.log('searchParams', searchParams);
	console.log('cookieStore', cookieStore);
	
  return (
		<div>
			<h1>{process.env.FOO_ENV}</h1>
			<h1>{process.env.FOO_PROD}</h1>
			<h1>{process.env.FOO_STAGING}</h1>
			<h1>{process.env.OVERWRITE_ME}</h1>
			<h1>{process.env.WELCOME_MESSAGE}</h1>
		</div>
	);
}
