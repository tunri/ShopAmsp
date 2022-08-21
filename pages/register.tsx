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
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const messageRequired = "Campo requerido";

const validationSchema = yup.object({
	email: yup.string().email("Ingrese email valido").required(messageRequired),
	password: yup.string().required(messageRequired),
	firstName: yup.string().required(messageRequired),
	lastName: yup.string().required(messageRequired),
	subscription: yup.boolean(),
});

const RegisterPage: NextPage = () => {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			subscription: false,
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
					Crear cuenta
				</Typography>
				<Box component="form" onSubmit={formik.handleSubmit}>
					<Box mb={3}>
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

					<Box mb={3}>
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

					<Box mb={3}>
						<TextField
							fullWidth
							id="firstName"
							name="firstName"
							label="Nombres"
							value={formik.values.firstName}
							onChange={formik.handleChange}
							error={
								formik.touched.firstName &&
								Boolean(formik.errors.firstName)
							}
							helperText={
								formik.touched.firstName &&
								formik.errors.firstName
							}
						/>
					</Box>

					<Box mb={3}>
						<TextField
							fullWidth
							id="lastName"
							name="lastName"
							label="Apellidos"
							value={formik.values.lastName}
							onChange={formik.handleChange}
							error={
								formik.touched.lastName &&
								Boolean(formik.errors.lastName)
							}
							helperText={
								formik.touched.lastName &&
								formik.errors.lastName
							}
						/>
					</Box>

					<Box mb={2}>
						<FormControlLabel
							label="Quiero recibir noticias y ofertas"
							control={
								<Checkbox
									checked={formik.values.subscription}
									onChange={formik.handleChange}
									color="primary"
								/>
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
						¿ Crear cuenta?
					</Button>
				</Box>
				<Box mt={4} mb={3}>
					<Divider />
				</Box>
				<Box>
					<Typography variant="body1" align="center" mb={1}>
						Ya tienes una cuenta
					</Typography>
					<NextLink href="/login">
						<Button
							variant="outlined"
							fullWidth
							size="large"
							type="submit"
						>
							iniciar sesión
						</Button>
					</NextLink>
				</Box>
			</Container>
		</Box>
	);
};

export default RegisterPage;
