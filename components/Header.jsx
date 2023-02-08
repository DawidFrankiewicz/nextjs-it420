import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ routes }) {
	const router = useRouter();
	return (
		<div className="fixed bg-blue-400 dark:bg-emerald-600 p-2 left-0 w-full top-0 shadow-md">
			<div className="container mx-auto text-2xl flex gap-6">
				{routes.map((route) => {
					return (
						<Link
							className={` font-bold transition-colors hover:text-yellow-100 dark:hover:text-slate-700 ${
								router.asPath == route.path
									? "text-yellow-300"
									: "text-white dark:text-slate-900"
							}`}
							href={route.path}
						>
							{route.name}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
