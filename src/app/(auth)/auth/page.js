import AuthForm from "@/components/forms/auth";
import Link from "next/link";

export default function AuthPage() {
	return (
		<div className="bg-black p-8 h-[100vh] flex items-center">
			<div className="w-1/2 h-full">
				<Link href={"/"}>Formify</Link>
				<div className="h-full flex items-center justify-center">
					<AuthForm />
				</div>
			</div>
			<div
				style={{
					background: "#4F564D",
					background:
						"radial-gradient(circle,rgba(79, 86, 77, 1) 0%, rgba(184, 186, 180, 1) 100%)",
				}}
				className="w-1/2 rounded-xl  flex justify-center items-center h-full shadow-2xl"
			>
				<p className="w-80 text-2xl">
					"Formify allows you to quickly create a form and help share it to your
					audience"
				</p>
			</div>
		</div>
	);
}
