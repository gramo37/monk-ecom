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
  image: {
    id: number;
    product_id: number;
    src: string;
  };
};