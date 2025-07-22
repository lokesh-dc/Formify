import Image from "next/image";

interface imageProps {
	src: string;
	height?: number;
	width?: number;
	priority: boolean;
	alt: string;
	classes?: string;
}

export default function NextImageCompo({
	src = "",
	height = 300,
	width = 200,
	alt = "",
	classes = "",
}: imageProps) {
	return (
		<Image
			className={classes}
			src={src}
			height={height}
			width={width}
			alt={alt}
		/>
	);
}
