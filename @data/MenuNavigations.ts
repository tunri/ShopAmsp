export type NavLink = {
	text: string;
	// key: string;
};

export type INavSection = {
	title: string;
	// key: string;
	links: NavLink[];
};

export type IMenuNavigation = {
	text: string;
	key: string;
	mens?: INavSection[];
	women?: INavSection[];
};

const DataMenuNavigation: IMenuNavigation[] = [
	{
		text: "Design",
		key: "design",
		mens: [
			{
				title: "Diseñadores destacados",
				links: [
					{ text: "Pedro" },
					{ text: "Juan" },
					{ text: "Erick" },
				],
			},
			{
				title: "Descubra diseñadores",
				links: [
					{ text: "Martin" },
					{ text: "Owen" },
					{ text: "Marcus" },
				],
			},
		],
		women: [
			{
				title: "Diseñadores destacados",
				links: [
					{ text: "Leticia" },
					{ text: "Rosas" },
					{ text: "Romina" },
				],
			},
			{
				title: "Descubra diseñadores",
				links: [
					{ text: "Khatie" },
					{ text: "Loewe" },
					{ text: "Alaia" },
				],
			},
		],
	},
	{
		text: "Prendas de Vestir",
		key: "clothing",
	},
	{
		text: "Carteras & Accesorios",
		key: "handbagsAccessories",
	},
	{
		text: "Zapatos",
		key: "shoes",
	},
	{
		text: "joyerías",
		key: "jewelries",
	},
	{
		text: "Ofertas",
		key: "offers",
	},
];

export default DataMenuNavigation;
