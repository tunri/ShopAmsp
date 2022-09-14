import React from "react";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DataMenuNavigation from "../../@data/MenuNavigations";

type Props = {
	onClickLink: Function;
};

const MenuNavigation = ({ onClickLink }: Props) => {
	return (
		<>
			<Toolbar
				sx={{
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{DataMenuNavigation.length > 0 ? (
					<Stack component="nav" direction="row" spacing={3}>
						{DataMenuNavigation.map((item) => (
							<Link
								key={item.key}
								onClick={(ev) => onClickLink(item, ev)}
								sx={{
									color: "common.white",
									cursor: "pointer",
								}}
							>
								{item.text}
							</Link>
						))}
					</Stack>
				) : null}
			</Toolbar>
		</>
	);
};

export default MenuNavigation;
