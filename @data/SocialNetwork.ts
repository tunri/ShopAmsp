import { ISocialNetwork } from "../@interfaces/ISocialNetwork";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const SOCIAL_NETWORKS: ISocialNetwork[] = [
	{
		text: "Youtube",
		key: "youtube",
		website: "https://www.net-a-porter.com/en-us/",
		Icon: YouTubeIcon,
	},
	{
		key: "facebook",
		text: "Facebook",
		website: "https://www.net-a-porter.com/en-us/",
		Icon: FacebookIcon,
	},
	{
		key: "twitter",
		text: "Twitter",
		website: "https://www.net-a-porter.com/en-us/",
		Icon: TwitterIcon,
	},
	{
		key: "instagram",
		text: "Instagram",
		website: "https://www.net-a-porter.com/en-us/",
		Icon: InstagramIcon,
	},
];
