import { MockProductPageGateway } from "../gateways/product-page";
import { ProductPageUseCases } from "../use-cases/product-page/use-cases";

const mockProductPageGateway = new MockProductPageGateway();
const productPageUseCases = new ProductPageUseCases(mockProductPageGateway);

export { productPageUseCases };
