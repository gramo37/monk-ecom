import { off, flat_off } from "../constants"

export type TVariant = {
  id: number;
  product_id: number;
  title: string;
  price: string;
};

export type TProduct = {
  id: number;
  title: string;
  variants: TVariant[];
  discount?: number;
  discount_type?: typeof off | typeof flat_off
  image: {
    id: number;
    product_id: number;
    src: string;
  };
};