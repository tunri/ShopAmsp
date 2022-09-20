import { useState } from "react";
import type { NextPage } from "next";
import NextLink from "next/link";
import * as yup from "yup";

import { useSnackbar } from "notistack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import http from "../../helpers/http";
import IconButton from "@mui/material/IconButton";
import ButtonLoading from "../../components/ButtonLoading";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ListErrors from "../../components/ListErrors/ListErrors";

const validationSchema = yup.object({
	email: yup
		.string()
		.email("Por favor, ingrese un correo válido")
		.required("Campo requerido"),
	password: yup
		.string()
		.required("Campo requerido")
		.max(50, "La contraseña debe tener máximo ${max} caracteres"),
});

const Login: NextPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState<string[]>([]);
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
			await http.post("/auth/jwt/create", payload);
			enqueueSnackbar("Ha iniciado sesión!", {
				variant: "success",
				autoHideDuration: 4000,
				anchorOrigin: {
					horizontal: "center",
					vertical: "top",
				},
			});
		} catch (error) {
			setErrors(["Oops, ha ocurrido un problema!"]);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box py={4}>
			<Container sx={{ my: 8 }} maxWidth="xs">

				<ListErrors
					sx={{ mb: 3 }}
					errors={errors}
					onClose={() => setErrors([])}
				></ListErrors>

				<Typography variant="h4" mb={3}>
					Iniciar sesión
				</Typography>
				<Box component="form" onSubmit={formik.handleSubmit}>
					<Box mb={2}>
						<Box mb={1}>
							<TextField
								variant="filled"
								fullWidth
								id="email"
								name="email"
								label="Email*"
								value={formik.values.email}
								onChange={formik.handleChange}
								error={
									formik.touched.email &&
									Boolean(formik.errors.email)
								}
								helperText={
									(formik.touched.email &&
										formik.errors.email) ||
									" "
								}
							/>
						</Box>

						<Box>
							<TextField
								variant="filled"
								fullWidth
								id="password"
								name="password"
								type={showPassword ? "text" : "password"}
								label="Contraseña*"
								value={formik.values.password}
								onChange={formik.handleChange}
								error={
									formik.touched.password &&
									Boolean(formik.errors.password)
								}
								helperText={
									(formik.touched.password &&
										formik.errors.password) ||
									" "
								}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												edge="end"
												onClick={() =>
													setShowPassword(
														!showPassword
													)
												}
											>
												{showPassword ? (
													<VisibilityOff />
												) : (
													<Visibility />
												)}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
						</Box>
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
							sx={{ height: 50 }}
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
