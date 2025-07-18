export default function InputField({
	type,
	placeholder,
	value,
	onChange,
	required,
}) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			required={required}
			onChange={onChange}
			className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
		/>
	);
}
