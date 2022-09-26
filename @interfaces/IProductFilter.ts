export type IFilterOption = {
    id?     : string | number;
    text    : string;
};

export type IFilterProduct = {
    keyId   : string | number;
    name    : string;
    options : IFilterOption[];
    index?  : number;
};
