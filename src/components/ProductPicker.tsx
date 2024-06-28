import React, { useState } from "react";
import Modal from "react-modal";
import { TProduct } from "../types/products";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import useProductsStore from "../store/products.store";
import { products as prod } from "../constants";

interface ProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ProductPicker: React.FC<ProductModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const setProducts = useProductsStore((state) => state.setProducts);
  const storeProducts = useProductsStore((state) => state.products);
  const [selectedProducts, setSelectedProducts] = useState<TProduct[]>([]);
  const selectedProductForEdit = useProductsStore(
    (state) => state.selectedProductForEdit
  );
  let products = prod.filter(
    (product) => !storeProducts.find((prod) => prod.id === product.id)
  );

  const findProductById = (productId: number) =>
    products.find((p) => p.id === productId);

  const handleProductChange = (productId: number) => {
    setSelectedProducts((prevSelectedProducts) => {
      const isSelected = prevSelectedProducts.some((p) => p.id === productId);
      if (isSelected) {
        return prevSelectedProducts.filter((p) => p.id !== productId);
      } else {
        const product = findProductById(productId);
        if (product) {
          return [...prevSelectedProducts, product];
        }
      }
      return prevSelectedProducts;
    });
  };

  const handleVariantChange = (productId: number, variantId: number) => {
    setSelectedProducts((prevSelectedProducts) => {
      const productIndex = prevSelectedProducts.findIndex(
        (p) => p.id === productId
      );
      if (productIndex !== -1) {
        const product = prevSelectedProducts[productIndex];
        const variantIndex = product.variants.findIndex(
          (v) => v.id === variantId
        );
        let newVariants;
        if (variantIndex !== -1) {
          newVariants = product.variants.filter((v) => v.id !== variantId);
          if (newVariants.length === 0) {
            return prevSelectedProducts.filter((p) => p.id !== productId);
          }
        } else {
          newVariants = [
            ...product.variants,
            findProductById(productId)!.variants.find(
              (v) => v.id === variantId
            )!,
          ];
        }
        const newProducts = [...prevSelectedProducts];
        newProducts[productIndex] = { ...product, variants: newVariants };
        return newProducts;
      } else {
        const product = findProductById(productId);
        if (product) {
          return [
            ...prevSelectedProducts,
            {
              ...product,
              variants: [
                findProductById(productId)!.variants.find(
                  (v) => v.id === variantId
                )!,
              ],
            },
          ];
        }
      }
      return prevSelectedProducts;
    });
  };

  const isProductSelected = (productId: number) =>
    selectedProducts.some((p) => p.id === productId);

  const isVariantSelected = (productId: number, variantId: number) => {
    const selectedProduct = selectedProducts.find((p) => p.id === productId);
    return selectedProduct
      ? selectedProduct.variants.some((v) => v.id === variantId)
      : false;
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addProducts = () => {
    const newProducts = [];
    if (selectedProductForEdit === undefined) {
      setProducts([...storeProducts, ...selectedProducts]);
      setSelectedProducts([]);
      onRequestClose();
      return;
    }
    for (let i = 0; i < selectedProductForEdit; i++) {
      newProducts.push(storeProducts[i]);
    }
    for (let i = 0; i < selectedProducts.length; i++) {
      newProducts.push(selectedProducts[i]);
    }
    for (let i = selectedProductForEdit + 1; i < storeProducts.length; i++) {
      newProducts.push(storeProducts[i]);
    }
    setProducts(newProducts);
    setSelectedProducts([]);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => {
        onRequestClose();
        setSelectedProducts([]);
      }}
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg mx-5 w-full lg:w-1/2 max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl">Select Products</h2>
          <button
            onClick={() => {
              onRequestClose();
              setSelectedProducts([]);
            }}
          >
            <CloseIcon />
          </button>
        </div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <div className="max-h-80 overflow-y-auto">
          {filteredProducts.map((product) => (
            <div key={product.id} className="mb-4">
              <div className="mb-2 flex justify-start items-center border border-r-0 border-l-0 border-t-0">
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 30 },
                    border: "none",
                    outline: "none",
                    marginRight: "10px",
                    color: "gray",
                    "&.Mui-checked": {
                      color: "green",
                    },
                  }}
                  checked={isProductSelected(product.id)}
                  onChange={() => handleProductChange(product.id)}
                />
                <img
                  width={80}
                  height={80}
                  className="w-14 h-14 my-4 mx-1 mr-3"
                  src={product.image.src}
                  alt="product"
                />
                {product.title}
              </div>
              <div className="">
                {product.variants.map((variant) => (
                  <div
                    key={variant.id}
                    className="flex justify-between items-center border border-r-0 border-l-0 border-t-0"
                  >
                    <div className="py-2 pl-20">
                      <Checkbox
                        sx={{
                          "& .MuiSvgIcon-root": { fontSize: 28 },
                          border: "none",
                          outline: "none",
                          marginRight: "10px",
                          color: "gray",
                          "&.Mui-checked": {
                            color: "green",
                          },
                        }}
                        checked={isVariantSelected(product.id, variant.id)}
                        onChange={() =>
                          handleVariantChange(product.id, variant.id)
                        }
                      />
                      {variant.title}
                    </div>
                    <div className="mr-6">₹ {variant.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>{selectedProducts.length} selected</div>
          <div>
            <button
              onClick={() => {
                onRequestClose();
                setSelectedProducts([]);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              onClick={addProducts}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductPicker;
