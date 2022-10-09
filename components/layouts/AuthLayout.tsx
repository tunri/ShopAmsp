import { FC, ReactNode } from "react";

import { IHead } from "../../@interfaces/IHead";
import { BoxPaddY } from "../../components-styled";
import ShopLayout from "./ShopLayout";
import Container from "@mui/material/Container";

type Props = IHead & {
	children?: ReactNode | ReactNode[];
};

const AuthLayout: FC<Props> = ({ children, title, pageDescription }) => {
	return (
		<ShopLayout title={title} pageDescription={pageDescription}>
			<BoxPaddY>
				<Container maxWidth="xs">
					{children}
				</Container>
			</BoxPaddY>
		</ShopLayout>
	);
};

export default AuthLayout;
