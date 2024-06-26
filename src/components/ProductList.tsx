import React, { useState } from "react";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductPicker from "./ProductPicker";
import { TProduct, TVariant } from "../types/products";



interface TableRowProps {
  index: number;
  product: TProduct;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const VariantRow: React.FC<{ variant: TVariant }> = ({ variant }) => {
  const [discountType, setDiscountType] = useState<"%" | "rupees">("%");
  const [discountValue, setDiscountValue] = useState<number>(0);

  return (
    <tr className="border-b">
      <td className="p-2 text-center cursor-move">
        <DragIndicatorIcon />
      </td>
      <td className="flex items-center bg-white m-2">
        <input
          type="text"
          value={variant.title}
          className="p-1 flex-grow mx-1"
        />
        <EditIcon />
      </td>
      <td className="p-2 text-center">
        <input
          type="number"
          value={discountValue}
          onChange={(e) => setDiscountValue(parseInt(e.target.value))}
          className="border p-1 w-20 mr-2"
        />
      </td>
      <td className="p-2 text-center">
        <select
          value={discountType}
          onChange={(e) => setDiscountType(e.target.value as "%" | "rupees")}
          className="border p-1"
        >
          <option value="%">%</option>
          <option value="rupees">Rupees</option>
        </select>
      </td>
      <td className="p-2 text-center">
        <CloseIcon />
      </td>
    </tr>
  );
};

const TableRow: React.FC<TableRowProps> = ({ index, product, setIsModalOpen }) => {
  const [isDiscountMode, setIsDiscountMode] = useState(false);
  const [discountType, setDiscountType] = useState<"%" | "rupees">("%");
  const [discountValue, setDiscountValue] = useState<number>(0);
  const [showVariants, setShowVariants] = useState(false);

  return (
    <>
      <tr className="border-b relative pb-6">
        <td className="p-2 text-center cursor-move">
          <DragIndicatorIcon />
        </td>
        <td className="p-2 text-center">{index + 1}</td>
        <td className="flex items-center bg-white m-2">
          <input
            type="text"
            value={product.title}
            className="p-1 flex-grow mx-1"
          />
          <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}><EditIcon /></div>
        </td>
        <td className="p-2 text-center">
          <div>
            {isDiscountMode ? (
              <div className="flex items-center">
                <input
                  type="number"
                  value={discountValue}
                  onChange={(e) => setDiscountValue(parseInt(e.target.value))}
                  className="border p-1 w-20 mr-2"
                />
                <select
                  value={discountType}
                  onChange={(e) =>
                    setDiscountType(e.target.value as "%" | "rupees")
                  }
                  className="border p-1"
                >
                  <option value="%">%</option>
                  <option value="rupees">Rupees</option>
                </select>
                <div
                  className="cursor-pointer ml-1"
                  onClick={() => setIsDiscountMode(false)}
                >
                  <CloseIcon />
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <button
                  onClick={() => setIsDiscountMode(true)}
                  className="bg-green-500 text-white px-[5rem] py-1 rounded"
                >
                  Discount
                </button>
              </div>
            )}
          </div>
        </td>
        <td>
          <DeleteIcon />
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td className="text-right">
          <button
            onClick={() => setShowVariants(!showVariants)}
            className="underline text-blue-500 px-3 py-1 rounded"
          >
            {showVariants ? "Hide Variants" : "Show Variants"}
            {showVariants ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </button>
        </td>
      </tr>
      {showVariants && (
        <tr>
          <td colSpan={5} className="p-2">
            <table className="table-auto w-[80%] border-collapse float-right">
              <tbody>
                {product.variants.map((variant) => (
                  <VariantRow key={variant.id} variant={variant} />
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      )}
    </>
  );
};

const Table: React.FC<{ products: TProduct[] }> = ({ products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <TableRow key={product.id} index={index} product={product} setIsModalOpen={setIsModalOpen}/>
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
