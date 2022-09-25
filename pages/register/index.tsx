import type { NextPage } from "next";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import http from "../../helpers/http";
import dayjs from "dayjs";
import "dayjs/locale/es";
import Head from "next/head";
import Script from "next/script";
import ReCAPTCHA from "react-google-recaptcha";

// components
import NextLink from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ButtonLoading from "../../components/ButtonLoading";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

// utils
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { IFormRegister, INewUserRequest } from "../../models/authenticate";
import { mapToNewUserRequest } from "../../mappers/authenticate";
import ListErrors from "../../components/ListErrors/ListErrors";

const messageRequired = "Campo requerido";
const validationSchema: yup.SchemaOf<IFormRegister> = yup.object({
	email: yup
		.string()
		.email("Ingrese un correo válido")
		.required(messageRequired),
	password: yup
		.string()
		.required("Campo requerido")
		.max(50, "La campo debe tener máximo ${max} caracteres"),
	firstName: yup
		.string()
		.required("Campo requerido")
		.max(50, "El campo debe tener máximo ${max} caracteres"),
	lastName: yup
		.string()
		.required("Campo requerido")
		.max(50, "El campo debe tener máximo ${max} caracteres"),
	isSubscription: yup.boolean(),
	dayOfBirth: yup.object().required(messageRequired),
	phoneNumber: yup.string().required(messageRequired),
	recaptcha: yup.string().required(),
});

const initialState: IFormRegister = {
	email: "",
	password: "",
	firstName: "",
	lastName: "",
	isSubscription: false,
	dayOfBirth: "",
	phoneNumber: "",
	recaptcha: "",
};

const RegisterPage: NextPage = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<string[]>([]);
	const { enqueueSnackbar } = useSnackbar();

	const formik = useFormik<IFormRegister>({
		initialValues: initialState,
		validationSchema: validationSchema,
		onSubmit: (values) => {
			const date = values.dayOfBirth.$d;
			const valid = dayjs(date).isValid();
			if (valid) {
				handleRegister(mapToNewUserRequest(values));
			}
		},
	});

	const handleRegister = async (payload: INewUserRequest) => {
		try {
			setLoading(true);
			await http.post("/auth/users/", payload);
			enqueueSnackbar("Usuario registrado, revise su correo!", {
				variant: "success",
				autoHideDuration: 2000,
				anchorOrigin: {
					horizontal: "center",
					vertical: "top",
				},
			});
			router.push("/login");
		} catch (error) {
			setErrors(["Oops, ha ocurrido un problema!"]);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Head>
				<title>AMSP - Register</title>
			</Head>
			<Script
				src="https://www.google.com/recaptcha/api.js"
				async
				defer
			></Script>
			<Box py={4}>
				<Container sx={{ my: 8 }} maxWidth="xs">
					<ListErrors
						sx={{ mb: 3 }}
						errors={errors}
						onClose={() => setErrors([])}
					></ListErrors>

					<Typography variant="h4" mb={3}>
						Crear cuenta
					</Typography>
					<Box component="form" onSubmit={formik.handleSubmit}>
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

						<Box mb={1}>
							<TextField
								variant="filled"
								fullWidth
								id="password"
								name="password"
								label="Contraseña*"
								type={showPassword ? "text" : "password"}
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

						<Box mb={1}>
							<TextField
								variant="filled"
								fullWidth
								id="firstName"
								name="firstName"
								label="Nombres*"
								value={formik.values.firstName}
								onChange={formik.handleChange}
								error={
									formik.touched.firstName &&
									Boolean(formik.errors.firstName)
								}
								helperText={
									(formik.touched.firstName &&
										formik.errors.firstName) ||
									" "
								}
							/>
						</Box>

						<Box mb={1}>
							<TextField
								variant="filled"
								fullWidth
								id="lastName"
								name="lastName"
								label="Apellidos*"
								value={formik.values.lastName}
								onChange={formik.handleChange}
								error={
									formik.touched.lastName &&
									Boolean(formik.errors.lastName)
								}
								helperText={
									(formik.touched.lastName &&
										formik.errors.lastName) ||
									" "
								}
							/>
						</Box>

						<Box mb={1}>
							<TextField
								variant="filled"
								fullWidth
								id="phoneNumber"
								name="phoneNumber"
								label="Teléfono*"
								value={formik.values.phoneNumber}
								onChange={formik.handleChange}
								error={
									formik.touched.phoneNumber &&
									Boolean(formik.errors.phoneNumber)
								}
								helperText={
									(formik.touched.phoneNumber &&
										formik.errors.phoneNumber) ||
									" "
								}
							/>
						</Box>

						<Box mb={1}>
							<LocalizationProvider
								adapterLocale="es"
								dateAdapter={AdapterDayjs}
							>
								<DatePicker
									inputFormat="DD/MM/YYYY"
									value={formik.values.dayOfBirth}
									onChange={(value) =>
										formik.setFieldValue(
											"dayOfBirth",
											value
										)
									}
									renderInput={(params: any) => (
										<TextField
											variant="filled"
											fullWidth
											{...params}
											id="dayOfBirth"
											name="dayOfBirth"
											label="Fecha de Nacimiento*"
											error={
												formik.touched.dayOfBirth &&
												Boolean(
													formik.errors.dayOfBirth
												)
											}
											helperText={
												(formik.touched.dayOfBirth &&
													formik.errors.dayOfBirth) ||
												" "
											}
										/>
									)}
								/>
							</LocalizationProvider>
						</Box>

						<Box mb={2}>
							<FormControlLabel
								label="Quiero recibir noticias y ofertas"
								name="isSubscription"
								control={
									<Checkbox
										checked={formik.values.isSubscription}
										onChange={formik.handleChange}
										color="primary"
									/>
								}
							/>
						</Box>

						<Box>
							<ReCAPTCHA
								style={{
									display: "flex",
									justifyContent: "center",
									marginBottom: "24px",
								}}
								sitekey="6LfoQxkiAAAAAOU3Tzbyc2T7O7BdGdM7A4qLMFqX"
								onChange={(response: any) =>
									formik.setFieldValue("recaptcha", response)
								}
								// ref={reRef}
							/>
							{/* {formik.errors.recaptcha &&
								formik.touched.recaptcha && (
									<p>{formik.errors.recaptcha}</p>
								)} */}
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
							¿ Crear cuenta ?
						</ButtonLoading>
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
		</>
	);
};

export default RegisterPage;
