import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function DarkModeToggle() {
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
			className="text-white w-12 h-full rounded-lg flex items-center justify-center transition-colors
            hover:bg-neutral-800
            dark:hover:bg-black"
		>
			{mode === "dark" ? (
				<SunIcon className="w-6 h-6" />
			) : (
				<MoonIcon className="w-6 h-6" />
			)}
		</button>
	);
}
