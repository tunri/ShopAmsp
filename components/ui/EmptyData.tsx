import { FC } from "react";
import Box from "@mui/system/Box";

type Props = {
	message?: string;
};

const DEFAULT_MESSAGE = "Datos no encontrados!";

const EmptyData: FC<Props> = ({ message }) => {
	const localMessage = message?.trim().length ? message : DEFAULT_MESSAGE;

	return <Box sx={{ p: 4, textAlign: "center" }}>{localMessage}</Box>;
};

export default EmptyData;
