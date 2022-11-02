import { FC } from "react";

import NextLink from "next/link";
import Image from "next/image";

import Tooltip from "@mui/material/Tooltip";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import MenuLanguages from "../MenuLanguages";
import MenuUserProfile from "./MenuUserProfile";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Logo from "../../../public/images/logo.png";

type Props = {};

const NavInnerTop: FC<Props> = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up("md"));

	let token = null;
	if (typeof window !== "undefined") {
		token = window.localStorage.getItem("token");
	}

	return (
		<Toolbar
			sx={{
				flexWrap: "wrap",
				alignItems: "center",
				justifyContent: "space-between",
				paddingTop: matches ? 2 : 0,
			}}
		>
			<Box>
				{matches ? (
					<MenuLanguages sxColorLabel="white" />
				) : (
					<Tooltip title="Menu">
						<IconButton aria-label="menu" sx={{ color: "common.white" }}>
							<MenuIcon />
						</IconButton>
					</Tooltip>
				)}
			</Box>

			{matches && (
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
			)}

			<Stack direction="row" spacing={matches ? 1 : 0}>
				
				<Tooltip title="Favoritos">
					<IconButton aria-label="Favoritos" sx={{ color: "common.white" }}>
						<FavoriteBorder />
					</IconButton>
				</Tooltip>

				<Tooltip title="Carrito de compra">
					<IconButton
						aria-label="Carrito de compra"
						sx={{ color: "common.white" }}
					>
						<ShoppingCart />
					</IconButton>
				</Tooltip>

				{token ? (
					<MenuUserProfile />
				) : (
					<NextLink href="/auth/login">
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
	);
};

export default NavInnerTop;
