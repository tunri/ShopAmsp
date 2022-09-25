import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Link from "next/link";

const activated = () => {
    
	return (
		<Box>
			<Container maxWidth="lg">
				<Alert severity="success">
					<AlertTitle>Success</AlertTitle>
					Ha sido activado con éxito. ¡Puede iniciar sesión ahora!{" "}
				</Alert>

				<Link href="/login">
					<a>Login</a>
				</Link>
			</Container>
		</Box>
	);
};

export default activated;
