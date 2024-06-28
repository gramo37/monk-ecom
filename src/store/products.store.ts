import { create } from "zustand";
import { TProduct } from "../types/products";
import { getRandomUniqueIdCrypto } from "../utils";

type TProductState = {
  products: TProduct[];
  setProducts: (products: TProduct[]) => void;
  selectedProductForEdit?: number;
  setSelectedProductForEdit: (
    selectedProductForEdit: number | undefined
  ) => void;
};

const productId = getRandomUniqueIdCrypto();
const imageId = getRandomUniqueIdCrypto();

const useProductsStore = create<TProductState>((set) => ({
  products: [
    {
      id: productId,
      title: "",
      variants: [],
      image: {
        id: imageId,
        product_id: productId,
        src: "",
      },
    },
  ],
  setProducts: (products: TProduct[]) => set({ products }),
  selectedProductForEdit: undefined,
  setSelectedProductForEdit: (selectedProductForEdit: number | undefined) =>
    set({ selectedProductForEdit }),
}));

export default useProductsStore;
