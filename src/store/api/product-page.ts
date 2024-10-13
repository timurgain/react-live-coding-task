import { rootApi } from "..";
import { productPageUseCases } from "../../init";

export const productPageApi = rootApi.injectEndpoints({
  endpoints: (build) => ({
    getProduct: build.query({
      queryFn: async (productId: string) => {
        const product = await productPageUseCases.getProduct(productId);
        return { data: product };
      },
    }),
    getLinkedProducts: build.query({
      queryFn: async (arg: {
        productId: string;
        categoryId: string | undefined;
      }) => {
        const { productId, categoryId } = arg;
        const linkedProducts = await productPageUseCases.getLinkedProducts(
          productId,
          categoryId
        );
        return { data: linkedProducts };
      },
    }),
    getCategories: build.query({
      queryFn: async () => {
        const categories = await productPageUseCases.getCategories();
        return { data: categories };
      },
    }),
  }),
  overrideExisting: false,
});
