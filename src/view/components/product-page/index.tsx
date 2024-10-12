import { FC } from "react";
import { Modal } from "../common/modal";
import { useParams } from "react-router-dom";
import { MockProductPageGateway } from "../../../gateways/product-page";

export const ProductPage: FC = () => {

  const { productId } = useParams<{ productId: string }>();
  // MockProductPageGateway.getProduct(productId);

  return (
    <div>
      productId: {productId}
    </div>
  );
};
