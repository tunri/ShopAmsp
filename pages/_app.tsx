import type { AppProps } from "next/app";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

import theme from "../theme/theme";
import "../styles/globals.scss";

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<SnackbarProvider>
				<Component {...pageProps} />
			</SnackbarProvider>
		</ThemeProvider>
	);
}

export default App;
