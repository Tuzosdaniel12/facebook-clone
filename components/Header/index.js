import { ActivityHeader } from "./components/ActivityHeader";
import { HeaderUserActions } from "./components/HeaderUserActions";
import { SearchBar } from "./components/SearchBar";

const Header = () => {
	return (
		<div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
			{/* Left */}
			<SearchBar />
			{/* Middle */}
			<ActivityHeader />
			{/* Right */}
			<HeaderUserActions />
		</div>
	);
};
export default Header;
