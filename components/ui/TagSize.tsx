import { styled } from "@mui/material/styles";
import { FC } from "react";

const Item = styled("span")(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: "10px 4px",
	textAlign: "center",
	color: theme.palette.text.secondary,
	display: "inline-block",
	height: 40,
	border: "1px solid #e5e5e5",
	borderRadius: 2,
	width: "100%",
	cursor: "pointer",
	":hover": {
		borderColor: theme.palette.secondary.main,
		color: theme.palette.secondary.main,
	},
}));

type Props = {
	children: React.ReactNode;
};

const TagSize: FC<Props> = ({ children }) => {
	return <Item>{children}</Item>;
};

export default TagSize;
