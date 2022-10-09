import React, { FC, useState, useEffect } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ButtonLoading from "../../components/ui/ButtonLoading";
import Image from "next/image";
import http from "../../helpers/http";
import { ShopLayout } from "../../components/layouts";
import { IProduct } from "../../@interfaces/IProduct";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import usePrice from "../../hooks/usePrice";
import TagSize from "../../components/ui/TagSize";

const imageDefault =
	"https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg";

type Props = {
	product: IProduct;
};

const ProductDetail: FC<Props> = ({ product }) => {
	const images = product.imageUrls;
	const image = images.length > 0 ? images[0] : imageDefault;

	const [price, setPrice] = useState(0);

	useEffect(() => {
		setPrice(product.price);
	}, []);

	const priceText = usePrice(price);

	return (
		<ShopLayout title="Producto - NameProduct" pageDescription="Product">
			<Box py={8}>
				<Container maxWidth="lg">
					<Grid container spacing={8}>
						<Grid item xs={12} md={6}>
							<CardMedia
								component="img"
								image={image}
								height={500}
								alt={product.name}
								sx={{
									backgroundColor: "#e5e5e5",
									borderRadius: 1,
								}}
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<Box sx={{ maxWidth: "80%", margin: "auto" }}>
								<Box mb={2}>
									<Typography
										variant="h4"
										mb={1}
										sx={{
											textTransform: "uppercase",
											fontWeight: 400,
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
										{priceText}
									</Typography>
								</Box>

								<Box>
									<Stack direction="row" spacing={1} mb={2}>
										<Typography
											variant="body2"
											color="#777"
										>
											Color:
										</Typography>
										<Typography variant="body2">
											White
										</Typography>
									</Stack>
								</Box>

								<Box>
									<Grid container spacing={2}>
										<Grid item xs pt={0}>
											<Typography
												variant="body2"
												color="#777"
											>
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
									<Typography variant="body1" component="p">
										{product.description}
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

	try {
		const { data } = await http.get(`/products/${id}/`);

		return {
			props: {
				product: data,
			},
		};
	} catch (error) {
		return {
			redirect: {
				permanent: false,
				destination: "/product/not-found",
			},
		};
	}
}

export default ProductDetail;
