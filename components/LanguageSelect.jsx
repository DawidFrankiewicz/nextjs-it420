import { useRouter } from "next/router";

export default function DarkModeToggle() {
	const { locale, locales, push } = useRouter();

	function changeLang() {
		locale === "en" ? setLanguage("pl") : setLanguage("en");
		if (locale === "en") {
			setLanguage("pl");
		} else if (locale === "pl") {
			setLanguage("nl");
		} else if (locale === "nl") setLanguage("en");
	}

	const setLanguage = (language) => {
		push("/", undefined, { locale: language });
	};

	return (
		<button
			onClick={changeLang}
			className="bg-red-500 text-white py-1 rounded hover:bg-red-600 w-[4ch] uppercase"
		>
			{locale}
		</button>
	);
}
