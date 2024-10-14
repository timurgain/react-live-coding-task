import clsx from "clsx";
import { LinkedProduct, ProductLinkType } from "../../../models/index";
import styles from "./LinkedProducts.module.css";

type Props = {
  products: LinkedProduct[] | undefined;
  className?: string;
  openProductModal: (product: LinkedProduct) => void;
  addToCompareList: (product: LinkedProduct) => void;
};

export function LinkedProducts({
  products,
  className,
  openProductModal,
  addToCompareList,
}: Props) {
  function handleClick(product: LinkedProduct) {
    const linkType = product.linkType;
    if (linkType === "analog") {
      addToCompareList(product);
      return;
    }
    openProductModal(product);
  }

  const getProductLinkType = (linkType: ProductLinkType) => {
    if (!linkType) return null;
    if (linkType === "analog") {
      return <p className={styles["product__link-type"]}> - Аналог</p>;
    }
    if (linkType === "related") {
      return (
        <p className={styles["product__link-type"]}> - Сопутствующий товар</p>
      );
    }
  };

  if (!products) return null;

  return (
    <ul className={clsx(styles["list"], className)}>
      {products.map((product) => (
        <li key={product.id} className={styles["product"]}>
          <button
            className={styles["product__name-btn"]}
            type="button"
            onClick={() => handleClick(product)}
          >
            {product.name}
          </button>
          {getProductLinkType(product.linkType)}
        </li>
      ))}
    </ul>
  );
}
