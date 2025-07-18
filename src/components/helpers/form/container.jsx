import { InputFieldType } from "@/constants/forms";
import InputField from "./fields/input";
export default function FieldsContainer({ config }) {
	return (
		<div className="flex flex-col gap-4">
			{config?.map((fieldConfig, index) => {
				const { fieldType, id } = fieldConfig;
				switch (fieldType) {
					case InputFieldType:
						return <InputField key={id} {...fieldConfig} />;
				}
			})}
		</div>
	);
}
