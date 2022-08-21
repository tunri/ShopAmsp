// export declare module "@mui/material/styles" {
// 	interface Theme {
// 		global: {
// 			wheel: React.CSSProperties["color"];
// 		};
// 	}

// 	interface ThemeOptions {
// 		global?: {
// 			wheel?: React.CSSProperties["color"];
// 		};
// 	}

// 	interface Palette {
// 		backdrop: Palette["primary"];
// 	}
// 	interface PaletteOptions {
// 		backdrop?: PaletteOptions["primary"];
// 	}
// }

export declare module "@mui/material/styles" {

	interface Palette {
		luxury: Palette["primary"];
	}
	interface PaletteOptions {
		luxury: PaletteOptions["primary"];
	}

	// interface Theme {
	// 	status: {
	// 		danger: string;
	// 	};
	// }
	// // allow configuration using `createTheme`
	// interface ThemeOptions {
	// 	status?: {
	// 		danger?: string;
	// 	};
	// }
}
