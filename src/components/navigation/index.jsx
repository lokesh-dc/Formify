import UserProfile from "@/components/user/profile";
export default function NavigationBar({ ControllerChildren }) {
	return (
		<nav className="sticky top-[10px] my-3 bg-primary rounded-3xl p-3 flex items-center justify-between gap-5 z-10">
			<a href="/forms">Formify</a>
			<div className="w-1/2">
				<input className="w-full p-2" placeholder="Search" type="search" />
			</div>
			<div>
				{ControllerChildren}
				<UserProfile />
			</div>
		</nav>
	);
}
