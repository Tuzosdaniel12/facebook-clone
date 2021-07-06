import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Header from "../components/Header"
import Login from "../components/Login";
import SideBar from "../components/SideBar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { db } from '../firebase';

export default function Home({session, posts}) {
  if (!session) return <Login/>
  return (
		<div className="h-screen bg-gray-100 overflow-hidden">
			<Head>
				<title>Facebook Clone</title>
				<link
					rel="shortcut icon"
					href="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
				/>
			</Head>
			<Header />
			<main className="flex">
				<SideBar />
				<Feed posts={posts} />
				<Widgets />
			</main>
		</div>
  );
}


export async function getServerSideProps(context) {
  //Get the user 
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
		id: post.id,
		...post.data(),
		timestamp: null
  }));

  return {
		props: {
			session: await getSession(context),
			posts: docs
		}
  };
}