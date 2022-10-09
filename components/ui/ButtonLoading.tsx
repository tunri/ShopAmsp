import React from "react";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { styled } from "@mui/material/styles";

const CustomButton = styled(LoadingButton)`
	& .MuiCircularProgress-root {
		width: 20px !important;
		height: 20px !important;
	}
`;

type Props = LoadingButtonProps & {
	sizeIconLoader?: number;
	children?: React.ReactNode;
};

const ButtonLoading = (props: Props) => {
	const { sizeIconLoader, children, loading, ...rest } = props;
	return (
		<CustomButton
			loadingPosition={loading ? "start" : undefined}
			startIcon={loading ? <SaveIcon /> : null}
			loading={loading}
			{...rest}
		>
			{children}
		</CustomButton>
	);
};

export default ButtonLoading;
