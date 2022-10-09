import { FC, useState } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Container from "@mui/material/Container";

import { MockProducts } from "../../@data/Products";
import ListProducts from "./ListProducts";
import { IProduct } from "../../@interfaces/IProduct";

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
			{value === index && <>{children}</>}
		</Box>
	);
}

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

type Props = {
	newProducts: IProduct[];
	bestSellers: IProduct[];
	offSale: IProduct[];
};

const TabProducts: FC<Props> = ({ newProducts, bestSellers, offSale }) => {
	
	const [value, setValue] = useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<Tabs
				value={value}
				onChange={handleChange}
				aria-label="basic tabs example"
				centered
				sx={{ mb: 4 }}
			>
				<Tab label="NUEVOS PRODUCTOS" {...a11yProps(0)} />
				<Tab label="LO MAS VENDIDO" {...a11yProps(1)} />
				<Tab label="EN DESCUENTO" {...a11yProps(2)} />
			</Tabs>
			<TabPanel value={value} index={0}>
				<Container maxWidth="lg" sx={{ px: "0 !important" }}>
					<ListProducts products={newProducts}></ListProducts>
				</Container>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Container maxWidth="lg" sx={{ px: "0 !important" }}>
					<ListProducts products={bestSellers}></ListProducts>
				</Container>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Container maxWidth="lg" sx={{ px: "0 !important" }}>
					<ListProducts products={offSale}></ListProducts>
				</Container>
			</TabPanel>
		</>
	);
};

export default TabProducts;
