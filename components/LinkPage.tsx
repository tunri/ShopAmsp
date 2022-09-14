import React from "react";
import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import { IFootMenuLink } from "../@interfaces/IMenu";

interface IProps {
	linkPage: IFootMenuLink;
	target?: string | null;
}

const LinkStyled = styled("a")(() => ({
	color: "#858585",
	fontSize: "14px",
	cursor: "pointer",
	":hover": {
		textDecoration: "underline",
	},
}));

const LinkPage = ({ linkPage, target }: IProps) => {
	const { text, website } = linkPage;

	return (
		<NextLink href={website}>
			<LinkStyled
				href={website}
				target={target || "_self"}
				rel="noopener noreferrer"
			>
				{text}
			</LinkStyled>
		</NextLink>
	);
};

export default LinkPage;
