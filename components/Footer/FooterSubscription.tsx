import React from "react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { SOCIAL_NETWORKS } from "../../@data/SocialNetwork";
import LinkSocialNetwork from "../LinkSocialNetwork";
import Grid from "@mui/material/Grid";

const BoxStyled = styled(Box)(({ theme }) => ({
	paddingTop: theme.spacing(4),
	paddingBottom: theme.spacing(4),
	backgroundColor: "#f1f1f1",
	[theme.breakpoints.up("md")]: {
		paddingTop: theme.spacing(6),
		paddingBottom: theme.spacing(6),
	},
	[theme.breakpoints.up("lg")]: {
		paddingTop: theme.spacing(7),
		paddingBottom: theme.spacing(7),
	},
}));

const BoxLeftStyled = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {
		maxWidth: 600,
	},
}));

const FooterSubscription = () => {
	return (
		<BoxStyled>
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={12} md={6} lg={8}>
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
									<Grid item xs={12} sm={8}>
										<TextField
											sx={{
												backgroundColor: "#fff",
											}}
											fullWidth
											id="email"
											name="email"
											label="tu@email.com"
										/>
									</Grid>
									<Grid item xs={12} sm>
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
										variant="body2"
										component="span"
										color="#444"
									>
										Síguenos en
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
					<Grid item xs={12} md={6} lg={4}>
						<Box>
							<Typography
								variant="subtitle1"
								sx={{ fontWeight: 500 }}
							>
								Comunícate con nosotros
							</Typography>
							<Box>
								<Stack direction="row" spacing={1}>
									<Typography variant="body1" color="#777">
										+51 925667668
									</Typography>

									<Divider orientation="vertical" />

									<Typography variant="body1" color="#777">
										customer@email.pe
									</Typography>
								</Stack>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</BoxStyled>
	);
};

export default FooterSubscription;
