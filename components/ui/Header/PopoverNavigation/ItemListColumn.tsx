import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/system/Box";
import { NavLink } from "../../../../@interfaces/IMenu";


type Props = {
	title: string;
	links: NavLink[];
};

const ItemListColumn = ({ title, links }: Props) => {
	return (
		<Box>
			<Typography variant="body1" color="initial" mb={2}>
				{title}
			</Typography>
			<Stack spacing={2}>
				{links &&
					links.map((link) => (
						<Typography key={link.text} variant="body2">
							{link.text}
						</Typography>
					))}
			</Stack>
		</Box>
	);
};

export default ItemListColumn;
