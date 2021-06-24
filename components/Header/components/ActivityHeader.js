import HeaderIcon from "./HeaderIcon";
import Image from "next/image";
import {
	HomeIcon,
	UserGroupIcon,
} from "@heroicons/react/solid";
import {
	FlagIcon,
	PlayIcon,
	ShoppingCartIcon
} from "@heroicons/react/outline";

export const ActivityHeader = () => {
	return (
		<div className="flex justify-center flex-grow">
			<div className="flex space-x-6 md:space-x-2">
				<HeaderIcon Icon={HomeIcon} active />
				<HeaderIcon Icon={FlagIcon} />
				<HeaderIcon Icon={PlayIcon} />
				<HeaderIcon Icon={ShoppingCartIcon} />
				<HeaderIcon Icon={UserGroupIcon} />
			</div>
		</div>
	);
};
