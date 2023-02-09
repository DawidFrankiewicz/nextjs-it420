import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

export default function DarkModeToggle() {
	const { t } = useTranslation();
	const [mode, setMode] = useState("");

	function changeMode() {
		const currentMode = document.documentElement.dataset.mode;
		currentMode === "dark" ? setLightMode() : setDarkMode();
	}

	const setDarkMode = () => {
		document.documentElement.dataset.mode = "dark";
		localStorage.theme = "dark";
		setMode("dark");
	};

	const setLightMode = () => {
		document.documentElement.dataset.mode = "light";
		localStorage.theme = "light";
		setMode("light");
	};

	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setMode("dark");
		} else {
			setMode("light");
		}
	}, []);
	return (
		<button
			onClick={changeMode}
			className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 capitalize text-center"
		>
			{t(mode)}
		</button>
	);
}
