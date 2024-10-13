import styles from "./Product.module.css";
import type { Product } from "../../../models/index";

type Props = {
  product: Product;
  role: "main" | "related";
};

export function Product({ product, role }: Props) {
  const title =
    role === "main" ? <h1 className={styles.title}>{product.name}</h1> : <h2 className={styles.title}>{product.name}</h2>;

  return (
    <article className={styles.product}>
      {title}
      <p className={styles.price}>{product.price} руб.</p>
    </article>
  );
}
