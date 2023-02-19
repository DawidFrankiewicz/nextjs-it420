import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
	const projects = [
		{
			name: "ledatel",
			title: "Ledatel",
			thumbnail: "/images/projects/ledatel/ledatel-hero.webp",
		},
		{
			name: "papierosiarze",
			title: "Papierosiarze",
			thumbnail: "/images/projects/papierosiarze/papierosiarze-hero.webp",
		},
		{
			name: "sweet-dreams",
			title: "Sweet Dreams",
			thumbnail: "/images/projects/sweet-dreams/sweet-dreams-hero.webp",
		},
		{
			name: "tomiwood",
			title: "Tomiwood",
			thumbnail: "/images/projects/tomiwood/tomiwood-hero.webp",
		},
		{
			name: "viamoda",
			title: "Viamoda",
			thumbnail: "/images/projects/viamoda/viamoda-hero.webp",
		},
	];
	return (
		<>
			<Hero />
			<Projects projects={projects} />
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
