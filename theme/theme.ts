import { orange } from "@mui/material/colors";
import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
	palette: {
		primary: {
			main: "#000",
			light: "#333333",
			dark: "#000000",
			contrastText: "#fff",
		},
		secondary: {
			main: "#BE1E2D",
			light: "#CB4B57",
			dark: "#85151F",
			contrastText: "#fff",
		},
		luxury: {
			main: "#C7AD88",
			light: "#D2BD9F",
			dark: "#8B795F",
			contrastText: "#000",
		}
	},
});

export default theme;
