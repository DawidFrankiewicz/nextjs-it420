import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";

export default function Home() {
	return (
		<>
			<Hero />
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
