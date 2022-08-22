import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface ISocialNetwork {
	key: string;
	text: string;
	Icon: OverridableComponent<any>;
	website: string;
}
