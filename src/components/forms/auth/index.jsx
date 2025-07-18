"use client";
import { useState } from "react";
import { getFormConfig, LoginFormConfigType } from "@/constants/forms/users";
import PrimaryButton from "@/components/buttons/primaryButton";
import FieldsContainer from "@/components/helpers/form/container";
export default function AuthForm() {
	const [currentForm, setCurrentForm] = useState(LoginFormConfigType);
	const [currentFormConfig, setCurrentFormConfig] = useState(
		getFormConfig(currentForm || LoginFormConfigType)
	);
	const [formState, setFormState] = useState({});
	const [formErrors, setFormErrors] = useState({});
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();
		// setLoading(true);
		setError("");
		// const endpoint = isLogin ? "/api/login" : "/api/signup";
		const body = { email, password };

		try {
			const res = await fetch(endpoint, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			const data = await res.json();
			if (!res.ok) {
				throw new Error(data.message || "Something went wrong");
			}
			// alert(isLogin ? "Logged in!" : "Signed up! You can login now.");
			// if (!isLogin) setIsLogin(true);
		} catch (err) {
			setFormErrors(err.message);
		} finally {
			// setLoading(false);
		}
	}

	return (
		<div className="bg-primary flex flex-col gap-4 text-white p-6 rounded shadow-md max-w-sm w-full">
			<h2 className="text-3xl">{currentFormConfig?.title}</h2>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<FieldsContainer config={currentFormConfig?.fields} />
				<PrimaryButton
					title={
						loading
							? currentFormConfig?.submitLoadingTitle
							: currentFormConfig?.submitTitle
					}
					type="submit"
					disabled={loading}
				/>
			</form>
		</div>
	);
}
