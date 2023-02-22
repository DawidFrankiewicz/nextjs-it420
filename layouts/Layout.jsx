import { useState, useEffect } from "react";
import Header from "../components/header/Header";
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

	// Header page offset for sticky header
	const [headerPageOffset, setHeaderPageOffset] = useState(64);
	useEffect(() => {
		getHeaderPageOffset();
		window.addEventListener("resize", getHeaderPageOffset);
		return () => {
			window.removeEventListener("resize", getHeaderPageOffset);
		};
	}, []);

	const getHeaderPageOffset = () => {
		const header = document.querySelector("header");
		const headerHeight = header.offsetHeight;
		setHeaderPageOffset(headerHeight);
	};

	return (
		<>
			<Script
				// This is the script that loads the color mode on page load early enough to prevent a flash of light mode
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
			<div className="app" style={{ paddingTop: headerPageOffset + "px" }}>
				<Header routes={headerRoutes} />
				<main>{children}</main>
			</div>
		</>
	);
}
