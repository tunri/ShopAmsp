import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LinkPage from "../LinkPage";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import { BoxPaddY } from "../../components-styled/BoxStyled";
import { ABOUT_US, CUSTOMER_CARE } from "../../@data/FootMenuLinks";

const TitleMenu = ({ text }: { text: string }) => {
	return (
		<Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
			{text}
		</Typography>
	);
};

const getItemsLink = (list: any[]) => {
	return list.map((item) => (
		<Box key={item.key} component="li">
			<LinkPage
				linkPage={item}
				target={item.openNewTab ? "_target" : null}
			/>
		</Box>
	));
};

const FooterNavigation = () => {
	return (
		<BoxPaddY>
			<Container maxWidth="lg">
				<Box>
					<Grid container spacing={1}>
						<Grid item xs={12} md={4}>
							<TitleMenu text="CUSTOMER CARE" />

							{/* Block List Social Networks */}
							<Stack
								direction="column"
								spacing={1}
								component="ul"
							>
								{CUSTOMER_CARE.length > 0
									? getItemsLink(CUSTOMER_CARE)
									: null}
							</Stack>
							{/* End Block List Social Networks */}
						</Grid>
						<Grid item xs={12} md={4}>
							<TitleMenu text="ABOUT US" />

							{/* Block List Social Networks */}
							<Stack
								direction="column"
								spacing={1}
								component="ul"
							>
								{ABOUT_US.length > 0
									? getItemsLink(ABOUT_US)
									: null}
							</Stack>
							{/* End Block List Social Networks */}
						</Grid>
						<Grid item xs={12} md={4}>
							<TitleMenu text="AMSP" />
							<Typography variant="body2" color="#888">
								Shop from over 500 of the worlds finest luxury
								designer brands & be dressed for any occasion
							</Typography>
							<Divider textAlign="left" sx={{ my: 3 }}>
								<Typography variant="caption" color="#888">
									TARJETAS ACEPTADAS
								</Typography>
							</Divider>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</BoxPaddY>
	);
};

export default FooterNavigation;
