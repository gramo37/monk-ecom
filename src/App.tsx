import { useState } from "react";
import AddProductButton from "./components/AddProductButton";
import ProductList from "./components/ProductList";
import ProductPicker from "./components/ProductPicker";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="w-fit m-1 md:w-[90vw] lg:w-[80vw] md:m-auto">
        <ProductList setIsModalOpen={setIsModalOpen} />
        <AddProductButton />
      </div>
      <ProductPicker
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default App;
