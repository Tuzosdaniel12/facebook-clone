/* eslint-disable @next/next/no-img-element */
import { ChatAltIcon, ShareIcon, ThumbUpIcon, TrashIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/client";
import Image from "next/image";
import { db, storage } from "../../../firebase";

const Post = ({ name, message, email, postImage, image, timestamp, postId }) => {
	const [session] = useSession();
	
	const removePost = async (id) =>{
		try{
			//create a ref to post 
			const deletePost = db.collection("posts").doc(id).delete();

			console.log("Document successfully deleted!");

		}catch(error){
			console.error("Error removing document: ", error);
		}
		
	}					
	return (
		<div className="flex flex-col">
			<div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
				<div className="flex items-center space-x-2">
					<img
						className="rounded-full"
						src={image}
						width={40}
						height={40}
						alt=""
					/>
					<div>
						<p className="font-medium">{name}</p>
						{timestamp ? (
							<p className="text-xs text-gray-400">
								{new Date(timestamp?.toDate()).toLocaleString()}
							</p>
						) : (
							<p className="text-xs text-gray-400">Loading</p>
						)}
					</div>
				</div>

				<p className="pt-4">{message}</p>
			</div>
			{postImage && (
				<div className="relative h-56 md:h-96 bg-white">
					<Image
						src={postImage}
						objectFit="cover"
						layout="fill"
						alt=""
					/>
				</div>
			)}

			<div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
				<div className="inputIcon p-3 rounded-none rounded-bl-2xl">
					<ThumbUpIcon className="h-4" />
					<p className="text-xs sm:text-base">Like</p>
				</div>

				<div className="inputIcon p-3 rounded-none">
					<ChatAltIcon className="h-4" />
					<p className="text-xs sm:text-base">Comment</p>
				</div>

				<div
					className={`inputIcon p-3 rounded-none 
					${session.user.name === name ? "" : "rounded-br-2xl"}`}>
					<ShareIcon className="h-4" />
					<p className="text-xs sm:text-base">Share</p>
				</div>
				{session.user.name === name && (
					<div className="inputIcon p-3 rounded-none rounded-br-2xl" onClick={()=> removePost(postId)}>
						<TrashIcon className="h-4" />
						<p className="text-xs sm:text-base">Delete</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default Post;
