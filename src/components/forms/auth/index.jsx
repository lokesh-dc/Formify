"use client";
import { useState } from "react";
import { getFormConfig, LoginFormConfigType } from "@/constants/forms/users";
import PrimaryButton from "@/components/buttons/primaryButton";
import FieldsContainer from "@/components/helpers/form/container";
import { SwitchFormActionType } from "@/constants/forms";
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
		setLoading(true);
		setError("");
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
		} catch (err) {
			setFormErrors(err.message);
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="flex flex-col gap-4 p-6 max-w-sm w-full">
			<h2 className="text-3xl">{currentFormConfig?.title}</h2>
			<form className="flex flex-col gap-4" onSubmit={handleSubmit}>
				<FieldsContainer
					formErrors={formErrors}
					formData={formState}
					formDataSetter={setFormState}
					formErrorSetter={setFormErrors}
					config={currentFormConfig?.fields}
				/>
				<PrimaryButton
					title={
						loading
							? currentFormConfig?.submitLoadingTitle
							: currentFormConfig?.submitTitle
					}
					type="submit"
					disabled={loading}
				/>
				{currentFormConfig?.formHelpers ? (
					<div className="flex gap-1 text-sm">
						<span className="text-gray-900">
							{currentFormConfig?.formHelpers?.title}
						</span>
						<span
							className="cursor-pointer font-[600]"
							onClick={() => {
								if (
									currentFormConfig?.formHelpers?.action?.type ===
									SwitchFormActionType
								) {
									setCurrentForm(currentFormConfig?.formHelpers?.action?.to);
									setCurrentFormConfig(
										getFormConfig(currentFormConfig?.formHelpers?.action?.to)
									);
								}
							}}
						>
							{currentFormConfig?.formHelpers?.subtitle}
						</span>
					</div>
				) : null}
			</form>
		</div>
	);
}
