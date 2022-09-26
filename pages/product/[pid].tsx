import { useRouter } from "next/router";
import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ProductDetail = () => {
	const router = useRouter();
	const { pid } = router.query;

	return (
		<Box py={4}>
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					<Grid item xs={12} md={6}>
						<Box>
                                product
                        </Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box>

                        </Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ProductDetail;
