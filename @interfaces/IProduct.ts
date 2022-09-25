import { StaticImageData } from "next/image";

export interface IProduct {
    id?   : string | number;
    name  : string;
    price : string;
    image : StaticImageData;
}
