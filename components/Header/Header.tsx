import Image from "next/image";
import NextLink from "next/link";

import AppBar from "@mui/material/AppBar";
import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

import MenuLanguages from "../MenuLanguages";
import MenuNavigation from "./MenuNavigation";
import DataMenuNavigation, {
	IMenuNavigation,
} from "../../@data/MenuNavigations";
import PopoverNavigation from "./PopoverNavigation/PopoverNavigation";

// assets
import Logo from "../../public/images/logo.png";
import UserProfileMenu from "./UserProfileMenu";
import { useState } from "react";

const Header = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [hoverItem, setHoverItem] = useState<IMenuNavigation | null>(null);

	let token = null;
	if (typeof window !== "undefined") {
		token = window.localStorage.getItem("token");
	}

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
			<Toolbar
				sx={{
					flexWrap: "wrap",
					alignItems: "center",
					justifyContent: "space-between",
					paddingTop: 2,
				}}
			>
				<Box>
					<MenuLanguages sxColorLabel="white" />
				</Box>
				<Box
					sx={{
						maxWidth: 140,
					}}
				>
					<NextLink href="/" passHref>
						<Box component="a" sx={{ display: "block" }}>
							<Image
								src={Logo}
								alt="Asociación de Moda Sostenible del Perú"
							></Image>
						</Box>
					</NextLink>
				</Box>
				<Stack direction="row" spacing={3}>
					<IconButton
						aria-label="Favoritos"
						sx={{ color: "common.white" }}
					>
						<FavoriteBorder />
					</IconButton>
					<IconButton
						aria-label="Carrito de compra"
						sx={{ color: "common.white" }}
					>
						<ShoppingCart />
					</IconButton>

					{token ? (
						<UserProfileMenu />
					) : (
						<NextLink href="/login">
							<Tooltip title="Iniciar sesión">
								<IconButton
									aria-label="Iniciar sesión"
									sx={{ color: "common.white" }}
								>
									<PersonIcon />
								</IconButton>
							</Tooltip>
						</NextLink>
					)}
				</Stack>
			</Toolbar>

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
