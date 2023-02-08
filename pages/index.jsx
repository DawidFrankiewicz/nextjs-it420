import { useState } from "react";
import Head from "next/head";
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
			<Head>
				<script
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
			</Head>
			<div className="app">
				<Header routes={headerRoutes} />
				<Settings />
				<Hero />
			</div>
		</>
	);
}
