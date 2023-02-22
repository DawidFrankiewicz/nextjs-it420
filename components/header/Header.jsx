import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Settings from "./Settings";
import Nav from "./Nav";

export default function Header({ routes }) {
	return (
		<header className="fixed z-50 bg-black dark:bg-neutral-800 p-2 left-0 w-full top-0 shadow-md transition-colors">
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
				<Nav routes={routes} />
			</div>
		</header>
	);
}
