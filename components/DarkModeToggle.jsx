import { useEffect } from "react";

export default function DarkModeToggle() {
	function changeMode() {
		const currentMode = document.documentElement.dataset.mode;
		currentMode === "dark" ? setLightMode() : setDarkMode();
	}

	const setDarkMode = () => {
		document.documentElement.dataset.mode = "dark";
		localStorage.theme = "dark";
	};

	const setLightMode = () => {
		document.documentElement.dataset.mode = "light";
		localStorage.theme = "light";
	};

	useEffect(() => {
		// On page load or when changing themes, best to add inline in `head` to avoid FOUC
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			setDarkMode();
		} else {
			setLightMode();
		}
	}, []);
	return (
		<button
			onClick={changeMode}
			className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
		>
			Mode
		</button>
	);
}
