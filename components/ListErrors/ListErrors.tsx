import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { SxProps } from "@mui/material";
import styles from "./ListErrors.module.scss";

type Props = {
	errors?: string[];
	title?: string;
	sx?: SxProps;
	onClose?:(event: React.SyntheticEvent) => void;
};

const initValues: Props = {
	errors: [],
	title: "Errores",
};

const ListErrors = (props: Props) => {
	const { errors, title, sx, onClose } = { ...initValues, ...props };

	if (!errors || !Array.isArray(errors) || !errors.length) return null;

	return (
		<Alert severity="error" sx={sx} onClose={onClose}>
			<AlertTitle>{title}</AlertTitle>
			<ul className={styles.list}>
				{errors.map((error, index) => (
					<li key={"error-" + index}>{error}</li>
				))}
			</ul>
		</Alert>
	);
};

export default ListErrors;
