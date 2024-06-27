import React, { useState } from "react";
import ProductPicker from "../ProductPicker";
import useProductsStore from "../../store/products.store";
import TableRow from "./TableRow";

const Table: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products = useProductsStore((state) => state.products);

  console.log(products)

  return (
    <div className="container mx-auto p-4">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-transparent">
            <th className="p-2"></th>
            <th className="p-2"></th>
            <th className="p-2">Product</th>
            <th className="p-2">Discount</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <TableRow
              key={product.id}
              index={index}
              product={product}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        </tbody>
      </table>
      <ProductPicker
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        products={products}
      />
    </div>
  );
};

export default Table;
