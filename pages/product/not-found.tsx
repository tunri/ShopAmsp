import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";

const NotFoundProductPage = () => {
	return (
		<ShopLayout
			title="Producto No Encontrado"
			pageDescription="No hay nada que mostrar aquí"
		>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="calc(100vh - 200px)"
				sx={{ flexDirection: { xs: "column", sm: "row" } }}
			>
				<Typography
					variant="h1"
					component="h1"
					fontSize={80}
					fontWeight={200}
				>
					404 |
				</Typography>
				<Typography marginLeft={2}>
					No encontramos ningun producto aquí
				</Typography>
			</Box>
		</ShopLayout>
	);
};

export default NotFoundProductPage;