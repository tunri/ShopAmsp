import { FC, useEffect, useState } from "react";
import NextLink from "next/link";
import NextImage from "next/image";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

// data types
import { IProduct } from "../../../@interfaces/IProduct";
import { formatCurrencyLocale } from "../../../helpers/currency";

const imageDefault =
	"https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg";

type Props = {
	product: IProduct;
};

const CardProduct: FC<Props> = ({ product }) => {
	// const [priceTextual, setPriceTextual] = useState();
	const images = product.images;
	const image = images.length > 0 ? images[0].url : imageDefault;
	// useEffect(() => setPriceTextual((c) => formatCurrencyLocale(Number(c))), []);

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card elevation={0}>
				<NextLink href={`/product/${product.id}`} passHref>
					<Link underline="hover">
						<Box sx={{ position: "relative" }}>
							<CardMedia
								component="img"
								image={image}
								height={360}
								alt={product.name}
								sx={{
									backgroundColor: "#e5e5e5",
									borderRadius: 1,
								}}
							/>
							<Box
								sx={{
									width: "100%",
									position: "absolute",
									bottom: 0,
									padding: 2,
								}}
							>
								<Button
									sx={{
										padding: 1.5,
									}}
									fullWidth
									variant="contained"
								>
									AGREGAR AL CARRITO
								</Button>
							</Box>
						</Box>
						<CardContent sx={{ pb: "0 !important", px: 0 }}>
							<Grid container spacing={1}>
								<Grid item xs>
									<Typography sx={{ fontSize : 14 }} fontWeight={500}>{product.name}</Typography>
								</Grid>
								<Grid item>
									<Typography fontWeight={500}>
										{formatCurrencyLocale(product.price)}
									</Typography>
								</Grid>
							</Grid>
						</CardContent>
					</Link>
				</NextLink>
			</Card>
		</Grid>
	);
};

export default CardProduct;
