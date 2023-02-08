import { useEffect, useState } from "react";

export default function DarkModeToggle() {
	const [language, setLanguage] = useState("");

	function changeMode() {
		const currentLanguage = document.documentElement.dataset.language;
		currentLanguage === "pl" ? setEn() : setPl();
	}

	const setEn = () => {
		document.documentElement.dataset.language = "en";
		localStorage.language = "en";
		setLanguage("en");
	};

	const setPl = () => {
		document.documentElement.dataset.language = "pl";
		localStorage.language = "pl";
		setLanguage("pl");
	};

	useEffect(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage.language === "pl" ||
			(!("language" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setPl();
		} else {
			setEn();
		}
	}, []);
	return (
		<button
			onClick={changeMode}
			className="bg-red-500 text-white py-1 rounded hover:bg-red-600 w-[4ch] uppercase"
		>
			{language}
		</button>
	);
}
