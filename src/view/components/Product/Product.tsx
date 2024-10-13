import styles from "./Product.module.css";
import clsx from "clsx";
import type { Product } from "../../../models/index";

type Props = {
  product: Product;
  role: "main" | "related";
  className?: string;
};

export function Product({ product, role, className }: Props) {
  const title =
    role === "main" ? (
      <h1 className={styles["product__title"]}>{product.name}</h1>
    ) : (
      <span className={styles["product__title"]}>{product.name}</span>
    );

  return (
    <article className={clsx(styles["product"], className)}>
      {title}
      <p className={styles["product__price"]}>{product.price} руб.</p>
    </article>
  );
}
