import { useState } from "react";
import AddProductButton from "./components/AddProductButton";
import ProductList from "./components/ProductList";
import ProductPicker from "./components/ProductPicker";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ProductList setIsModalOpen={setIsModalOpen} />
      <AddProductButton />
      <ProductPicker
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default App;
