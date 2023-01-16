import { IMAGE_MAP } from "../../assets";
import { icon } from "../../constants";
import { IProduct } from "../definitions";

// I18N
import "../../i18N/config";
import { useTranslation } from "react-i18next";

type SelectedProductProps = {
  product: IProduct;
  onRemove: (product: IProduct) => void;
};

const SelectedProduct: React.FC<SelectedProductProps> = (
  props: SelectedProductProps
) => {
  const { product, onRemove } = props;
  const { t } = useTranslation();
  return (
    <div className="w-48 h-48 border rounded-md shadow-sm text-center p-6">
      <img src={IMAGE_MAP[product.id]} className="w-16 h-16 m-auto" />
      <p className="text-sm font-bold mt-4 mb-10">{product.name}</p>
      <span
        className="flex justify-center text-xs font-bold text-gray-400 cursor-pointer"
        onClick={() => onRemove(product)}
      >
        <span className="mr-1 text-red-500">{icon.close}</span>
        <span>{t("COMMON.REMOVE")}</span>
      </span>
    </div>
  );
};

export default SelectedProduct;
