import { MouseEventHandler, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IMenuNavigation } from "../../../@data/MenuNavigations";
import styles from "./PopoverNavigation.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuListColumn from "./MenuListColumn";
import Container from "@mui/material/Container";

type Prop = {
	item: IMenuNavigation | null;
	onMouseEnter: MouseEventHandler;
	onMouseLeave: MouseEventHandler;
};

type gender = "m" | "w"; // men, women

const PopoverNavigation = ({ item, onMouseEnter, onMouseLeave }: Prop) => {
	const [activeGender, setActiveGender] = useState<gender>("m");

	return (
		<Box
			className={styles.menu}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			sx={{
				zIndex: 10,
			}}
		>
			<Box className={styles.menu_top}>
				<Typography variant="body2" color="initial">
					{item?.text.toUpperCase()}
				</Typography>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Typography
						variant="body2"
						color="initial"
						component="span"
						sx={{
							marginRight: 2,
							cursor: "pointer",
							paddingLeft: 1,
							paddingRight: 1,
							display: "flex",
						}}
						onClick={() => setActiveGender("m")}
					>
						{activeGender === "m" ? (
							<ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
						) : null}{" "}
						Hombres
					</Typography>
					<Typography
						className={
							activeGender === "w" ? "menu-gender--active" : ""
						}
						variant="body2"
						color="initial"
						component="span"
						sx={{
							cursor: "pointer",
							paddingLeft: 1,
							paddingRight: 1,
							display: "flex",
						}}
						onClick={() => setActiveGender("w")}
					>
						{activeGender === "w" ? (
							<ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
						) : null}{" "}
						Mujeres
					</Typography>
				</Box>
				<Box></Box>
			</Box>
			<Box>
				<Container maxWidth="lg">
					{activeGender === "m" ? (
						<MenuListColumn
							sections={item?.mens}
							keyItem="ropas"
						></MenuListColumn>
					) : null}

					{activeGender === "w" ? (
						<MenuListColumn
							sections={item?.women}
							keyItem="ropasx"
						></MenuListColumn>
					) : null}
				</Container>
			</Box>
		</Box>
	);
};

export default PopoverNavigation;
