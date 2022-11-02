import { FC, SetStateAction } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import {
	AccordionDetailsStyled,
	AccordionStyled,
	AccordionSummaryStyled,
} from "./AccordionStyled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import { QueryCatalogue } from "../../pages/catalogue";

type Props = {
	totalItems: number;
	brands: any[];
	query: QueryCatalogue;
	setQuery: React.Dispatch<SetStateAction<QueryCatalogue>>;
};

const ProductFilters: FC<Props> = ({
	totalItems = 0,
	brands = [],
	query,
	setQuery,
}) => {
	const onChangeField = (event: any) => {
		const { value, name } = event.target;
		setQuery((v) => ({ ...v, [name]: value, page: 1 }));
	};

	return (
		<Box>
			<Box mb={1}>
				<Typography variant="body2" color="#555">
					{totalItems} Resultados
				</Typography>
			</Box>
			<Box mb={3}>
				<TextField
					fullWidth
					label="Buscar por nombre"
					variant="filled"
					name="name"
					value={query.name}
					onChange={onChangeField}
				/>
			</Box>

			<AccordionStyled>
				<AccordionSummaryStyled
					expandIcon={<ExpandMoreIcon />}
					aria-controls={`panel-brand-content`}
					id={`panel-brand-content`}
				>
					<Typography>Marca</Typography>
				</AccordionSummaryStyled>
				<AccordionDetailsStyled>
					<RadioGroup
						aria-labelledby="marcas"
						defaultValue="female"
						name="brand"
						value={query.brand}
						onChange={onChangeField}
					>
						<FormControlLabel
							value=''
							control={<Radio />}
							label='Todos'
						/>
						{brands.map((c: any) => (
							<FormControlLabel
								value={c.slug}
								control={<Radio />}
								label={c.name}
								key={c.id}
							/>
						))}
					</RadioGroup>
				</AccordionDetailsStyled>
			</AccordionStyled>
		</Box>
	);
};

export default ProductFilters;
