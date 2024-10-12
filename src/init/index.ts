import { MockProductPageGateway } from "../gateways/product-page";
import { ProductPageThunks } from "../store/thunks/product-page";
import { ProductPageUseCases } from "../use-cases/product-page";

const mockProductPageGateway = new MockProductPageGateway()
const productPageUseCases = new ProductPageUseCases(mockProductPageGateway)
const productPageThunks = new ProductPageThunks(productPageUseCases)

export { productPageThunks }