/**
 * Inserta padding en Top y Bottom, util para separar contenido y border, especialmente para paginas
 */

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const BoxPaddY = styled(Box)(({ theme }) => ({
	paddingTop: theme.spacing(4),
	paddingBottom: theme.spacing(4),
	[theme.breakpoints.up("md")]: {
		paddingTop: theme.spacing(6),
		paddingBottom: theme.spacing(6),
	},
	[theme.breakpoints.up("lg")]: {
		paddingTop: theme.spacing(7),
		paddingBottom: theme.spacing(7),
	},
}));
