import React from "react";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

interface IMenuItem {
	key: string;
	text: string;
}

const dataMenu: IMenuItem[] = [
	{
		key: "design",
		text: "Diseñadores",
	},
	{
		key: "prendesDeVestir",
		text: "Prendas de Vestir",
	},
	{
		key: "carterasAccesorios",
		text: "Carteras y accesorios",
	},
	{
		key: "zapatos",
		text: "Zapatos",
	},
	{
		key: "joyeria",
		text: "Joyeria",
	},
	{
		key: "ofertas",
		text: "Ofertas",
	},
];

const MenuNavigation = () => {
	return (
		<Toolbar
			sx={{
				flexWrap: "wrap",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{dataMenu.length > 0 ? (
				<Stack component="nav" direction="row" spacing={3}>
					{dataMenu.map((item) => (
						<Link key={item.key} sx={{ color: "common.white" }}>
							{item.text}
						</Link>
					))}
				</Stack>
			) : null}
		</Toolbar>
	);
};

export default MenuNavigation;
