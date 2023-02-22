import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

export default function LanguageSelect() {
	const router = useRouter();
	const { locale, locales, asPath } = router;

	const [open, setOpen] = useState(false);

	const toggleLanguagesMenu = () => {
		setOpen(!open);
	};

	const closeLanguagesMenu = (e) => {
		// Prevents the menu from closing when clicking on a language item with dataset attribute
		if (e.relatedTarget?.dataset?.noBlurLanguageItem) return;
		setOpen(false);
	};

	return (
		<div className="relative h-full" onBlur={closeLanguagesMenu}>
			<button
				className={`text-white h-full px-1 w-[5ch] uppercase text-center no-underline rounded-lg
                hover:bg-neutral-800
                dark:hover:bg-black
                ${open ? "bg-neutral-500 dark:bg-black" : null}`}
				onClick={() => {
					toggleLanguagesMenu();
				}}
			>
				{locale}{" "}
				<ArrowDownIcon
					className={`inline w-4 h-4 transition-transform peer-focus-within:rotate-180 peer-focus:rotate-180
                    ${open ? "rotate-180" : null}`}
				/>
			</button>
			<nav className="group absolute top-full z-50 rounded-lg">
				<ul>
					{locales.map((localeSingle) => {
						if (locale == localeSingle) return;
						return (
							<li className="group/item" key={localeSingle}>
								<Link
									href={asPath}
									locale={localeSingle}
									data-no-blur-language-item
									onClick={closeLanguagesMenu}
									className={`text-white bg-neutral-500 h-10 items-center justify-center px-1 w-[5ch] uppercase text-center no-underline
                                    hover:bg-neutral-800 hover:text-white
                                    dark:text-white
                                    dark:hover:bg-black dark:hover:text-white
                                    group-first/item:rounded-t-lg group-last/item:rounded-b-lg
                                    ${open ? "flex" : "hidden"}`}
								>
									{localeSingle}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}
