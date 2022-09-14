import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IMenuNavigation } from "../../../@data/MenuNavigations";
import styles from "./PopoverNavigation.module.scss";

console.log(styles);

type Prop = {
	item: IMenuNavigation;
};

const PopoverNavigation = ({ item }: Prop) => {
	return (
		<Box className={styles.menu}>
			<Box className={styles.menu_top}>
				<Typography variant="body1" color="initial">
					{item?.text.toUpperCase()}
				</Typography>
				<Box>
					<Box sx={{ display: "flex", alignItems: "center" }}>
						<Typography
							variant="body1"
							color="initial"
							component="span"
							sx={{
								marginRight: 2,
								cursor: "pointer",
							}}
						>
							Hombres
						</Typography>
						<Typography
							variant="body1"
							color="initial"
							component="span"
							sx={{
								cursor: "pointer",
							}}
						>
							Mujeres
						</Typography>
					</Box>
				</Box>
				<Box></Box>
			</Box>
		</Box>
	);
};

export default PopoverNavigation;
