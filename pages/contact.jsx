import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
	return (
		<>
			<h1 className="2xl:container my-4 text-6xl font-bold">Contact page</h1>
		</>
	);
}

export async function getServerSideProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common"])),
			// Will be passed to the page component as props
		},
	};
}
