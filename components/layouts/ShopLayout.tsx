import { FC, ReactNode } from "react";

import Head from "next/head";
import { Footer, Header } from "../ui";

import { IHead } from "../../@interfaces/IHead";

type Props = IHead & {
	children?: ReactNode | ReactNode[];
};

const ShopLayout: FC<Props> = ({ children, title, pageDescription }) => {
	return (
		<>
			<Head>
				<title>{title}</title>

				<meta name="description" content={pageDescription} />

				<meta name="og:title" content={title} />
				<meta name="og:description" content={pageDescription} />
			</Head>

			<Header />

			<main>{children}</main>

			<Footer />
		</>
	);
};

export default ShopLayout;
