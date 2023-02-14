import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Settings from "./Settings";

export default function Header({ routes }) {
	// Translation and router
	const { t } = useTranslation();
	const router = useRouter();

	// Ref for active menu element
	const activeElement = useRef();
	// Values for styles
	const [offset, setOffset] = useState(null);
	const [width, setWidth] = useState(null);
	const [loaded, setLoaded] = useState(false);

	// Set decoration lane width and offset on page load and on locale change
	useEffect(() => {
		window.addEventListener("resize", resetDecorationStyles);
		// Timeout is needed to prevent using wrong width and offset values on locale change
		setTimeout(() => {
			resetDecorationStyles();
		}, 1);
		// fixes bug where decoration lane is moving on page load
		setTimeout(() => {
			setLoaded(true);
		}, 2);
		return () => {
			// Cleanup
			window.removeEventListener("resize", resetDecorationStyles);
		};
	}, [router.locale]);

	// Computed styles for decoration
	const decorationStyle = {
		transform: `translateX(${offset}px)`,
		width: `${width}px`,
	};

	// Set decoration styles on mouse over element
	const setDecorationStyles = (e) => {
		setWidth(e.target.clientWidth);
		setOffset(e.target.offsetLeft);
	};

	// Reset decoration lane styles
	const resetDecorationStyles = () => {
		setWidth(activeElement.current.clientWidth);
		setOffset(activeElement.current.offsetLeft);
	};

	return (
		<header className="relative bg-black dark:bg-neutral-800 p-2 left-0 w-full top-0 shadow-md">
			<div className="container mx-auto flex justify-between items-center">
				<div>
					<Link
						href="/"
						className="no-underline text-white dark:text-white hover:text-white hover:dark:text-white font-semibold text-4xl bg-neutral-800 dark:bg-black rounded-lg w-12 h-12 inline-flex justify-center items-center select-none"
					>
						it
					</Link>
					<Settings />
				</div>
				<div
					className="relative text-2xl flex gap-6 w-fit"
					onMouseLeave={resetDecorationStyles}
					onBlur={resetDecorationStyles}
				>
					{/* Menu items loop */}
					{routes.map((route) => (
						<Link
							onMouseOver={setDecorationStyles}
							onFocus={setDecorationStyles}
							className={`font-bold transition-colors py-2 hover:text-white dark:hover:text-white no-underline ${
								router.asPath == route.path
									? "text-white dark:text-white"
									: "text-neutral-300 dark:text-neutral-300"
							}`}
							href={route.path}
							key={route.path}
							{...(router.asPath == route.path && { ref: activeElement })}
						>
							{t(route.name)}
						</Link>
					))}
					{/* Decorative bar */}
					<span
						className={`absolute bottom-1 left-0 w-10 border-b-2 border-b-white ${
							loaded ? "transition-all" : null
						}`}
						style={decorationStyle}
					></span>
				</div>
			</div>
		</header>
	);
}
