import useProductsStore from "../store/products.store";

function getRandomUniqueIdCrypto() {
  let array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0];
}

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
    <div className="w-full flex justify-end pr-12">
      <button className="py-2 px-8 font-bold text-green-600 border-green-600 border-2" onClick={addProduct}>Add Product</button>
    </div>
  );
};

export default AddProductButton;
