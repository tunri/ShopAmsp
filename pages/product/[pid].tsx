import { useRouter } from "next/router";
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import ButtonLoading from "../../components/ButtonLoading";

const ProductDetail = () => {
	const router = useRouter();
	const { pid } = router.query;

	return (
		<Box py={4}>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					<Grid item xs={12} md={6}>
						<Box>
							<img
								src="https://i.imgur.com/tTEplrf.jpeg"
								alt=""
							/>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box>
							<Typography variant="h4" mb={1}>
								Nombre del producto
							</Typography>
							<Typography variant="body1" mb={1}>
								Descripción del producto
							</Typography>
							<Typography
								variant="body1"
								mb={2}
								sx={{ fontWeight: 700 }}
							>
								$500
							</Typography>
							<Stack direction="row" spacing={1} mb={2}>
								<Typography variant="body2" color="#777">
									Color:
								</Typography>
								<Typography variant="body2">White</Typography>
							</Stack>
							<Stack direction="row" spacing={1}>
								<Typography variant="body2" color="#777">
									Size:
								</Typography>
								<Typography variant="body2">Medium</Typography>
							</Stack>
							<Typography variant="body1" mb={3} mt={2}>
								Descripción de la talla
							</Typography>
							<ButtonLoading
								variant="contained"
								color="primary"
								fullWidth
								size="large"
								sx={{ height: 40 }}
								type="submit"
							>
								Add to Bag
							</ButtonLoading>
							<Box my={2} />
							<ButtonLoading
								variant="outlined"
								color="primary"
								fullWidth
								size="large"
								sx={{ height: 40 }}
								type="submit"
							>
								Add to Wish List
							</ButtonLoading>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ProductDetail;
