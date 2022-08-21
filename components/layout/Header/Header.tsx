import Image from "next/image";
import NextLink from "next/link";

import AppBar from "@mui/material/AppBar";
import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

import MenuLanguages from "../../MenuLanguages";
import MenuNavigation from "./MenuNavigation";

// assets
import Logo from "../../../public/images/logo.png";
import UserProfileMenu from "./UserProfileMenu";

const Header = () => {
	return (
		<AppBar
			position="static"
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
					<MenuLanguages />
				</Box>
				<Box
					sx={{
						maxWidth: 140,
					}}
				>
					<Image
						src={Logo}
						alt="Asociación de Moda Sostenible del Perú"
					/>
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

					<UserProfileMenu />
				</Stack>
			</Toolbar>

			<MenuNavigation />
		</AppBar>
	);
};

export default Header;
