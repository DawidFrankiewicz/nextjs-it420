import { useState, useRef, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Hero() {
	const { t } = useTranslation();

	const mainElement = useRef();
	const [offsetTop, setOffsetTop] = useState(0);
	const setOffsetTopFunc = () => setOffsetTop(mainElement.current.offsetTop);

	const mainElementStyle = {
		minHeight: `calc(100vh - ${offsetTop}px)`,
	};

	useEffect(() => {
		window.addEventListener("resize", setOffsetTopFunc);
		setOffsetTopFunc();
		return () => {
			// Cleanup
			window.removeEventListener("resize", setOffsetTopFunc);
		};
	}, []);

	return (
		<div
			ref={mainElement}
			className="relative flex items-center px-5 py-12"
			style={{ ...mainElementStyle }}
		>
			<img
				className="select-none absolute right-0 top-0 -z-20 w-[1100px] h-full object-cover"
				src="/images/web-1.jpg"
				alt=""
			/>
			<span className="absolute -z-10 right-0 top-0 w-[1100px] h-full bg-gradient-to-r from-white dark:from-black to-transparent"></span>
			<span className="absolute -z-10 right-0 top-0 w-[1100px] h-full bg-gradient-to-tr from-white dark:from-black to-transparent"></span>
			<div className="container z-10 mx-auto">
				<h1 className="text-5xl font-bold mb-3">
					Profesionalne strony internetowe
				</h1>
				<h2 className="text-xl font-bold">
					Oferujemy <strong>darmowe porady</strong> w celu dostosowania strony
					do potrzeb indywidalnego klienta
				</h2>
				<Link className="button my-4 text-xl" href="#">
					Kontakt
				</Link>
			</div>
		</div>
	);
}
