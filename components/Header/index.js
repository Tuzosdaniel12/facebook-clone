import ActivityHeader from "./components/ActivityHeader.js";
import HeaderUserActions from "./components/HeaderUserActions.js";
import  SearchBar  from "./components/SearchBar.js";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
			{/* Left */}
			<SearchBar />
			{/* Middle */}
			<ActivityHeader />
			{/* Right */}
			<HeaderUserActions />
		</header>
	);
};
export default Header;
