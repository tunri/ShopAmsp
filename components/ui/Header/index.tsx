import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import MenuNavigation from "./MenuNavigation";
import PopoverNavigation from "./PopoverNavigation/PopoverNavigation";
import NavInnerTop from "./NavInnerTop";

import { IMenuNavigation } from "../../../@data/MenuNavigation";
const Header = () => {

	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [hoverItem, setHoverItem] = useState<IMenuNavigation | null>(null);

	const onHoverMenuItem = (event: any) => {
		setOpenMenu(true);
	};

	return (
		<AppBar
			position="relative"
			elevation={0}
			sx={{
				backgroundColor: "#000",
			}}
		>
			{/* Section Top */}
			<NavInnerTop />

			{/* Block menu navigation */}
			<MenuNavigation
				onMouseEnter={onHoverMenuItem}
				onMouseLeave={() => {
					setOpenMenu(false);
				}}
				onMouseEnterLink={(item) => setHoverItem(item)}
			/>

			{/* Popover Submenu items navigation */}
			{openMenu ? (
				<PopoverNavigation
					item={hoverItem}
					onMouseEnter={onHoverMenuItem}
					onMouseLeave={() => {
						setOpenMenu(false);
					}}
				/>
			) : null}
		</AppBar>
	);
};

export default Header;
