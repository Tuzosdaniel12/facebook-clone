import Image from "next/image";
import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	ViewGridIcon
} from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/client";

const HeaderUserActions = () => {

	const [session, loading] = useSession();

	return (
		<div className="flex items-center sm:space-x-2 justify-end">
			<Image
				onClick={() => signOut()}
				className="rounded-full cursor-pointer"
				src={session.user.image}
				width="40"
				height="40"
				layout="fixed"
				alt="user image"
			/>
			<p className="hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3">
				{session.user.name}
			</p>
			<ViewGridIcon className="icon" />
			<ChatIcon className="icon" />
			<BellIcon className="icon" />
			<ChevronDownIcon className="icon" />
		</div>
	);
};

export default HeaderUserActions