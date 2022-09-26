import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";

export const AccordionStyled = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	borderTop: `1px solid ${theme.palette.divider}`,
	borderBottom: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

export const AccordionSummaryStyled = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary {...props} />
))(({ theme }) => ({
	paddingLeft: 0,
	paddingRight: 0,
	backgroundColor: "white",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(180deg)",
	},
	"& p": {
		fontWeight: 500,
		textTransform: "uppercase",
		fontSize: "14px",
	},
}));

export const AccordionDetailsStyled = styled(MuiAccordionDetails)(
	({ theme }) => ({
		padding: theme.spacing(2),
		borderTop: "1px solid rgba(0, 0, 0, .125)",
	})
);

export const OptionFilterStyled = styled(Box)(({ theme }) => ({
	fontSize: 13,
	paddingTop: 8,
	paddingBottom: 8,
	display: "flex",
	alignItems: "center",
	"& .MuiCheckbox-root": {
		padding: 0,
		marginRight: 8,
	},
}));
