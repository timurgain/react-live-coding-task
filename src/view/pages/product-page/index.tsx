import styles from "./page.module.css";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFetchProductData } from "../../hooks/product-page";
import { Product } from "../../components/Product/Product";
import { LinkedProducts } from "../../components/LinkedProducts/LinkedProducts";
import { CompareList } from "../../components/CompareList/CompareList";
import { useDispatch, useSelector } from "../../../store/hooks";
import { compareListSelector, productModalSelector } from "../../../store/selectors/product-page";
import { Modal } from "../../components/Modal/Modal";
import { productPageActions } from "../../../store/slices/product-page";

export const ProductPage: FC = () => {
  const { productId: id } = useParams<{ productId: string }>();
  const { product, linkedProducts, error, loading } = useFetchProductData(id);
  const compareProducts = useSelector(compareListSelector);
  const productModal = useSelector(productModalSelector);
  const dispatch = useDispatch();

  if (loading && !product) return <div>Loading...</div>;
  if (error && !product) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <main className={styles.main}>
      {!!compareProducts.length && (
        <h2 className={styles["title-area"]}>Сравнение</h2>
      )}
      <Product
        product={product}
        role="main"
        className={styles["product-area"]}
      />
      <CompareList
        products={compareProducts}
        className={styles["compare-area"]}
      />
      <LinkedProducts
        products={linkedProducts}
        className={styles["linked-area"]}
      />

      <Modal isOpen={!!productModal} onClose={() => {dispatch(productPageActions.setProductModal(undefined))}}>
        <Product product={productModal} role="main" />
      </Modal>
    </main>

  );
};
