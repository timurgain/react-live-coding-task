import styles from "./Product.module.css";
import clsx from "clsx";
import type { Product } from "../../../models/index";
import { useDispatch } from "../../../store/hooks";
import { productPageActions } from "../../../store/slices/product-page";

type Props = {
  product: Product;
  role: "main" | "related";
  className?: string;
};

export function Product({ product, role, className }: Props) {

  const dispatch = useDispatch();

  const handleremove = () => {
    dispatch(productPageActions.removeProductFromCompareList(product));
  };

  const title =
    role === "main" ? (
      <h1 className={styles["product__title"]}>{product.name}</h1>
    ) : (
      <span className={styles["product__title"]}>{product.name}</span>
    );

  const removeBtn =
    role === "related" ? (
      <button className={styles["product__remove-btn"]} onClick={handleremove}>
        &#x2717;
      </button>
    ) : null;

  return (
    <article className={clsx(styles["product"], className)}>
      {title}
      <p className={styles["product__price"]}>{product.price} руб.</p>
      {removeBtn}
    </article>
  );
}
