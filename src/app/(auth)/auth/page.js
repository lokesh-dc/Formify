import AuthForm from "@/components/forms/auth";
import Link from "next/link";

export default function AuthPage() {
	return (
		<div className="p-8 h-[100vh] flex items-center">
			<div className="w-1/2 h-full">
				<Link href={"/"}>Formify</Link>
				<div className="h-full flex items-center justify-center">
					<AuthForm />
				</div>
			</div>
			<div className="circle-green-gradient w-1/2 rounded-xl  flex justify-center items-center h-full shadow-2xl">
				<p className="w-80 text-2xl">
					"Formify allows you to quickly create a form and help share it to your
					audience"
				</p>
			</div>
		</div>
	);
}
