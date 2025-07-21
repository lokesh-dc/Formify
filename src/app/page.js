import PrimaryButton from "@/components/buttons/primaryButton";
export default function Home() {
	return (
		<div className="h-[100vh] p-2">
			<div className="flex md:h-full">
				<div className="hidden md:flex w-1/2 bg-primary rounded-xl"></div>
				<div className="p-3 w-full md:w-1/2 flex flex-col items-start justify-center gap-2">
					<h1 className="text-3xl primary-text">
						Build Forms. Fast. Flexible.
						<span className="text-black"> Formify.</span>
					</h1>
					<h3 className="text-2xl ">
						Drag. Drop. Deploy. Your Perfect Form Awaits.
					</h3>

					<PrimaryButton linkTarget="/auth" title="Get Started" isLink={true} />
				</div>
			</div>
		</div>
	);
}
