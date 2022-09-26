import React from "react";
import IconButton from "@mui/material/IconButton";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";

const StyledMenu = styled((props: MenuProps) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		{...props}
	/>
))(({ theme }) => ({
	"& .MuiPaper-root": {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		width: 280,
		color:
			theme.palette.mode === "light"
				? "rgb(55, 65, 81)"
				: theme.palette.grey[300],
		boxShadow:
			"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
		"& .MuiMenu-list": {
			padding: "4px 0",
		},
		"& .MuiMenuItem-root": {
			"& .MuiSvgIcon-root": {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			"&:active": {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity
				),
			},
		},
	},
}));

const UserProfileMenu = () => {
	const router = useRouter();
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		window.localStorage.removeItem("token");
		setAnchorEl(null);
		router.push("/login");
	};

	return (
		<>
			<IconButton
				aria-label="Iniciar sesión"
				sx={{ color: "common.white" }}
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<PersonIcon />
			</IconButton>
			<StyledMenu
				sx={{ width: 320 }}
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{/* <MenuItem>Jerson Victor</MenuItem> */}
				{/* <Divider /> */}
				<MenuItem onClick={handleClose}>Profile</MenuItem>
				<MenuItem onClick={handleClose}>Mis ordenes</MenuItem>
				<MenuItem onClick={handleClose}>Gestionar direcciones</MenuItem>
				<MenuItem onClick={handleClose}>Delivery</MenuItem>
				<MenuItem onClick={handleClose}>Devoluciones</MenuItem>
				<Divider />
				<MenuItem onClick={handleLogout}>Cerrar sesion</MenuItem>
			</StyledMenu>
		</>
	);
};

export default UserProfileMenu;
