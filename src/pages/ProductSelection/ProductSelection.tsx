// React
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

// Common Components
import {
  Button,
  Dropdown,
  AddProduct,
  SelectedProduct,
} from "../../components";
import { IProduct } from "../../components/definitions";

// I18N
import "../../i18N/config";
import { useTranslation } from "react-i18next";

// Utilities
import uniqBy from "lodash/uniqBy";
import { MAX_PRODUCTS_SIZE } from "../../constants";
import products from "./data.json";

// Services
import { ProductsService } from "../../services/products.service";

const ProductSelection: React.FC = () => {
  const { t } = useTranslation();
  const navigate: NavigateFunction = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState<IProduct | any>([]);
  const [showNotification, setShowNotification] = useState<boolean>(false);

  const onSelectProduct = (product: IProduct): void => {
    if (selectedProducts.length === MAX_PRODUCTS_SIZE) {
      setShowNotification(true);
      return;
    }
    if (selectedProducts.length < MAX_PRODUCTS_SIZE) {
      setSelectedProducts((products: IProduct[]) =>
        uniqBy([...products, product], "id")
      );
      setShowNotification(false);
    }
  };

  const onProductRemove = (product: IProduct): void => {
    setSelectedProducts(
      selectedProducts.filter((item: IProduct) => item.id !== product.id)
    );
  };

  const onClickNext = (): void => {
    // Send selected products to API
    ProductsService.saveProducts(selectedProducts)
      .then((response: any) => {
        // on Success navigates to next step
        navigate("/step-2");
      })
      .catch(() => {})
      .finally(() => {});
  };
  const renderAddProductsMenu = (): JSX.Element => {
    return (
      <div className="w-96 p-5">
        <a className="p-1.5 bg-purple-400 text-white rounded-md text-xs no-underline hover:text-white">
          1 of 3
        </a>
        <h1 className="my-6">{t("LETS_ADD_YOUR_INTERNAL_TOOLS")}</h1>
        <p className="mb-8">{t("SEARCH_AND_ADD_PRODUCTS_FOR_YOUR_TEAM")}</p>
        {showNotification && (
          <p className="text-red-500 text-sm">{t("ONLY_4_PRODUCTS_ALLOWED")}</p>
        )}
        <Dropdown options={products} onSelect={onSelectProduct} />
        <div className="mt-8">
          <Button
            type="button"
            label="Next"
            onClick={onClickNext}
            bclassName={selectedProducts.length ? "primary" : "disabled"}
          />
        </div>
      </div>
    );
  };

  const renderSelectedProducts = (): JSX.Element => {
    return (
      <div>
        <div className="grid gap-6 grid-cols-2">
          {selectedProducts.map((product: IProduct) => (
            <SelectedProduct
              key={product.id}
              product={product}
              onRemove={onProductRemove}
            />
          ))}
          {products
            .slice(0, MAX_PRODUCTS_SIZE - selectedProducts.length)
            .map((product, index) => (
              <AddProduct key={index} />
            ))}
        </div>
        <p className="text-center mt-5 text-gray-500">
          {selectedProducts.length === 1
            ? t("PRODUCTS_ADDED_COUNT", { count: selectedProducts.length })
            : t("PRODUCTS_ADDED_COUNT_PLURAL", {
                count: selectedProducts.length,
              })}
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap h-auto justify-center items-center gap-20">
      {renderSelectedProducts()}
      {renderAddProductsMenu()}
    </div>
  );
};

export default ProductSelection;
