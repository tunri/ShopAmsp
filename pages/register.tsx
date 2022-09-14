import type { NextPage } from "next";
import NextLink from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import http from "../helpers/http";
import { useRouter } from 'next/router'

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "dayjs/locale/es";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSnackbar } from "notistack";

import { IFormRegister, INewUserRequest } from "../models/authenticate";
import { mapToNewUserRequest } from "../mappers/authenticate";
import { useState } from "react";
import ButtonLoading from "../components/ButtonLoading";
import dayjs from "dayjs";

const messageRequired = "Campo requerido";

const validationSchema: yup.SchemaOf<IFormRegister> = yup.object({
	email: yup.string().email("Ingrese email valido").required(messageRequired),
	password: yup.string().required(messageRequired),
	firstName: yup.string().required(messageRequired),
	lastName: yup.string().required(messageRequired),
	isSubscription: yup.boolean(),
	dayOfBirth: yup.object().required(messageRequired),
	phoneNumber: yup.string().required(messageRequired),
});

const initialState: IFormRegister = {
	email: "",
	password: "",
	firstName: "",
	lastName: "",
	isSubscription: false,
	dayOfBirth: "",
	phoneNumber: "",
};

const RegisterPage: NextPage = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
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
			const response = await http.post("/auth/users/", payload);
			enqueueSnackbar("Usuario registrado, revise su correo!", {
				variant: "success",
				autoHideDuration: 4000,
				anchorOrigin: {
					horizontal: "center",
					vertical: "top",
				},
			});
			router.push('/login');
		} catch (error) {
			enqueueSnackbar("Ha ocurrido un error, inténtelo en otro momento!", {
				variant: "error",
				autoHideDuration: 4000,
				anchorOrigin: {
					horizontal: "center",
					vertical: "top",
				},
			});
		} finally {
			setLoading(false);
		}
	};

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
							required
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
							id="password"
							name="password"
							label="Contraseña"
							type="password"
							required
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
							required
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
							required
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

					<Box mb={3}>
						<TextField
							fullWidth
							id="phoneNumber"
							name="phoneNumber"
							label="Teléfono"
							required
							value={formik.values.phoneNumber}
							onChange={formik.handleChange}
							error={
								formik.touched.phoneNumber &&
								Boolean(formik.errors.phoneNumber)
							}
							helperText={
								formik.touched.phoneNumber &&
								formik.errors.phoneNumber
							}
						/>
					</Box>

					<Box mb={3}>
						<LocalizationProvider
							adapterLocale="es"
							dateAdapter={AdapterDayjs}
						>
							<DatePicker
								inputFormat="DD/MM/YYYY"
								value={formik.values.dayOfBirth}
								onChange={(value) =>
									formik.setFieldValue("dayOfBirth", value)
								}
								renderInput={(params: any) => (
									<TextField
										fullWidth
										{...params}
										id="dayOfBirth"
										name="dayOfBirth"
										required
										label="Fecha de Nacimiento"
										error={false}
									/>
								)}
							/>
						</LocalizationProvider>
					</Box>

					<Box mb={2}>
						<FormControlLabel
							label="Quiero recibir noticias y ofertas"
							control={
								<Checkbox
									checked={formik.values.isSubscription}
									onChange={formik.handleChange}
									color="primary"
								/>
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
	);
};

export default RegisterPage;
