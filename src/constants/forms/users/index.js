import { InputFieldType } from "..";

export const LoginFormConfigType = "LoginFormConfig";
export const SignupFormConfigType = "SignupFormConfig";
export const loginFormConfig = {
	title: "Welcome Back",
	description: "Let's get you logged in",
	fields: [
		{
			id: "email",
			type: "email",
			label: "Email",
			placeholder: "Enter your email",
			required: true,
			fieldType: InputFieldType,
			validations: (email) => {
				"/^[^s@]+@[^s@]+.[^s@]+$/".test(email);
			},
		},
		{
			id: "password",
			type: "text",
			label: "Password",
			placeholder: "Enter your password",
			required: true,
			fieldType: InputFieldType,
			isPassword: true,
		},
	],
	submitTitle: "Login",
	submitLoadingTitle: "Logging you in...",
};

export const signupFormConfig = {
	title: "Welcome",
	description: "Let's get you signed up in no time",
	fields: [
		{
			id: "email",
			type: "email",
			label: "Email",
			placeholder: "Enter your email",
			required: true,
			fieldType: InputFieldType,
			validations: (email) => {
				"/^[^s@]+@[^s@]+.[^s@]+$/".test(email);
			},
		},
		{
			id: "password",
			type: "text",
			label: "Password",
			placeholder: "Enter your password",
			required: true,
			fieldType: InputFieldType,
			isPassword: true,
		},
		{
			id: "confirmPassword",
			type: "text",
			label: "Confirm Password",
			placeholder: "Confirm your password",
			required: true,
			fieldType: InputFieldType,
			isPassword: true,
		},
	],
	submitTitle: "Signup",
	submitLoadingTitle: "Signing you up...",
};

export const getFormConfig = (type) => {
	const formtypes = {
		[LoginFormConfigType]: loginFormConfig,
		[SignupFormConfigType]: signupFormConfig,
	};
	return formtypes[type] || {};
};
