import type { NextPage } from "next";
import NextLink from "next/link";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const validationSchema = yup.object({
	email: yup
		.string()
		.email("Ingrese email valido")
		.required("Email es requerido"),
	password: yup.string().required("Contraseña es requerido"),
});

const Login: NextPage = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<Box py={4}>
			<Container sx={{ my: 8 }} maxWidth="xs">
				<Typography variant="h4" mb={3}>
					Iniciar sesión
				</Typography>
				<Box component="form" onSubmit={formik.handleSubmit}>
					<Box mb={4}>
						<TextField
							fullWidth
							id="email"
							name="email"
							label="Email"
							value={formik.values.email}
							onChange={formik.handleChange}
							error={
								formik.touched.email &&
								Boolean(formik.errors.email)
							}
							helperText={
								formik.touched.email && formik.errors.email
							}
						/>
					</Box>

					<Box mb={4}>
						<TextField
							fullWidth
							id="passowrd"
							name="passowrd"
							label="Contraseña"
							value={formik.values.password}
							onChange={formik.handleChange}
							error={
								formik.touched.password &&
								Boolean(formik.errors.password)
							}
							helperText={
								formik.touched.password &&
								formik.errors.password
							}
						/>
					</Box>

					<Button
						variant="contained"
						color="primary"
						fullWidth
						size="large"
						sx={{ height: 56 }}
						type="submit"
					>
						Iniciar sesión
					</Button>
				</Box>
				<Box my={3}>
					<Divider />
				</Box>
				<Box>
					<Typography variant="body1" align="center" mb={1}>
						¿ No tienes una cuenta ?
					</Typography>
					<NextLink href="/register">
						<Button
							variant="outlined"
							fullWidth
							size="large"
							type="submit"
						>
							crear cuenta
						</Button>
					</NextLink>
				</Box>
			</Container>
		</Box>
	);
};

export default Login;
