import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import Script from "next/script";
import Settings from "../components/Settings";
import Hero from "../components/Hero";
import Header from "../components/Header";

export default function Home() {
	const [headerRoutes, setHeaderRoutes] = useState([
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Blog",
			path: "/blog",
		},
		{
			name: "Kontakt",
			path: "/kontakt",
		},
	]);

	return (
		<>
			<Script
				dangerouslySetInnerHTML={{
					__html: `
                    function loadColorMode() {
                        const html = document.documentElement;
                        const isDarkMode =
                        localStorage.theme === "dark" ||
                        (!("theme" in localStorage) &&
                        window.matchMedia("(prefers-color-scheme: dark)").matches)
                        ? true
                        : false;
                        
                        html.dataset.mode = isDarkMode ? "dark" : "light";
                    }
                    loadColorMode();                        
                    `,
				}}
			/>

			<div className="app">
				<Header routes={headerRoutes} />
				<Settings />
				<Hero />
			</div>
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
