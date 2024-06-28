import React, { useState } from "react";
import Modal from "react-modal";
import { TProduct } from "../types/products";
import CloseIcon from "@mui/icons-material/Close";
import Checkbox from "@mui/material/Checkbox";
import useProductsStore from "../store/products.store";

interface ProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ProductPicker: React.FC<ProductModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  // Get these products using a API
  let products: TProduct[] = [
    {
      id: 77,
      title: "Fog Linen Chambray Towel - Beige Stripe",
      discount: 10,
      discount_type: "% Off",
      variants: [
        {
          id: 1,
          product_id: 77,
          title: "XS / Silver",
          price: "49",
        },
        {
          id: 2,
          product_id: 77,
          title: "S / Silver",
          price: "49",
        },
        {
          id: 3,
          product_id: 77,
          title: "M / Silver",
          price: "49",
        },
      ],
      image: {
        id: 266,
        product_id: 77,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/77/images/266/foglinenbeigestripetowel1b.1647248662.386.513.jpg?c=1",
      },
    },
    {
      id: 80,
      title: "Orbit Terrarium - Large",
      variants: [
        {
          id: 64,
          product_id: 80,
          title: "Default Title",
          price: "109",
        },
      ],
      image: {
        id: 272,
        product_id: 80,
        src: "https://cdn11.bigcommerce.com/s-p1xcugzp89/products/80/images/272/roundterrariumlarge.1647248662.386.513.jpg?c=1",
      },
    },
    {
      id: 81,
      title: "Classic Blue Denim Jacket",
      discount: 15,
      discount_type: "% Off",
      variants: [
        {
          id: 101,
          product_id: 81,
          title: "XS / Blue",
          price: "79",
        },
        {
          id: 102,
          product_id: 81,
          title: "S / Blue",
          price: "79",
        },
        {
          id: 103,
          product_id: 81,
          title: "M / Blue",
          price: "79",
        },
        {
          id: 104,
          product_id: 81,
          title: "L / Blue",
          price: "79",
        },
        {
          id: 105,
          product_id: 81,
          title: "XL / Blue",
          price: "79",
        },
      ],
      image: {
        id: 280,
        product_id: 81,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 82,
      title: "Vintage Leather Wallet",
      variants: [
        {
          id: 201,
          product_id: 82,
          title: "Brown",
          price: "49",
        },
        {
          id: 202,
          product_id: 82,
          title: "Black",
          price: "49",
        },
      ],
      image: {
        id: 290,
        product_id: 82,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 83,
      title: "Organic Cotton T-Shirt",
      discount: 5,
      discount_type: "% Off",
      variants: [
        {
          id: 301,
          product_id: 83,
          title: "XS / White",
          price: "25",
        },
        {
          id: 302,
          product_id: 83,
          title: "S / White",
          price: "25",
        },
        {
          id: 303,
          product_id: 83,
          title: "M / White",
          price: "25",
        },
        {
          id: 304,
          product_id: 83,
          title: "L / White",
          price: "25",
        },
        {
          id: 305,
          product_id: 83,
          title: "XL / White",
          price: "25",
        },
        {
          id: 306,
          product_id: 83,
          title: "XS / Black",
          price: "25",
        },
        {
          id: 307,
          product_id: 83,
          title: "S / Black",
          price: "25",
        },
        {
          id: 308,
          product_id: 83,
          title: "M / Black",
          price: "25",
        },
        {
          id: 309,
          product_id: 83,
          title: "L / Black",
          price: "25",
        },
        {
          id: 310,
          product_id: 83,
          title: "XL / Black",
          price: "25",
        },
      ],
      image: {
        id: 300,
        product_id: 83,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 84,
      title: "Minimalist Wristwatch",
      variants: [
        {
          id: 401,
          product_id: 84,
          title: "Black Strap",
          price: "150",
        },
        {
          id: 402,
          product_id: 84,
          title: "Brown Strap",
          price: "150",
        },
      ],
      image: {
        id: 401,
        product_id: 84,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 85,
      title: "Luxury Silk Scarf",
      discount: 20,
      discount_type: "% Off",
      variants: [
        {
          id: 501,
          product_id: 85,
          title: "Red",
          price: "120",
        },
        {
          id: 502,
          product_id: 85,
          title: "Blue",
          price: "120",
        },
      ],
      image: {
        id: 501,
        product_id: 85,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 86,
      title: "Eco-friendly Water Bottle",
      variants: [
        {
          id: 601,
          product_id: 86,
          title: "500ml",
          price: "30",
        },
        {
          id: 602,
          product_id: 86,
          title: "750ml",
          price: "35",
        },
        {
          id: 603,
          product_id: 86,
          title: "1000ml",
          price: "40",
        },
      ],
      image: {
        id: 601,
        product_id: 86,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 87,
      title: "Bluetooth Wireless Earbuds",
      variants: [
        {
          id: 701,
          product_id: 87,
          title: "Black",
          price: "99",
        },
        {
          id: 702,
          product_id: 87,
          title: "White",
          price: "99",
        },
      ],
      image: {
        id: 701,
        product_id: 87,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 88,
      title: "Fitness Tracker",
      discount: 10,
      discount_type: "% Off",
      variants: [
        {
          id: 801,
          product_id: 88,
          title: "Black",
          price: "149",
        },
        {
          id: 802,
          product_id: 88,
          title: "Pink",
          price: "149",
        },
        {
          id: 803,
          product_id: 88,
          title: "Blue",
          price: "149",
        },
      ],
      image: {
        id: 801,
        product_id: 88,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 89,
      title: "Noise Cancelling Headphones",
      variants: [
        {
          id: 901,
          product_id: 89,
          title: "Black",
          price: "250",
        },
        {
          id: 902,
          product_id: 89,
          title: "White",
          price: "250",
        },
      ],
      image: {
        id: 901,
        product_id: 89,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 90,
      title: "Travel Backpack",
      discount: 5,
      discount_type: "% Off",
      variants: [
        {
          id: 1001,
          product_id: 90,
          title: "30L",
          price: "100",
        },
        {
          id: 1002,
          product_id: 90,
          title: "50L",
          price: "120",
        },
      ],
      image: {
        id: 1001,
        product_id: 90,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 91,
      title: "Smart Home Speaker",
      variants: [
        {
          id: 1101,
          product_id: 91,
          title: "Black",
          price: "199",
        },
        {
          id: 1102,
          product_id: 91,
          title: "White",
          price: "199",
        },
      ],
      image: {
        id: 1101,
        product_id: 91,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 92,
      title: "Wireless Charging Pad",
      variants: [
        {
          id: 1201,
          product_id: 92,
          title: "Black",
          price: "39",
        },
        {
          id: 1202,
          product_id: 92,
          title: "White",
          price: "39",
        },
      ],
      image: {
        id: 1201,
        product_id: 92,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 93,
      title: "Digital Photo Frame",
      variants: [
        {
          id: 1301,
          product_id: 93,
          title: "8-inch",
          price: "89",
        },
        {
          id: 1302,
          product_id: 93,
          title: "10-inch",
          price: "109",
        },
      ],
      image: {
        id: 1301,
        product_id: 93,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 94,
      title: "Electric Kettle",
      discount: 15,
      discount_type: "% Off",
      variants: [
        {
          id: 1401,
          product_id: 94,
          title: "1.0L",
          price: "59",
        },
        {
          id: 1402,
          product_id: 94,
          title: "1.5L",
          price: "69",
        },
      ],
      image: {
        id: 1401,
        product_id: 94,
        src: "https://picsum.photos/200/300",
      },
    },
    {
      id: 95,
      title: "Smart LED Light Bulb",
      variants: [
        {
          id: 1501,
          product_id: 95,
          title: "Single",
          price: "19",
        },
        {
          id: 1502,
          product_id: 95,
          title: "Pack of 4",
          price: "69",
        },
      ],
      image: {
        id: 1501,
        product_id: 95,
        src: "https://picsum.photos/200/300",
      },
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const setProducts = useProductsStore((state) => state.setProducts);
  const storeProducts = useProductsStore((state) => state.products);
  const [selectedProducts, setSelectedProducts] = useState<TProduct[]>([]);
  const selectedProductForEdit = useProductsStore(
    (state) => state.selectedProductForEdit
  );
  products = products.filter(
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
      <div className="bg-white p-6 rounded-lg w-1/2 max-w-3xl">
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
              className="bg-blue-500 text-white px-4 py-2 rounded"
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
