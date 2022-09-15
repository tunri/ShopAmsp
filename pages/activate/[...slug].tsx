import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import NextLink from "next/link";
import Link from "@mui/material/Link";
import http from "../../helpers/http";

const ActivateUser = () => {
	const router = useRouter();

	const [loading, setLoading] = useState(false);
	const makeActivate = async () => {
		try {
			setLoading(true);
			const slug = (router.query.slug as string[]) || [];
			const [uid, token] = slug;
			const payload = { uid, token };
			const response = await http.post(
				"/auth/users/activation/",
				payload
			);
			console.log(response);
		} catch (error) {
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		makeActivate();
	}, []);

	return (
		<Box py={10}>
			<Container maxWidth="md">
				<Alert severity="success">
					<AlertTitle>Success</AlertTitle>
					Ha sido activado con éxito. ¡Puede iniciar sesión ahora!{" "}
				</Alert>

				<Box mt={5} sx={{ textAlign: "center" }}>
					<NextLink href="/login" passHref>
						<Link>Iniciar sesion</Link>
					</NextLink>
				</Box>
			</Container>
		</Box>
	);
};

export default ActivateUser;
