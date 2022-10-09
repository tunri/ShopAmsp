import { useState } from "react";
import { NextPage } from "next";
import useSWR from "swr";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

import { BoxPaddY } from "../../components-styled/BoxStyled";
import ProductFilters from "../../components/ProductFilters/index";
import { ListProducts } from "../../components/products";
import { ShopLayout } from "../../components/layouts";
import { IProduct } from "../../@interfaces/IProduct";
import { IDatumResponse } from "../../@interfaces/IResponse";

import { fetcher } from "../../helpers/http";

type PropsResponse = {
	data: IDatumResponse<IProduct[]>;
	error: any;
};

const ITEMS_PER_PAGE = 12;

const ProductCatalogue: NextPage = () => {
	const [page, setPage] = useState(1);

	const { data, error } = useSWR(
		`/products/?page_size=${ITEMS_PER_PAGE}&page=${page}`,
		fetcher
	);

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
	};

	return (
		<ShopLayout
			title={"AMSP - Catalogo de Productos"}
			pageDescription={
				"Encuentra los mejores productos de moda sostenible"
			}
		>
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
						<Typography
							variant="body2"
							sx={{ textAlign: "center" }}
						>
							Get cozy in our designer loungewear collection,
							featuring a range of beautifully comfy pieces. Shop
							the edit to discover designer track pants in a
							variety of colors, warm cardigans and sweatshirts in
							pretty pastels, soft stretch-jersey shorts and
							relaxed pajama sets that you can mix and match to
							suit you.
						</Typography>
					</Container>
					<Divider sx={{ marginTop: 3, marginBottom: 5 }} />
					<Box>
						<Grid container spacing={5}>
							<Grid item xs={12} md={3}>
								{data?.count && (
									<ProductFilters
										totalItems={data.count}
									></ProductFilters>
								)}
							</Grid>
							<Grid item xs={12} md={9}>
								{error && <div>Failed to load</div>}

								{!data ? (
									<div>loading...</div>
								) : (
									<Box>
										<ListProducts
											products={data.results}
										></ListProducts>
										<Box
											sx={{
												marginTop: 4,
												display: "flex",
												justifyContent: "center",
											}}
										>
											<Pagination
												count={Math.ceil(
													data.count / ITEMS_PER_PAGE
												)}
												variant="outlined"
												color="secondary"
												shape="rounded"
												page={page}
												onChange={handleChange}
											/>
										</Box>
									</Box>
								)}
							</Grid>
						</Grid>
					</Box>
				</Container>
			</BoxPaddY>
		</ShopLayout>
	);
};

export default ProductCatalogue;
