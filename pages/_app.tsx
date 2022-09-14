import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

import "../styles/globals.scss";
import type { AppProps } from "next/app";

import { Layout } from "../components";
import theme from "../theme/theme";

function App({ Component, pageProps }: AppProps) {
	return (
		<CssBaseline>
			<ThemeProvider theme={theme}>
				<SnackbarProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SnackbarProvider>
			</ThemeProvider>
		</CssBaseline>
	);
}

export default App;
