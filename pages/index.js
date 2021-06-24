import Head from 'next/head'
import Header from "../components/Header.js"

export default function Home() {
  return (
		<div>
			<Head>
				<title>Facebook</title>
				{/*Header*/}
        <Header/>
				<main>
					{/*Sidebar*/}
					{/*Feed*/}
					{/*Widgets*/}
				</main>

				{/*Header*/}
			</Head>
		</div>
  );
}
