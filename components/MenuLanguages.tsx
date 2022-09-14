import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { useState } from "react";

const LANGUAGES = [
	{ id: 1, text: "English" },
	{ id: 2, text: "Spanish" },
];

interface Props {
	sxColorLabel?: string;
}

const MenuLanguages = ({ sxColorLabel }: Props = { sxColorLabel: "black" }) => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		// setOpenMenu(true);
	};

	const handleClose = (event: any) => {
		console.log(event);
	};

	return (
		<div>
			<Button
				id="basic-button"
				aria-haspopup="true"
				aria-expanded={openMenu ? "true" : undefined}
				onClick={handleClick}
				sx={{
					color: sxColorLabel,
				}}
			>
				English
			</Button>
			<Menu id="basic-menu" open={openMenu}>
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>My account</MenuItem>
				<MenuItem onClick={handleClose}>Logout</MenuItem>
			</Menu>
		</div>
	);
};

export default MenuLanguages;
