import "@/app/globals.css";
import { Poppins } from "next/font/google";
import NavigationBar from "@/components/navigation";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-poppins",
});

export const metadata = {
	title: "Formify | Home",
	description: "Generate your form dynamically with ease",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>
				<div className="w-[90%] md:w-[85%] mx-auto">
					<NavigationBar />
					{children}
				</div>
			</body>
		</html>
	);
}
