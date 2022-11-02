import { useEffect, useState } from "react";
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

import http, { fetcher } from "../../helpers/http";
import EmptyData from "../../components/ui/EmptyData";

type PropsResponse = {
	data: IDatumResponse<IProduct[]>;
	error: any;
};

const ITEMS_PER_PAGE = 12;

type Props = {
	brands: any[];
};

export type QueryCatalogue = {
	name: string;
	brand: string;
	page: number;
	page_size: number;
};

const mapToQueryParams = ({
	brand,
	name,
	page,
	page_size,
}: QueryCatalogue): string => {
	const qp = [`page_size=${page_size}&page=${page}`];

	if (name.trim().length) {
		qp.push(`name=${name.trim()}`);
	}

	// Todo: soporte para multiple
	if (brand.trim().length) {
		qp.push(`brand=${brand.trim()}`);
	}

	return `?${qp.join('&')}`;
};

const ProductCatalogue: NextPage<Props> = ({ brands }) => {
	const [query, setQuery] = useState<QueryCatalogue>({
		brand: "",
		name: "",
		page: 1,
		page_size: 9,
	});

	const { data, error } = useSWR(
		`/products/${mapToQueryParams(query)}`,
		fetcher
	);

	const handleChangePagination = (
		event: React.ChangeEvent<unknown>,
		value: number
	) => {
		setQuery((c) => ({ ...c, page: value }));
	};

	return (
		<ShopLayout
			title={"AMSP - Catalogo de Productos"}
			pageDescription={"Encuentra los mejores productos de moda sostenible"}
		>
			<BoxPaddY>
				<Container maxWidth="xl">
					<Box>
						<Grid container spacing={5}>
							<Grid item xs={12} md={3}>
								<ProductFilters
									totalItems={data?.count}
									brands={brands}
									query={query}
									setQuery={setQuery}
								></ProductFilters>
							</Grid>
							<Grid item xs={12} md={9}>
								{error && <div>Failed to load</div>}

								{!data ? (
									<div>loading...</div>
								) : (
									<Box>
										{data.results.length > 0 ? (
											<ListProducts products={data.results}></ListProducts>
										) : (
											<EmptyData />
										)}
										<Box
											sx={{
												marginTop: 4,
												display: "flex",
												justifyContent: "center",
											}}
										>
											<Pagination
												count={Math.ceil(data.count / ITEMS_PER_PAGE)}
												variant="outlined"
												color="secondary"
												shape="rounded"
												page={query.page}
												onChange={handleChangePagination}
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

export async function getServerSideProps(context: any) {
	// productos recientes
	const { data: brands } = await http.get("/products/brands");

	return {
		props: {
			brands: brands.results,
		},
	};
}

export default ProductCatalogue;
