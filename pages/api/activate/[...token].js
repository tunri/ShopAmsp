import { useRouter } from "next/router";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const ActivateAccount = () => {
	const router = useRouter();
	const slug = (router.query.slug) || [];

	return (
		<Container maxWidth="lg">
			<Typography variant="body1" color="initial">
				Ha sido activado con éxito. ¡Puede iniciar sesión ahora!
			</Typography>
			<Link href="/login">
				<a>Login</a>
			</Link>
		</Container>
	);
};

export default ActivateAccount;



// export default async function activateUser(req, res) {
// 	const hash = req.query.hash;
// 	console.log(req, res);
// 	if (!hash) {
// 		return res.status(401).json({ message: 'Cannot Validate an User!' })
// 	}

// 	const response = await fetch(`http://localhost:3001/api/activate/user/${hash}`);

// 	console.log('xxxxx')
// 	if (response.status >= 400) {
// 		return res.status(401).json({ message: 'Cannot Validate an User!' })
// 	} else {
// 		res.writeHead(307, { Location: '/users/activated' });
// 		res.end();
// 	}
// }