import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
const SearchBar = () => {
	return (
		<div className="flex items-center">
			<Image
				src="https://links.papareact.com/5me"
				width={40}
				height={40}
				layout="fixed"
				alt="facebook-logo"
			/>
			<div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
				<SearchIcon className="h-6 text-gray-600" />
				<input
					className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
					type="text"
					placeholder="Search Facebook "
				/>
			</div>
		</div>
	);
};

export default SearchBar