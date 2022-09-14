import { useState } from "react";
import type { NextPage } from "next";
import NextLink from "next/link";
import { useSnackbar } from "notistack";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import http from "../helpers/http";
import ButtonLoading from "../components/ButtonLoading";

const validationSchema = yup.object({
	email: yup
		.string()
		.email("Ingrese correo válido")
		.required("Campo requerido"),
	password: yup.string().required("Campo requerido"),
});

const Login: NextPage = () => {
	const { enqueueSnackbar } = useSnackbar();
	const [loading, setLoading] = useState(false);
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			handleLogin(values);
		},
	});

	const handleLogin = async (payload: any) => {
		try {
			setLoading(true);
			const response = await http.post("/auth/jwt/create", payload);
			enqueueSnackbar("Ha iniciado sesión!", {
				variant: "success",
				autoHideDuration: 4000,
				anchorOrigin: {
					horizontal: "center",
					vertical: "top",
				},
			});
		} catch (error) {
			enqueueSnackbar(
				"Ha ocurrido un error, inténtelo en otro momento!",
				{
					variant: "error",
					autoHideDuration: 4000,
					anchorOrigin: {
						horizontal: "center",
						vertical: "top",
					},
				}
			);
		} finally {
			setLoading(false);
		}
	};

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
							required
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
							id="password"
							name="password"
							type="password"
							required
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
					<ButtonLoading
						variant="contained"
						color="primary"
						loading={loading}
						fullWidth
						size="large"
						sx={{ height: 56 }}
						type="submit"
					>
						Iniciar sesión
					</ButtonLoading>
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
