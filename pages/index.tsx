import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { TabProducts } from "../components/products";
import { ShopLayout } from "../components/layouts";

import { BoxPaddY } from "../components-styled";
import http from "../helpers/http";
import { IProduct } from "../@interfaces/IProduct";

type Props = {
	newProducts: any;
	discountProducts: any;
};

const Home: NextPage<Props> = ({ newProducts, discountProducts }) => {

	return (
		<ShopLayout
			title={"AMSP - Home"}
			pageDescription={"Encuentra los mejores productos de moda sostenible"}
		>
			<BoxPaddY>
				<Container maxWidth="lg">
					<Grid container>
						<Typography
							component="h2"
							variant="h3"
							color="primary"
							sx={{ width: "100%", textAlign: "center", mb: 2 }}
						>
							Productos
						</Typography>
						<Box sx={{ width: "100%" }}>
							<TabProducts
								newProducts={newProducts}
								offSale={discountProducts}
							/>
						</Box>
					</Grid>
				</Container>
			</BoxPaddY>
		</ShopLayout>
	);
};

export async function getServerSideProps(context: any) {
	// productos recientes
	const { data: newProducts } = await http.get("/products/last-added");
	const { data: discountProducts } = await http.get("/products/with-discount");

	return {
		props: {
			newProducts,
			discountProducts,
		},
	};
}

export default Home;
