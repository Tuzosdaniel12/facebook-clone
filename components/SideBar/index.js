import { useSession } from "next-auth/client"
import {
    ChevronDownIcon,
    ShoppingCartIcon,
    UserGroupIcon
} from "@heroicons/react/outline"
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    ShoppingBagIcon,
    UsersIcon
} from "@heroicons/react/solid"
import SideBarRow from "./components/SideBarRow";
const SideBar = () => {
    const [session, loading] = useSession();
	return (
		<div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
			<SideBarRow src={session.user.image} title={session.user.name} />
			<SideBarRow Icon={UsersIcon} title="Friends" />
			<SideBarRow Icon={UserGroupIcon} title="Groups" />
			<SideBarRow Icon={ShoppingBagIcon} title="Marketplace" />
			<SideBarRow Icon={DesktopComputerIcon} title="Watch" />
			<SideBarRow Icon={CalendarIcon} title="Events" />
			<SideBarRow Icon={ClockIcon} title="Memories" />
			<SideBarRow Icon={ChevronDownIcon} title="See More" />
		</div>
	);
};

export default SideBar