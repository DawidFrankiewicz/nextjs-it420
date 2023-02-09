import { useTranslation } from "next-i18next";

export default function Hero() {
	const { t } = useTranslation();
	return (
		<div className="flex items-center px-5 py-12 min-h-screen">
			<div>
				<h1 className="text-6xl font-bold">IT420</h1>
				<h2 className="text-4xl font-bold">{t("modern websites")}</h2>
			</div>
			<div></div>
		</div>
	);
}
