import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Hola mundo</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<main>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. A,
				quasi praesentium doloremque eius suscipit fuga! Laborum, fuga
				culpa? Doloribus at illo quaerat, praesentium nesciunt nulla
				assumenda quas quae modi fugit?
			</main>
		</div>
	);
};

export default Home;
