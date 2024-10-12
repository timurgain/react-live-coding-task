import { rootApi } from "..";
import { productPageUseCases } from "../../init";

export const productPageApi = rootApi.injectEndpoints({
  endpoints: (build) => ({

    getProduct: build.query({
      queryFn: async (id: string) => {
        const product = await productPageUseCases.getProduct(id);
        return { data: product };
      },
    }),
    getLinkedProducts: build.query({
      queryFn: async (id: string) => {
        const linkedProducts = await productPageUseCases.getLinkedProducts(id);
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
