import Link from "next/link";

export default function PrimaryButton({
	clickEvent,
	isLink = false,
	title = "",
	linkTarget = "",
	type = "button",
}) {
	const Tag = isLink ? Link : "button";
	const props = isLink ? { href: linkTarget } : { onClick: clickEvent, type };

	return (
		<Tag
			className="bg-[#21261f] py-2 px-7 rounded-lg text-white primary-button"
			{...props}
		>
			{title}
		</Tag>
	);
}
