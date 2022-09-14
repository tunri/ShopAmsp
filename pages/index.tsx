import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ImageBanner from "../public/images/fashion1.jpeg";

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
				<Box>
					<Grid container>
						<Grid item xs={12} md={6}>
							<Box p={4}>
								<Typography
									component="h1"
									variant="h2"
									color="initial"
								>
									Love Yourself
									<br />& Your Body
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} md={6}>
							{/* <img src={{ImageBanner.src}} alt="asdasd" /> */}
							{/* <Image
								src={ImageBanner}
								alt="Fashion"
								width={500}
							/> */}
						</Grid>
					</Grid>
				</Box>
			</main>
		</div>
	);
};

export default Home;
