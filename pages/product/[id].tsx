import React, { FC, useEffect, useState } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ButtonLoading from "../../components/ui/ButtonLoading";
import http from "../../helpers/http";
import { ShopLayout } from "../../components/layouts";
import { IProduct } from "../../@interfaces/IProduct";
import Link from "@mui/material/Link";
import TagSize from "../../components/ui/TagSize";
import { formatCurrencyLocale } from "../../helpers/currency";
import CarouselProducts from "../../components/products/CarouselProducts/CarouselProducts";
import Parser from "html-react-parser";

type Props = {
	product: IProduct;
	outfit: any;
};

const ProductDetail: FC<Props> = ({ product, outfit }) => {
	const images = product.images.map((i) => i.url);
	const price = formatCurrencyLocale(product.price);
	const [description, setDescription] = useState("");

	useEffect(() => {
		setDescription(product.description);
	}, []);

	return (
		<ShopLayout title="Producto - NameProduct" pageDescription="Product">
			<Box py={8}>
				<Container maxWidth="lg">
					<Grid container spacing={2}>
						<Grid item xs={12} md={6} lg={8}>
							<Box sx={{ maxWidth: "90%" }}>
								{images.length > 0 && (
									<CarouselProducts items={images}></CarouselProducts>
								)}
							</Box>
						</Grid>
						<Grid item xs={12} md={6} lg={4}>
							<Box>
								<Box mb={2}>
									<Typography
										variant="h5"
										mb={1}
										sx={{
											textTransform: "uppercase",
											fontWeight: 500,
										}}
									>
										{product.name}
									</Typography>
									<Typography
										variant="h5"
										mb={1}
										sx={{
											textTransform: "uppercase",
											fontSize: 16,
										}}
									>
										{product.brand.name}
									</Typography>
									<Typography
										variant="body1"
										sx={{
											fontSize: 18,
											fontWeight: 500,
										}}
									>
										{price}
									</Typography>
								</Box>

								<Box>
									<Stack direction="row" spacing={1} mb={2}>
										<Typography variant="body2" color="#777">
											Color:
										</Typography>
										<Typography variant="body2">White</Typography>
									</Stack>
								</Box>

								<Box>
									<Grid container spacing={2}>
										<Grid item xs pt={0}>
											<Typography variant="body2" color="#777">
												Size
											</Typography>
										</Grid>
										<Grid item pt={0}>
											<Link
												underline="always"
												sx={{
													color: "#656565",
													fontSize: 14,
													cursor: "pointer",
												}}
											>
												View size guide
											</Link>
										</Grid>
									</Grid>
									<Stack spacing={2} direction="row" mt={1}>
										<TagSize>SM</TagSize>
										<TagSize>M</TagSize>
										<TagSize>XL</TagSize>
										<TagSize>XXL</TagSize>
									</Stack>
								</Box>
								<Box my={2}>
									<Typography variant="h6" component="h6">
										Descripción
									</Typography>
									<Typography variant="body1" component="div">
										<div
											dangerouslySetInnerHTML={{ __html: description }}
										></div>
									</Typography>
								</Box>

								<ButtonLoading
									variant="contained"
									color="primary"
									fullWidth
									size="large"
									sx={{ height: 40, padding: 3 }}
								>
									agregar a carrito
								</ButtonLoading>
								<Box my={2} />
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</ShopLayout>
	);
};

export async function getServerSideProps(context: any) {
	const { id } = context.params;

	const { data: product } = await http.get(`/products/${id}/`);
	// const { data: dataOutfit } = await http.get(`/products/${id}/outfits/`);

	return {
		props: {
			product: product,
			// outfit: dataOutfit,
		},
	};

	// try {
	// 	const { data } = await http.get(`/products/${id}/`);

	// 	return {
	// 		props: {
	// 			product: data,
	// 		},
	// 	};
	// } catch (error) {
	// 	return {
	// 		redirect: {
	// 			permanent: false,
	// 			destination: "/product/not-found",
	// 		},
	// 	};
	// }
}

export default ProductDetail;
