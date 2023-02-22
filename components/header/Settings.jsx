import DarkModeToggle from "./DarkModeToggle";
import LanguageSelect from "./LanguageSelect";

export default function Settings() {
	return (
		<div className="flex items-center gap-2 w-fit">
			<DarkModeToggle />
			<LanguageSelect />
		</div>
	);
}
