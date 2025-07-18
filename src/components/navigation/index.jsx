import UserProfile from "@/components/user/profile";
export default function NavigationBar({ ControllerChildren }) {
	return (
		<nav className="sticky top-[10px] w-[75%] mx-auto my-3 rounded-3xl p-3 flex items-center justify-between gap-5 bg-primary-alpha">
			<a href="/forms">Formify</a>
			<div className="w-1/2 border border-primary rounded-2xl">
				<input className="w-full p-2" placeholder="Search" type="search" />
			</div>
			<div>
				{ControllerChildren}
				<UserProfile />
			</div>
		</nav>
	);
}
