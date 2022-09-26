import React from "react";
import Grid from "@mui/material/Grid";
import CardProduct from "../CardProduct/CardProduct";
import { IProduct } from "../../@interfaces/IProduct";

type Props = {
	products: IProduct[];
};

const ListProducts = ({ products }: Props) => {
	return (
		<Grid container spacing={4}>
			{products.map((product, i) => (
				<Grid item xs={12} md={4} key={i}>
					<CardProduct product={product}></CardProduct>
				</Grid>
			))}
		</Grid>
	);
};

export default ListProducts;
