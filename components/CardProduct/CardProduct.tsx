import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// data types
import { IProduct } from "../../@interfaces/IProduct";

type Props = {
	product: IProduct;
};


const CardProduct = ({ product }: Props) => {
	return (
		<Card elevation={0}>
			<CardMedia
				component="img"
				height="400"
				image={product.image.src}
				alt="green iguana"
			/>
			<CardContent sx={{ textAlign: "center" }}>
				<Button size="small">{product.name} </Button>
				<Typography gutterBottom variant="body1">
					{product.price}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default CardProduct;
