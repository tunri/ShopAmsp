import Box from "@mui/system/Box";
import React from "react";
import { INavSection } from "../../../@data/MenuNavigations";
import Stack from "@mui/material/Stack";
import ItemListColumn from "./ItemListColumn";

type Props = {
	sections: INavSection[] | undefined;
	keyItem: string;
};
const MenuListColumn = ({ sections, keyItem }: Props) => {
	return (
		<Box>
			<Stack spacing={3} direction="row">
				{sections &&
					sections.map((section, index) => (
						<ItemListColumn
							key={`${section.title} - ${index}-${keyItem}`}
							title={section.title}
							links={section.links}
						></ItemListColumn>
					))}
			</Stack>
		</Box>
	);
};

export default MenuListColumn;
