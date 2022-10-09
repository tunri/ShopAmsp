import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import { TabProducts } from "../components/products";
import { ShopLayout } from "../components/layouts";

import { BoxPaddY } from "../components-styled";
import http from "../helpers/http";
import { IAxiosResponse } from "../@interfaces/IResponse";

const Home: NextPage = ({ products }) => {
	console.log(products, "products");

	return (
		<ShopLayout
			title={"AMSP - Home"}
			pageDescription={
				"Encuentra los mejores productos de moda sostenible"
			}
		>
			<BoxPaddY>
				<Container maxWidth="lg">
					<Grid container>
						<Typography
							component="h2"
							variant="h3"
							color="primary"
							sx={{ width: "100%", textAlign: "center" }}
						>
							Productos
						</Typography>
						<Box>
							<TabProducts
								bestSellers={products}
								newProducts={products}
								offSale={products}
							/>
						</Box>
					</Grid>
				</Container>
			</BoxPaddY>
		</ShopLayout>
	);
};

export async function getStaticProps(context) {
	const { status, data } = await http.get("/products");

	return {
		props: {
			products: data.results.slice(0, 6),
		},
	};
}

export default Home;
