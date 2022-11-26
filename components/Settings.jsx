import DarkModeToggle from "./DarkModeToggle";

export default function Settings() {
	return (
		<div className="fixed flex items-center gap-2 bg-yellow-300 p-2 w-fit right-2 top-2 rounded shadow-md">
			<div className="relative w-7 h-7 text-3xl text-red-500">
				<span className="absolute -top-[6px]">🛠</span>
			</div>
			<DarkModeToggle />
		</div>
	);
}
