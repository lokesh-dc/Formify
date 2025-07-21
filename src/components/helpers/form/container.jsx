import { InputFieldType } from "@/constants/forms";
import InputField from "./fields/input";
export default function FieldsContainer({
	config,
	formErrors = {},
	formData = {},
	formDataSetter = () => {},
}) {
	function handleFieldChange(event) {
		const { name, value } = event.target;
		formDataSetter((prevData) => ({
			...prevData,
			[name]: value,
		}));
		formErrorSetter((prevErrors) => ({
			...prevErrors,
			[name]: "",
		}));
	}

	return (
		<div className="flex flex-col gap-4">
			{config?.map((fieldConfig, index) => {
				const { fieldType, id } = fieldConfig;
				let formFieldConfig = {
					...fieldConfig,
					changeHandler: handleFieldChange,
					value: formData[id] || "",
				};
				switch (fieldType) {
					case InputFieldType:
						return <InputField key={id} {...formFieldConfig} />;
				}
			})}
		</div>
	);
}
