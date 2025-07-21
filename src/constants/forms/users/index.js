import { InputFieldType, SwitchFormActionType } from "..";

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
			placeholder: "example@gmail.com",
			required: true,
			fieldType: InputFieldType,
			validations: (email) => {
				"/^[^s@]+@[^s@]+.[^s@]+$/".test(email);
			},
			errorMessage: "Please enter a valid email address",
		},
		{
			id: "password",
			type: "text",
			label: "Password",
			placeholder: "*********",
			required: true,
			fieldType: InputFieldType,
			isPassword: true,
			errorMessage: "Please enter a valid password",
		},
	],
	submitTitle: "Login",
	submitLoadingTitle: "Logging you in...",
	formHelpers: {
		title: "Don't have an account?",
		subtitle: "Signup now",
		action: {
			type: SwitchFormActionType,
			to: SignupFormConfigType,
		},
	},
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
	formHelpers: {
		title: "Already have an account?",
		subtitle: "Login now",
		action: {
			type: SwitchFormActionType,
			to: LoginFormConfigType,
		},
	},
};

export const getFormConfig = (type) => {
	const formtypes = {
		[LoginFormConfigType]: loginFormConfig,
		[SignupFormConfigType]: signupFormConfig,
	};
	return formtypes[type] || {};
};
