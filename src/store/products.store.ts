import { create } from "zustand";
import { TProduct } from "../types/products";

type TProductState = {
  products: TProduct[];
  setProducts: (products: TProduct[]) => void;
  selectedProductForEdit?: number;
  setSelectedProductForEdit: (selectedProductForEdit: number | undefined) => void;
};

const useProductsStore = create<TProductState>((set) => ({
  products: [],
  setProducts: (products: TProduct[]) => set({ products }),
  selectedProductForEdit: undefined,
  setSelectedProductForEdit: (selectedProductForEdit: number | undefined) => set({ selectedProductForEdit }),
}));

export default useProductsStore;