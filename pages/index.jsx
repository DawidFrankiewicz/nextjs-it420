import Settings from "../components/Settings";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home() {
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
                            
                                console.log(isDarkMode);
                                html.dataset.mode = isDarkMode ? "dark" : "light";
                            }
                            loadColorMode();                        
                        `,
					}}
				/>
			</Head>
			<div className="app">
				<Settings />
				<Hero />
			</div>
		</>
	);
}
