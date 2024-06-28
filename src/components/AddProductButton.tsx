import useProductsStore from "../store/products.store";
import { getRandomUniqueIdCrypto } from "../utils";

const AddProductButton = () => {
  const setProducts = useProductsStore((state) => state.setProducts);
  const storeProducts = useProductsStore((state) => state.products);

  const addProduct = () => {
    const productId = getRandomUniqueIdCrypto();
    const imageId = getRandomUniqueIdCrypto();
    setProducts([...storeProducts, {
      id: productId,
      title: "",
      variants: [],
      image: {
        id: imageId,
        product_id: productId,
        src: ""
      }
    }])
  }

  return (
    <div className="w-full flex justify-end pr-2">
      <button className="py-2 px-8 font-bold text-green-600 border-green-600 border-2" onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default AddProductButton;
