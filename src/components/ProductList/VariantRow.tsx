import useProductsStore from "../../store/products.store";
import { TProduct, TVariant } from "../../types/products";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import CloseIcon from "@mui/icons-material/Close";

const VariantRow: React.FC<{ variant: TVariant; product: TProduct }> = ({
  variant,
  product,
}) => {
  const setProducts = useProductsStore((state) => state.setProducts);
  const storeProducts = useProductsStore((state) => state.products);
  const deleteVariant = () => {
    const newProducts = storeProducts
      .map((prod) => {
        if (prod.id === product.id) {
          const updatedVariants = prod.variants.filter(
            (v) => v.id !== variant.id
          );
          if (updatedVariants.length > 0) {
            return { ...product, variants: updatedVariants };
          } else {
            return undefined;
          }
        }
        return prod;
      })
      .filter((product) => product !== undefined) as TProduct[];
    setProducts(newProducts);
  };
  return (
    <tr className="border-b">
      <td className="p-2 text-center cursor-move">
        <DragIndicatorIcon />
      </td>
      <td className="flex items-center bg-white m-2 rounded-full pl-5">
        <input
          type="text"
          value={variant.title}
          className="p-1 flex-grow mx-1 rounded-full outline-none"
        />
      </td>
      <td className="p-2 text-center">
        <button onClick={deleteVariant}>
          <CloseIcon />
        </button>
      </td>
    </tr>
  );
};

export default VariantRow;