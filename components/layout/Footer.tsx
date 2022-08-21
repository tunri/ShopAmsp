import NextLink from "next/link";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const FooterTitle = ({ text }: { text: string }) => (
	<Typography variant="body1" sx={{ fontWeight: 500, mb: 2 }}>
		{text}
	</Typography>
);

const FooterLink = ({ text }: { text: string }) => (
	<Box>
		<NextLink href="/">{text}</NextLink>
	</Box>
);

const Footer = () => {
	return (
		<Box component="footer" py={6} bgcolor="#eee">
			<Container maxWidth="lg">
				<Stack spacing={2} direction="row">
					<Box sx={{ flexGrow: 1 }}>
						<FooterTitle text="CUSTOMER CARE" />

						<Stack spacing={1}>
							<FooterLink text="Track an order" />
							<FooterLink text="Track an order" />
							<FooterLink text="Track an order" />
							<FooterLink text="Track an order" />
							<FooterLink text="Track an order" />
							<FooterLink text="Track an order" />
							<FooterLink text="Track an order" />
							<FooterLink text="Track an order" />
						</Stack>
					</Box>
					<Box sx={{ flexGrow: 1 }}>
						<FooterTitle text="ABOUT US" />

						<Stack spacing={1}>
							<FooterLink text="About AMSP" />
							<FooterLink text="About AMSP" />
							<FooterLink text="About AMSP" />
							<FooterLink text="About AMSP" />
							<FooterLink text="About AMSP" />
							<FooterLink text="About AMSP" />
						</Stack>
					</Box>
					<Box sx={{ flexGrow: 1 }}>
						<FooterTitle text="ABOUT US" />

						<Stack spacing={1}>
							<FooterLink text="About AMSP" />
							<FooterLink text="About AMSP" />
							<FooterLink text="About AMSP" />
							<FooterLink text="About AMSP" />
							<FooterLink text="About AMSP" />
							<FooterLink text="About AMSP" />
						</Stack>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
