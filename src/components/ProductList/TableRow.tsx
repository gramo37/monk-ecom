import React, { useState } from "react";
import VariantRow from "./VariantRow";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DeleteIcon from "@mui/icons-material/Delete";
import { TProduct } from "../../types/products";
import { flat_off, off } from "../../constants";
import useProductsStore from "../../store/products.store";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
interface TableRowProps {
  index: number;
  product: TProduct;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableRow: React.FC<TableRowProps> = ({
  index,
  product,
  setIsModalOpen,
}) => {
  const [isDiscountMode, setIsDiscountMode] = useState(false);
  const [discountType, setDiscountType] = useState<
    typeof off | typeof flat_off
  >(product?.discount_type ?? off);
  const [discountValue, setDiscountValue] = useState<number>(
    product?.discount ?? 0
  );
  const [showVariants, setShowVariants] = useState(false);
  const setSelectedProductForEdit = useProductsStore(
    (state) => state.setSelectedProductForEdit
  );
  const setProducts = useProductsStore((state) => state.setProducts);
  const storeProducts = useProductsStore((state) => state.products);

  const handleEditIcon = (index: number) => {
    setSelectedProductForEdit(index);
    setIsModalOpen(true);
  };

  const deleteProduct = (index: number) => {
    const newProducts = [...storeProducts];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: product.id,
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getVariantPos = (id: number) =>
    product.variants.findIndex((v) => v.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    const originalPos = getVariantPos(active.id);
    const newPos = getVariantPos(over.id);

    const newVariants = arrayMove(product.variants, originalPos, newPos);
    const newProducts = storeProducts.map((prod) => {
      if (prod.id === product.id) {
        return { ...product, variants: newVariants };
      }
      return prod;
    });
    setProducts(newProducts);
  };

  return (
    <>
      <tr
        className="border-b relative touch-none"
        ref={setNodeRef}
        {...attributes}
        style={style}
      >
        <td className="p-2 text-center cursor-move" {...listeners}>
          <DragIndicatorIcon />
        </td>
        <td className="p-2 text-center">{index + 1}</td>
        <td className="flex items-center bg-white m-2">
          <input
            type="text"
            value={product.title}
            className="p-1 flex-grow mx-1"
          />
          <button
            className="cursor-pointer"
            onClick={() => handleEditIcon(index)}
          >
            <EditIcon />
          </button>
        </td>
        <td className="p-2 text-center">
          <div>
            {isDiscountMode ? (
              <div className="flex items-center justify-center">
                <input
                  type="number"
                  value={discountValue}
                  onChange={(e) => setDiscountValue(parseInt(e.target.value))}
                  className="border p-1 w-20 mr-2"
                />
                <select
                  value={discountType}
                  onChange={(e) =>
                    setDiscountType(
                      e.target.value as typeof off | typeof flat_off
                    )
                  }
                  className="border p-1"
                >
                  <option value={off}>%</option>
                  <option value={flat_off}>Flat Off</option>
                </select>
                <button
                  className="cursor-pointer ml-1"
                  onClick={() => setIsDiscountMode(false)}
                >
                  <CloseIcon />
                </button>
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
          <button onClick={() => deleteProduct(index)}>
            <DeleteIcon />
          </button>
        </td>
      </tr>
      <tr className="touch-none" ref={setNodeRef} {...attributes} style={style}>
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

      <tr>
        {showVariants && (
          <td colSpan={5} className="p-2">
            <table className="table-auto w-[80%] border-collapse float-right">
              <DndContext
                sensors={sensors}
                onDragEnd={handleDragEnd}
                collisionDetection={closestCorners}
              >
                <SortableContext
                  items={product.variants}
                  strategy={verticalListSortingStrategy}
                >
                  <tbody>
                    {product.variants.map((variant) => (
                      <VariantRow
                        key={variant.id}
                        variant={variant}
                        product={product}
                      />
                    ))}
                  </tbody>
                </SortableContext>
              </DndContext>
            </table>
          </td>
        )}
      </tr>
    </>
  );
};

export default TableRow;
