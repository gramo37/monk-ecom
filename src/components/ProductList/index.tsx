import React from "react";
import useProductsStore from "../../store/products.store";
import TableRow from "./TableRow";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

type TTableProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Table: React.FC<TTableProps> = ({ setIsModalOpen }) => {
  const products = useProductsStore((state) => state.products);
  const setProducts = useProductsStore((state) => state.setProducts);

  const getProductPos = (id: number) =>
    products.findIndex((prod) => prod.id === id);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id === over.id) return;

    const originalPos = getProductPos(active.id);
    const newPos = getProductPos(over.id);

    const newProducts = arrayMove(products, originalPos, newPos);
    setProducts(newProducts);
  };

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCorners}
    >
      <div className="container mx-auto p-4">
        <SortableContext
          items={products}
          strategy={verticalListSortingStrategy}
        >
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
        </SortableContext>
      </div>
    </DndContext>
  );
};

export default Table;
