import React from "react";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	AccordionDetailsStyled,
	AccordionStyled,
	AccordionSummaryStyled,
	OptionFilterStyled,
} from "./AccordionStyled";

import { IFilterProduct } from "../../@interfaces/IProductFilter";

type Props = {
	keyId: string | number;
	name: string;
	options: IFilterProduct[];
	index?: number;
};

const Filter = ({ name, keyId, options, index }: Props) => {
	const uuid = index || keyId;

	if (options.length === 0) return null;

	return (
		<AccordionStyled>
			<AccordionSummaryStyled
				expandIcon={<ExpandMoreIcon />}
				aria-controls={`panel${uuid}a-content`}
				id={`panel${uuid}a-content`}
			>
				<Typography>{name}</Typography>
			</AccordionSummaryStyled>
			<AccordionDetailsStyled>
				<Stack component="ul" direction="column">
					{options.map((option, index) => (
						<OptionFilterStyled
							component="li"
							key={`${uuid}-option-${index}`}
						>
							{/* <Checkbox /> <span>{option.text}</span> */}
						</OptionFilterStyled>
					))}
				</Stack>
			</AccordionDetailsStyled>
		</AccordionStyled>
	);
};

export default Filter;
