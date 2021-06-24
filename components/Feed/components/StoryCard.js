import Image from "next/image";
const StoryCard = ({ name, src, profile }) => {
	return (
        <div>
            <Image
                className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
                src={profile}
                width={40}
                height={40}
                layout="fixed"
                objectFit="cover"
                alt="profile"    
            />
        </div>
    );
};

export default StoryCard
