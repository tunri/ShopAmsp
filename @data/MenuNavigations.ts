type NavLink = {
	text: string;
	// key: string;
};

type NavSection = {
	text: string;
	// key: string;
	links: NavLink[];
};

type NavCategory = {
	text: string;
	// key: string;
	sections: NavSection[];
};

export type IMenuNavigation = {
	text: string;
	key: string;
	categories: NavCategory[];
};

const DataMenuNavigation: IMenuNavigation[] = [
	{
		text: "Design",
		key: "design",
		categories: [
			{
				text: "Hombres",
				sections: [
					{
						text: "Diseñadores destacados",
						links: [],
					},
					{
						text: "Descubra diseñadores",
						links: [],
					},
				],
			},
			{
				text: "Mujeres",
				sections: [
					{
						text: "Diseñadores destacados",
						links: [],
					},
					{
						text: "Descubra diseñadores",
						links: [],
					},
				],
			},
		],
	},
	{
		text: "Prendas de Vestir",
		key: "clothing",
		categories: [],
	},
	{
		text: "Carteras & Accesorios",
		key: "handbagsAccessories",
		categories: [],
	},
	{
		text: "Zapatos",
		key: "shoes",
		categories: [],
	},
	{
		text: "joyerías",
		key: "jewelries",
		categories: [],
	},
	{
		text: "Ofertas",
		key: "offers",
		categories: [],
	},
];

export default DataMenuNavigation;
