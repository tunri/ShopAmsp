import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { IFilterProduct } from "../../@interfaces/IProductFilter";
import Filter from "./Filter";

const DATA_FILTER: IFilterProduct[] = [
	{ keyId: "category", name: "Categoría", options: [] },
	{ keyId: "rating", name: "Clasificación", options: [] },
	{ keyId: "type", name: "Tipo", options: [] },
	{ keyId: "class", name: "Clase", options: [] },
	{ keyId: "color", name: "Color", options: [] },
	{ keyId: "size", name: "Talla", options: [] },
];

type Props = {
	totalItems: number;
};

const ProductFilters: FC<Props> = ({ totalItems }) => {
	return (
		<Box>
			<Box mb={1}>
				<Typography variant="body2" color="#555">
					{totalItems} Resultados
				</Typography>
			</Box>
			{DATA_FILTER.map((p) => (
				<Filter
					name={p.name}
					key={p.keyId}
					keyId={p.keyId}
					options={p.options}
				/>
			))}
		</Box>
	);
};

export default ProductFilters;
