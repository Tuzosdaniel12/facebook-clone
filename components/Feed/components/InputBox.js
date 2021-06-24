import { useSession } from "next-auth/client";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../../../firebase";
import firebase from "firebase";

const InputBox = () => {
    const [session] = useSession();
	const inputRef = useRef(null);
	const fileRef = useRef(null);
	const [imagePost, setImagePost] = useState(null)

    const sendPost = async (e) =>{
        e.preventDefault()

		if(!inputRef.current.value) return

		const doc = await db.collection("posts").add({
			message: inputRef.current.value,
			name: session.user.name,
			email: session.user.email,
			image: session.user.image,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		});

		if (imagePost) {
        	const uploadTask = storage
				.ref(`posts/${doc.id}`)
				.putString(imagePost, "data_url");

        	removeImage();

        	uploadTask.on(
            "state_changed",
            null,
            (error) => {
              // ERROR function
            	console.log(error);
            },
            () => {
              // COMPLETE function
            	storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                	db.collection("posts").doc(doc.id).set(
                    {
                    	postImage: url,
                    },
                    { merge: true }
                	);
                });
            }
          );
        }

		inputRef.current.value = ""

    }

	const addImage = (e) =>{
		e.preventDefault()

		const reader = new FileReader();

		if(e.target.files[0]){
			reader.readAsDataURL(e.target.files[0])
		}

		reader.onload = (readerEvent) => setImagePost(readerEvent.target.result)

	}

	const removeImage = () =>{
		setImagePost(null)
	}

    return (
		<div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
			<div className="flex space-x4 p-4 items-center">
				<Image
					className="rounded-full"
					src={session.user.image}
					width={30}
					height={30}
					layout="fixed"
					alt="user image"
				/>
				<form className="flex flex-1">
					<input
						ref={inputRef}
						className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
						type="text"
						placeholder={`What's on your mind ${session.user.name}?`}
					/>
					<button hidden onClick={sendPost}></button>
				</form>
				{imagePost && (
					<div 
						onClick={removeImage}
						className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
						{
							// eslint-disable-next-line @next/next/no-img-element
							<img
								src={imagePost}
								className="h-10 object-contain"
								alt="example"
							/>
						}
						<p className="text-xs text-red-500 text-center">Remove</p>
					</div>
				)}
			</div>

			<div className="flex justify-evenly p-3 border-t">
				<div className="inputIcon">
					<VideoCameraIcon className="h-7 text-red-500 " />
					<p className="text-xs sm:text-sm xl:text-base">
						Live Video
					</p>
				</div>

				<div
					onClick={() => fileRef.current.click()}
					className="inputIcon">
					<CameraIcon className="h-7 text-green-400" />
					<p className="text-xs sm:text-sm xl:text-base">
						Photo/Video
					</p>
					<input
						type="file"
						hidden
						onChange={addImage}
						ref={fileRef}
					/>
				</div>

				<div className="inputIcon">
					<EmojiHappyIcon className="h-7 text-yellow-300" />
					<p className="text-xs sm:text-sm xl:text-base">
						Feeling/Activity
					</p>
				</div>
			</div>
		</div>
	);
}

export default InputBox
