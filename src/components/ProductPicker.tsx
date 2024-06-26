import React, { useState } from "react";
import Modal from "react-modal";

interface Variant {
  id: number;
  product_id: number;
  title: string;
  price: string;
}

interface Product {
  id: number;
  title: string;
  variants: Variant[];
  image: {
    id: number;
    product_id: number;
    src: string;
  };
}

interface ProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  products: Product[];
}

const ProductPicker: React.FC<ProductModalProps> = ({
  isOpen,
  onRequestClose,
  products,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVariants, setSelectedVariants] = useState<number[]>([]);

  const toggleVariantSelection = (variantId: number) => {
    setSelectedVariants((prev) =>
      prev.includes(variantId)
        ? prev.filter((id) => id !== variantId)
        : [...prev, variantId]
    );
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg w-3/4 max-w-3xl">
        <h2 className="text-2xl mb-4">Select Products</h2>
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
              <div className="font-bold mb-2">{product.title}</div>
              {product.variants.map((variant) => (
                <label key={variant.id} className="flex items-center mb-1">
                  <input
                    type="checkbox"
                    checked={selectedVariants.includes(variant.id)}
                    onChange={() => toggleVariantSelection(variant.id)}
                    className="mr-2"
                  />
                  {variant.title}
                </label>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>{selectedVariants.length} selected</div>
          <div>
            <button
              onClick={onRequestClose}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Add
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductPicker;
