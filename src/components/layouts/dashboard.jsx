import Link from "next/link";
import { useMemo } from "react";

export default function BuilderPageLayout() {
	const navigation = useMemo(() => [
		{
			title: "My Workspace",
			href: "/forms",
		},
		{
			title: ">",
		},
		{
			title: "My new Form",
			onclick: () => {},
		},
	]);

	const tabs = useMemo(() => [
		{
			title: "Pages",
		},
		{
			title: "Fields",
		},
	]);

	return (
		<div className="flex flex-col gap-3 p-[20px]">
			<div className="flex gap-2 bg-secondary p-2 rounded-md">
				{navigation.map(({ href, title }, idx) =>
					href ? (
						<Link key={idx} href={href}>
							{title}
						</Link>
					) : (
						<button key={idx} className="hover:underline cursor-pointer">
							{title}
						</button>
					)
				)}
			</div>
			<div className="bg-white grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] h-lvh gap-5">
				<div className="rounded-md flex flex-col gap-3 min-w-full h-full">
					<div className="border border-secondary-dark p-3 bg-white min-w-full h-full">
						<div className="flex justify-around bg-secondary p-2 rounded-md mb-3">
							{tabs?.map(({ title }, idx) => (
								<button
									key={idx}
									className="w-full bg-white px-3 py-1 rounded-md mr-2 hover:underline"
								>
									{title}
								</button>
							))}
						</div>
					</div>
				</div>
				<div className="border border-secondary-dark p-3 bg-white min-w-full h-full">
					123
				</div>
				<div className="p-3 bg-secondary min-w-full h-full">123</div>
			</div>
		</div>
	);
}
