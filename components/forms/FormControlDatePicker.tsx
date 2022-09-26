import React, { ReactNode } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type Props = TextFieldProps & {
	valueDatePicker: unknown;
	onChangeDatePicker: (
		value: any,
		keyboardInputValue?: string | undefined
	) => void;
	helperTextDatePicker?: any;
};

const FormControlDatePicker = ({
	valueDatePicker,
	onChangeDatePicker,
	helperTextDatePicker,
	...propsTextField
}: Props) => {
	return (
		<LocalizationProvider adapterLocale="es" dateAdapter={AdapterDayjs}>
			<DatePicker
				inputFormat="DD/MM/YYYY"
				value={valueDatePicker}
				onChange={onChangeDatePicker}
				renderInput={(params: any) => (
					<TextField
						{...params}
						variant="filled"
						helperText={helperTextDatePicker}
						{...propsTextField}
					/>
				)}
			/>
		</LocalizationProvider>
	);
};

export default FormControlDatePicker;
