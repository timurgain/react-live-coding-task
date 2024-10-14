import styles from "./page.module.css";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFetchProductData } from "../../hooks/product-page/useFetchProductData";
import { Product } from "../../components/Product/Product";
import { LinkedProducts } from "../../components/LinkedProducts/LinkedProducts";
import { CompareList } from "../../components/CompareList/CompareList";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { useCompareProducts } from "../../hooks/product-page/useCompareProducts";
import { useProductModal } from "../../hooks/product-page/useProductModal";

export const ProductPage: FC = () => {
  const { productId: id } = useParams<{ productId: string }>();
  const { product, linkedProducts, error, loading } = useFetchProductData(id);
  const { compareProducts, addToCompareList } = useCompareProducts();
  const { productModal, openModal, closeModal } = useProductModal();

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
        openProductModal={openModal}
        addToCompareList={addToCompareList}
      />

      <ModalWindow isOpen={!!productModal} onClose={closeModal}>
        <Product product={productModal} role="main" />
      </ModalWindow>
    </main>
  );
};
