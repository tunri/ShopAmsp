/**
 * Menu Navegacion Categorias, parte bot de header
 */
 import { styled } from "@mui/material/styles";
import React, { MouseEventHandler } from "react";
import Stack from "@mui/material/Stack";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import DataMenuNavigation from "../../../@data/MenuNavigation";
import { IMenuNavigation } from "../../../@interfaces/IMenu";

type Props = {
	onMouseEnter: MouseEventHandler;
	onMouseLeave: MouseEventHandler;
	onMouseEnterLink: (item: IMenuNavigation) => void;
};

const MenuNavigation = ({
	onMouseEnter,
	onMouseLeave,
	onMouseEnterLink,
}: Props) => {
	return (
		<>
			<Toolbar variant="dense" sx={{ justifyContent: "center" }}>
				<Box onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
					{DataMenuNavigation.length > 0 ? (
						<Stack component="nav" direction="row">
							{DataMenuNavigation.map((item) => (
								<Link
									href="/catalogue"
									onMouseEnter={() => onMouseEnterLink(item)}
									key={item.key}
									sx={{
										color: "common.white",
										cursor: "pointer",
										paddingLeft: "24px",
										paddingRight: "24px",
									}}
								>
									{item.text}
								</Link>
							))}
						</Stack>
					) : null}
				</Box>
			</Toolbar>
		</>
	);
};

export default MenuNavigation;
