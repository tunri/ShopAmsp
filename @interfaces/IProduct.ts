import { Id } from "./Identifier";

type Image = {
  format?          : string;
  width?           : number;
  height?          : number;
  url?             : string;
};

export interface IProduct {
  id               : Id;
  isActive         : boolean;
  name             : string;
  description      : string;
  code             : string;
  price            : number;
  brand            : IBrand;
  images           : Image[];
  tags             : ITag[];
  variations       : IVariation[];
}

export interface IBrand {
  id               : Id;
  name             : string;
  organization     : number | null;
  slug             : string;
}

export interface ITag {
  name             : string;
  id               : Id;
}

export interface IVariation {
  id               : Id;
  identifier       : Identifier;
  keys             : string;
  stock            : number;
  events           : Event[];
}

export interface IEvent {
  id               : Id;
  typeEvent        : string;
  stock            : number;
  value            : number;
  productVariation : number;
}

export interface Identifier {
  size             : string;
}
