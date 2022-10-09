import React from "react";
import NextLink from "next/link";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ISocialNetwork } from "../../@interfaces/ISocialNetwork";

interface IProps {
	socialNetwork: ISocialNetwork;
}

const LinkSocialNetwork = ({ socialNetwork }: IProps) => {
	const { Icon, text, website } = socialNetwork;

	return (
		<NextLink href={website}>
			<a target="_blank" rel="noopener noreferrer">
				<Tooltip title={text}>
					<IconButton aria-label={text}>
						<Icon />
					</IconButton>
				</Tooltip>
			</a>
		</NextLink>
	);
};

export default LinkSocialNetwork;
