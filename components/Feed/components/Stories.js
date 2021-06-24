import StoryCard from "./StoryCard";

const stories = [
	{
		name: "Sonny Sangha",
		src: "https://links.papareact.com/zof",
		profile: "https://links.papareact.com/l4v"
	},
	{
		name: "Elon Musk",
		src: "https://links.papareact.com/4zn",
		profile: "https://links.papareact.com/kxk"
	},
	{
		name: "Jeff Bezoz",
		src: "https://links.papareact.com/k2j",
		profile: "https://links.papareact.com/f0p"
	},
	{
		name: "Mark Zuckerberg",
		src: "https://links.papareact.com/xql",
		profile: "https://links.papareact.com/snf"
	},
	{
		name: "Bill Gates",
		src: "https://links.papareact.com/4u4",
		profile: "https://links.papareact.com/zvy"
	}
];

const Stories = () => {
	return (
        <div className="flex justify-center space-x-3 mx-auto">
            {
                stories.map(({name, src, profile},index) => (
                    <StoryCard name={name} src={src} profile={profile} key={index}/>
                ))
            }
        </div>
    )
};

export default Stories;