import AuthForm from "@/components/forms/auth";

export default function AuthPage() {
	return (
		<div
			style={{
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<AuthForm />
		</div>
	);
}
