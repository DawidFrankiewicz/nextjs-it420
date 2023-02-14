import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../layouts/Layout";

export default function Home() {
	return (
		<Layout>
			<h1 className="container mx-auto my-4 text-6xl font-bold">
				Contact page
			</h1>
		</Layout>
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
