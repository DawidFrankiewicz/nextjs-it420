import Header from "../components/Header";
import Script from "next/script";

export default function Layout({ children }) {
	const headerRoutes = [
		{
			name: "about us",
			path: "/",
		},
		// {
		// 	name: "Blog",
		// 	path: "/blog",
		// },
		{
			name: "contact",
			path: "/contact",
		},
	];

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
				<main>{children}</main>
			</div>
		</>
	);
}
