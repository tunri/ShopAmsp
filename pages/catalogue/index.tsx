import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListProducts from "../../components/ListProducts/ListProducts";
import CLOTHES from "../helpers/clothes";

import { BoxPaddY } from "../../components-styled/BoxStyled";
import ProductFilters from "../../components/ProductFilters";

const ProductCatalogue = () => {
	return (
		<BoxPaddY>
			<Container maxWidth="xl">
				<Typography
					variant="h5"
					color="primary"
					mb={2}
					sx={{
						fontWeight: 300,
						textAlign: "center",
					}}
				>
					Loungewear
				</Typography>
				<Container maxWidth="sm">
					<Typography variant="body2" sx={{ textAlign: "center" }}>
						Get cozy in our designer loungewear collection,
						featuring a range of beautifully comfy pieces. Shop the
						edit to discover designer track pants in a variety of
						colors, warm cardigans and sweatshirts in pretty
						pastels, soft stretch-jersey shorts and relaxed pajama
						sets that you can mix and match to suit you.
					</Typography>
				</Container>
				<Divider sx={{ marginTop: 3, marginBottom: 5 }} />
				<Box>
					<Grid container spacing={0}>
						<Grid item xs={6} md={4}>
							<ProductFilters></ProductFilters>
						</Grid>
						<Grid item xs={6} md={8}>
							<ListProducts products={CLOTHES}></ListProducts>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</BoxPaddY>
	);
};

export default ProductCatalogue;