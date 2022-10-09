export interface IFootMenuLink {
    key         : string | number;
    text        : string;
    website     : string;
    openNewTab? : boolean;
}


export type NavLink = {
    text        : string;
    // key      : string;
};

export type INavSection = {
    title       : string;
    // key      : string;
    links       : NavLink[];
};

// used in header
export type IMenuNavigation = {
    text        : string;
    key         : string;
    mens?       : INavSection[];
    women?      : INavSection[];
};