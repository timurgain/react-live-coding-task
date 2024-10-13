import { rootApi } from "..";
import { productPageUseCases } from "../../init";
import { categoryId } from "../../use-cases/product-page/interfaces";

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
        categoriesIds: categoryId[] | undefined;
      }) => {
        const { productId, categoryId, categoriesIds } = arg;
        const linkedProducts = await productPageUseCases.getLinkedProducts(
          productId,
          categoryId,
          categoriesIds
        );
        return { data: linkedProducts };
      },
    }),
    getCategoriesIdSet: build.query({
      queryFn: async () => {
        const categories = await productPageUseCases.getCategoriesIdSet();
        return { data: categories };
      },
    }),
  }),
  overrideExisting: false,
});
