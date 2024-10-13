import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFetchProductData } from "../../hooks/product-page";

export const ProductPage: FC = () => {
  const { productId: id } = useParams<{ productId: string }>();
  const { product, linkedProducts, error, loading } = useFetchProductData(id);

  if (!id) return <div>Product not found</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      productId: {product?.id}
      <br />
      name: {product?.name}
      <br />
      price: {product?.price}
      <br />
      linkedProducts: {linkedProducts?.map((item) => item.name).join(", ")}
    </div>
  );
};
