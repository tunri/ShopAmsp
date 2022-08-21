import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Layout } from "../components";
import theme from "../theme/theme";

function App({ Component, pageProps }: AppProps) {
	return (
		<CssBaseline>
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</CssBaseline>
	);
}

export default App;
