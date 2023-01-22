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
    <div className="card text-center p-6">
      <img src={IMAGE_MAP[product.id]} className="w-16 h-16 m-auto" />
      <h5 className="mt-4 mb-9">{product.name}</h5>
      <div className="flex justify-center items-baseline cursor-pointer"
           onClick={() => onRemove(product)}>
          <span className="mr-1 text-sm text-red-500">{icon.close}</span>
          <h6 className="text-gray-400">{t("COMMON.REMOVE")}</h6>
      </div>
    </div>
  );
};

export default SelectedProduct;
