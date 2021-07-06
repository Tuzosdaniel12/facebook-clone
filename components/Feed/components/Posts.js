import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase";
import Post from "./Post";

const Posts = ({ posts }) => {
	const [realtimePosts, loading, error] = useCollection(
		db.collection("posts").orderBy("timestamp", "desc")
	);

	return (
		<div>
			{realtimePosts
				? realtimePosts?.docs.map((post) => (
						<Post
							key={post.id}
							name={post.data().name}
							message={post.data().message}
							email={post.data().email}
							timestamp={post.data().timestamp}
							image={post.data().image}
							postImage={post.data().postImage}
							postId={post.id}
						/>
				  ))
				: posts.map((post) => (
						<Post
							key={post.id}
							name={post.name}
							message={post.message}
							email={post.email}
							timestamp={post.timestamp}
							image={post.image}
							postImage={post.postImage}
							postId={post.id}
						/>
				  ))}
		</div>
	);
}

export default Posts;
