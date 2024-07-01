import { useState } from "react";
import AddProductButton from "./components/AddProductButton";
import ProductList from "./components/ProductList";
import ProductPicker from "./components/ProductPicker";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-fit m-1 md:w-[90vw] lg:w-[80vw] md:m-auto">
        <ProductList setIsModalOpen={setIsModalOpen} />
        <AddProductButton />
      </div>
      <ProductPicker
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </QueryClientProvider>
  );
}

export default App;
