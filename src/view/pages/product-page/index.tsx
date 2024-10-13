import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFetchProductData } from "../../hooks/product-page";
import { Product } from "../../components/Product/Product";
import { LinkedProducts } from "../../components/LinkedProducts/LinkedProducts";

export const ProductPage: FC = () => {
  const { productId: id } = useParams<{ productId: string }>();
  const { product, linkedProducts, error, loading } = useFetchProductData(id);

  if (loading && !product) return <div>Loading...</div>;
  if (error && !product) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <main>
      <Product product={product} role="main" />

      <LinkedProducts products={linkedProducts} />

      {/* <ul>
        {linkedProducts?.map((item) => (
          <li key={item.id}>
            <Product product={item} role="related" />
          </li>
        ))}
      </ul> */}


    </main>
  );
};
