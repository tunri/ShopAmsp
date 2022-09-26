import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { MockProducts } from "./helpers/clothes";
import ListProducts from "../components/ListProducts/ListProducts";
import Container from "@mui/material/Container";

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<Box
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			sx={{ width: "100%" }}
			{...other}
		>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</Box>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const Home: NextPage = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div>
			<Head>
				<title>AMSP - Home</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
			</Head>

			<main>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						marginTop: 8,
					}}
				>
					<Grid container>
						<Typography
							variant="h4"
							color="initial"
							sx={{ width: "100%", textAlign: "center" }}
						>
							Productos
						</Typography>
						<Box sx={{ width: "100%", marginTop: 2 }}>
							<Tabs
								value={value}
								onChange={handleChange}
								aria-label="basic tabs example"
								centered
							>
								<Tab
									label="NUEVOS PRODUCTOS"
									{...a11yProps(0)}
								/>
								<Tab label="LO MAS VENDIDO" {...a11yProps(1)} />
								<Tab label="EN DESCUENTO" {...a11yProps(2)} />
							</Tabs>
						</Box>
						<TabPanel value={value} index={0}>
							<Container maxWidth="lg">
								<ListProducts
									products={MockProducts}
								></ListProducts>
							</Container>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<Container maxWidth="lg">
								<ListProducts
									products={MockProducts}
								></ListProducts>
							</Container>
						</TabPanel>
						<TabPanel value={value} index={2}>
							<Container maxWidth="lg">
								<ListProducts
									products={MockProducts}
								></ListProducts>
							</Container>
						</TabPanel>
					</Grid>
				</Box>
			</main>
		</div>
	);
};

export default Home;
