import { FC } from "react";
import Grid from "@mui/material/Grid";

import CardProduct from "../CardProduct";

import { IProduct } from "../../../@interfaces/IProduct";

type Props = {
	products?: IProduct[];
};

const ListProducts: FC<Props> = ({ products = [] }) => {
	return (
		<Grid container spacing={4}>
			{products.map((product, i) => (
				<CardProduct product={product} key={i}></CardProduct>
			))}
		</Grid>
	);
};

export default ListProducts;
