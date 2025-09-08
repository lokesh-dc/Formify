export default function BuilderPageLayout() {
	return (
		<div className="bg-white border grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] h-lvh p-[20px] gap-5">
			<div className="rounded-md 
			flex flex-col justify-between gap-3 min-w-full h-full">
				<div className="rounded-md text-center bg-secondary-dark p-2">
					+ Start Pages
				</div>
				<div className="rounded-md text-center bg-secondary-dark p-2">
					+ Ending Pages
				</div>
			</div>
			<div className="border border-secondary-dark p-3 bg-white min-w-full h-full">
				123
			</div>
			<div className="p-3 bg-secondary min-w-full h-full">123</div>
		</div>
	);
}
