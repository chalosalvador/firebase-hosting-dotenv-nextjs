export default function Page() {
  return (
		<div>
			<h1>{process.env.FOO_ENV}</h1>
			<h1>{process.env.FOO_PROD}</h1>
			<h1>{process.env.FOO_STAGING}</h1>
			<h1>{process.env.OVERWRITE_ME}</h1>
		</div>
	);
}
