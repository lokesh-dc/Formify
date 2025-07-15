import UserProfile from "@/components/user/profile";
export default function NavigationBar({ ControllerChildren }) {
	return (
		<nav className="w-[75%] mx-auto my-3 rounded-3xl p-3 flex items-center justify-between gap-5 bg-primary">
			<a href="/forms">Formify</a>
			<div>
				<input
					className="p-2 border border-black rounded-2xl"
					placeholder="Search"
					type="search"
				/>
			</div>
			<div>
				{ControllerChildren}
				<UserProfile />
			</div>
		</nav>
	);
}
