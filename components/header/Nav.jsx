import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
// import menu icon
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";

export default function Nav({ routes }) {
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

	// For mobile menu
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const closeMobileMenu = (e) => {
		// Prevents the menu from closing when clicking on a language item with dataset attribute
		console.log(e.relatedTarget);
		if (e.relatedTarget?.dataset?.noBlurMobileNavItem) return;
		setMobileMenuOpen(false);
	};

	return (
		<div
			onBlur={closeMobileMenu}
			className="flex"
			tabIndex={-1}
			data-no-blur-mobile-nav-item
		>
			<button
				className="relative z-50 w-12 h-12 md:hidden"
				onClick={toggleMobileMenu}
				onBlur={closeMobileMenu}
				data-no-blur-mobile-nav-item
			>
				<Bars3BottomRightIcon className="text-white" />
			</button>
			<nav
				className={`fixed z-40 pt-24 pb-12 text-2xl bg-neutral-500 backdrop-filter backdrop-blur-sm bg-opacity-70 w-full right-0 top-0 h-full transition-transform duration-500 xs:w-96 md:relative md:w-fit md:py-0 md:bg-transparent ${
					mobileMenuOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"
				}`}
			>
				<ul
					className="flex flex-col md:flex-row gap-6"
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
								onClick={closeMobileMenu}
								data-no-blur-mobile-nav-item
								className={`font-bold max-md:text-3xl w-full text-center transition-colors py-2 hover:text-white dark:hover:text-white no-underline ${
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
					className={`hidden md:block absolute bottom-1 left-0 border-b-2 border-b-white ${
						loaded ? "transition-all" : null
					}`}
					style={decorationStyle}
				></span>
			</nav>
		</div>
	);
}
