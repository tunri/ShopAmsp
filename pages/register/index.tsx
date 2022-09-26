import type { NextPage } from "next";
import * as yup from "yup";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import { useEffect, useRef, useState } from "react";
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
import FormControlPassword from "../../components/forms/FormControlPassword";
import FormControlDatePicker from "../../components/forms/FormControlDatePicker";

// utils
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
	recaptcha: yup.string(),
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
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState<string[]>([]);
	const { enqueueSnackbar } = useSnackbar();

	const {
		values,
		touched,
		errors: errorsForm,
		setFieldValue,
		handleSubmit,
		handleChange,
	} = useFormik<IFormRegister>({
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
				autoHideDuration: 4000,
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
					<Box component="form" onSubmit={handleSubmit}>
						<Box mb={1}>
							<TextField
								variant="filled"
								fullWidth
								id="email"
								name="email"
								label="Email*"
								value={values.email}
								onChange={handleChange}
								error={
									touched.email && Boolean(errorsForm.email)
								}
								helperText={
									(touched.email && errorsForm.email) || " "
								}
							/>
						</Box>

						<Box mb={1}>
							<FormControlPassword
								fullWidth
								id="password"
								name="password"
								label="Contraseña*"
								value={values.password}
								onChange={handleChange}
								error={
									touched.password &&
									Boolean(errorsForm.password)
								}
								helperText={
									(touched.password && errorsForm.password) ||
									" "
								}
							/>
						</Box>

						<Box mb={1}>
							<TextField
								variant="filled"
								fullWidth
								id="firstName"
								name="firstName"
								label="Nombres*"
								value={values.firstName}
								onChange={handleChange}
								error={
									touched.firstName &&
									Boolean(errorsForm.firstName)
								}
								helperText={
									(touched.firstName &&
										errorsForm.firstName) ||
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
								value={values.lastName}
								onChange={handleChange}
								error={
									touched.lastName &&
									Boolean(errorsForm.lastName)
								}
								helperText={
									(touched.lastName && errorsForm.lastName) ||
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
								value={values.phoneNumber}
								onChange={handleChange}
								error={
									touched.phoneNumber &&
									Boolean(errorsForm.phoneNumber)
								}
								helperText={
									(touched.phoneNumber &&
										errorsForm.phoneNumber) ||
									" "
								}
							/>
						</Box>

						<Box mb={1}>
							<FormControlDatePicker
								valueDatePicker={values.dayOfBirth}
								onChangeDatePicker={(value) =>
									setFieldValue("dayOfBirth", value)
								}
								fullWidth
								id="dayOfBirth"
								name="dayOfBirth"
								label="Fecha de Nacimiento*"
								error={
									touched.dayOfBirth &&
									Boolean(errorsForm.dayOfBirth)
								}
								helperTextDatePicker={
									(touched.dayOfBirth &&
										errorsForm.dayOfBirth) ||
									" "
								}
							/>
						</Box>

						<Box mb={2}>
							<FormControlLabel
								label="Quiero recibir noticias y ofertas"
								name="isSubscription"
								control={
									<Checkbox
										checked={values.isSubscription}
										onChange={handleChange}
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
									setFieldValue("recaptcha", response)
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
