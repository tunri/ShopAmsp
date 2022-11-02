import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import MenuNavigation from "./MenuNavigation";
import PopoverNavigation from "./PopoverNavigation/PopoverNavigation";
import NavInnerTop from "./NavInnerTop";
import { IMenuNavigation } from "../../../@interfaces/IMenu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [hoverItem, setHoverItem] = useState<IMenuNavigation | null>(null);

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

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
			{matches && (
				<MenuNavigation
					onMouseEnter={onHoverMenuItem}
					onMouseLeave={() => {
						setOpenMenu(false);
					}}
					onMouseEnterLink={(item) => setHoverItem(item)}
				/>
			)}

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
