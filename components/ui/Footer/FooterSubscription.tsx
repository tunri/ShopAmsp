import React from "react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import LinkSocialNetwork from "../LinkSocialNetwork";
import MenuLanguages from "../MenuLanguages";

import { SOCIAL_NETWORKS } from "../../../@data/SocialNetwork";
import { BoxPaddY } from "../../../components-styled/BoxStyled";

const BoxLeftStyled = styled(Box)(() => ({
	maxWidth: 600,
}));

const BoxRightStyled = styled(Box)(({ theme }) => ({
	maxWidth: 600,
	[theme.breakpoints.up("md")]: {
		paddingLeft: "4rem",
	},
	[theme.breakpoints.up("lg")]: {
		paddingLeft: "8rem",
	},
}));

const FooterSubscription = () => {
	return (
		<BoxPaddY sx={{ backgroundColor: "#f1f1f1" }}>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<BoxLeftStyled>
							<Typography
								variant="subtitle1"
								sx={{ fontWeight: 500 }}
							>
								10% DE DESCUENTO CUANDO TE REGISTRAS
							</Typography>
							<Typography
								variant="body2"
								mt={1}
								mb={2}
								color="#777"
							>
								Stay in the loop with the latest style news and
								get an exclusive 10% off when you subscribe to
								our emails. Learn more about our Privacy Policy
								here
							</Typography>
							<Box mb={3}>
								<Grid container spacing={2}>
									<Grid item xs={8}>
										<TextField
											sx={{
												backgroundColor: "#fff",
											}}
											fullWidth
											id="userEmail"
											name="userEmail"
											label="tu@email.com"
										/>
									</Grid>
									<Grid item xs>
										<Button
											fullWidth
											variant="contained"
											color="primary"
											sx={{ height: 56 }}
										>
											Enviar
										</Button>
									</Grid>
								</Grid>
							</Box>
							<Box>
								<Divider textAlign="left" sx={{ mb: 1 }}>
									<Typography
										variant="caption"
										component="span"
										color="#888"
									>
										SIGUENOS EN
									</Typography>
								</Divider>

								{/* Block List Social Networks */}
								<Stack direction="row" spacing={1}>
									{SOCIAL_NETWORKS.length > 0
										? SOCIAL_NETWORKS.map((item) => (
												<LinkSocialNetwork
													socialNetwork={item}
													key={item.key}
												/>
										  ))
										: null}
								</Stack>
								{/* End Block List Social Networks */}
							</Box>
						</BoxLeftStyled>
					</Grid>
					<Grid item xs={12} md={6}>
						<BoxRightStyled>
							<Box mb={3}>
								<Typography
									variant="subtitle1"
									sx={{ fontWeight: 500, mb: 1 }}
								>
									COMUNICATE CON NOSOTROS
								</Typography>
								<Box>
									<Stack direction="row" spacing={1}>
										<Typography
											variant="body1"
											color="#777"
										>
											+51 925667668
										</Typography>

										<Divider orientation="vertical" />

										<Typography
											variant="body1"
											color="#777"
										>
											customer@email.pe
										</Typography>
									</Stack>
								</Box>
							</Box>
							<Box>
								<Typography
									variant="subtitle1"
									sx={{ fontWeight: 500, mb: 1 }}
								>
									UBICACION Y LENGUAJE
								</Typography>
								<Box>
									<MenuLanguages sxColorLabel="#777" />
								</Box>
							</Box>
						</BoxRightStyled>
					</Grid>
				</Grid>
			</Container>
		</BoxPaddY>
	);
};

export default FooterSubscription;
