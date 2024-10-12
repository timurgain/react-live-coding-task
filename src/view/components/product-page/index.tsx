import { FC } from "react";
import { useParams } from "react-router-dom";
import { productPageApi as api } from "../../../store/api/product-page";

export const ProductPage: FC = () => {

  const { productId } = useParams<{ productId: string }>();
  const { data: product, error } = api.useGetProductQuery(productId as string);

  return (
    <div>
      productId: {product?.id}
      <br />
      name: {product?.name}
      <br />
      price: {product?.price}
    </div>
  );
};
