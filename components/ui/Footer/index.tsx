import React from "react";
import Box from "@mui/material/Box";
import FooterSubscription from "./FooterSubscription";
import FooterNavigation from "./FooterNavigation";

const Footer = () => {
	return (
		<Box component="footer">
			{/* BLOCK SUBSCRIPTION */}
			<FooterSubscription />
			{/* BLOCK NAVIGATION */}
			<FooterNavigation />
		</Box>
	);
};

export default Footer;
