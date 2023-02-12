import { useRouter } from "next/router";
import Link from "next/link";

export default function DarkModeToggle() {
	const router = useRouter();
	const { locales, asPath } = router;

	return (
		<>
			{locales.map((locale) => (
				<Link
					key={locale}
					href={asPath}
					locale={locale}
					className="bg-red-500 text-white py-1 rounded hover:bg-red-600 w-[4ch] uppercase text-center no-underline"
				>
					{locale}
				</Link>
			))}
		</>
	);
}
