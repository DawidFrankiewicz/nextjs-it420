import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export default function DarkModeToggle() {
	const router = useRouter();
	const { locale, locales, asPath } = router;

	const menu = useRef();

	const [open, setOpen] = useState(false);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			// Cleanup
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const toggleLanguagesMenu = () => {
		setOpen(!open);
	};

	const handleClickOutside = (e) => {
		if (menu.current && !menu.current.contains(e.target)) {
			setOpen(false);
		}
	};

	return (
		<div className="relative h-full" ref={menu}>
			<button
				className={`text-white h-full px-1 w-[5ch] uppercase text-center no-underline
                hover:bg-neutral-800
                dark:hover:bg-black
                ${open ? "bg-neutral-500 dark:bg-black" : null}}`}
				onClick={toggleLanguagesMenu}
			>
				{locale}{" "}
				<ArrowDownIcon
					className={`inline w-4 h-4 transition-transform ${
						open ? "rotate-180" : null
					}`}
				/>
			</button>
			<div
				className={`absolute top-full z-10 ${
					open ? "flex flex-col" : "hidden"
				}`}
			>
				{locales.map((localeSingle) => {
					if (locale == localeSingle) return;
					return (
						<Link
							key={localeSingle}
							href={asPath}
							locale={localeSingle}
							className="text-white bg-neutral-500 h-10 flex items-center justify-center px-1 w-[5ch] uppercase text-center no-underline
                            hover:bg-neutral-800 hover:text-white
                            dark:text-white
                            dark:hover:bg-black dark:hover:text-white"
						>
							{localeSingle}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
