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
		// Timeout is needed to prevent using wrong width and offset values on locale change
		setTimeout(() => {
			resetDecorationStyles();
		}, 10);
	}, [router.locale]);

	useEffect(() => {
		window.addEventListener("resize", resetDecorationStyles);
		// fixes bug where decoration lane is moving on page load
		setTimeout(() => {
			setLoaded(true);
		}, 40);
		return () => {
			// Cleanup
			window.removeEventListener("resize", resetDecorationStyles);
		};
	}, []);

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

	// Reset decoration lane styles to default
	const resetDecorationStyles = () => {
		setWidth(activeElement.current.clientWidth);
		setOffset(activeElement.current.offsetLeft);
	};

	return (
		<header className="relative bg-black dark:bg-neutral-800 p-2 left-0 w-full top-0 shadow-md transition-colors">
			<div className="2xl:container flex justify-between items-center">
				<div className="flex gap-6">
					<Link
						href="/"
						className="no-underline text-white dark:text-white hover:text-white hover:dark:text-white font-semibold text-4xl bg-neutral-800 dark:bg-black rounded-lg w-12 h-12 inline-flex justify-center items-center select-none"
					>
						it
					</Link>
					<Settings />
				</div>
				<nav className="relative text-2xl w-fit">
					<ul
						className="flex gap-6"
						onMouseLeave={resetDecorationStyles}
						onBlur={resetDecorationStyles}
					>
						{routes.map((route) => (
							<li
								key={route.path}
								className="flex"
								onMouseOver={setDecorationStyles}
								onFocus={setDecorationStyles}
								{...(router.pathname == route.path && { ref: activeElement })}
							>
								<Link
									className={`font-bold transition-colors py-2 hover:text-white dark:hover:text-white no-underline ${
										router.pathname == route.path
											? "text-white dark:text-white"
											: "text-neutral-300 dark:text-neutral-300"
									}`}
									href={route.path}
								>
									{t(route.name)}
								</Link>
							</li>
						))}
					</ul>
					{/* Decorative bar */}
					<span
						className={`absolute bottom-1 left-0 border-b-2 border-b-white ${
							loaded ? "transition-all" : null
						}`}
						style={decorationStyle}
					></span>
				</nav>
			</div>
		</header>
	);
}
