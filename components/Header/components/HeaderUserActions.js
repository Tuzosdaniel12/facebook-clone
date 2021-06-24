import Image from "next/image";
import {
	BellIcon,
	ChatIcon,
	ChevronDownIcon,
	ViewGridIcon
} from "@heroicons/react/solid";

export const HeaderUserActions = () => {
	return (
		<div className="flex items-center sm:space-x-2 justify-end">
			<p className="whitespace-nowrap font-semibold pr-3">
				Daniel Soledad
			</p>
			<ViewGridIcon className="icon" />
			<ChatIcon className="icon" />
			<BellIcon className="icon" />
			<ChevronDownIcon className="icon" />
		</div>
	);
};
