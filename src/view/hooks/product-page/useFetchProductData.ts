import { productPageApi as api } from "../../../store/api/product-page";

export function useFetchProductData(productId: string | undefined) {
  if (!productId)
    return { product: null, linkedProducts: null, error: null, loading: false };

  const {
    data: product,
    error: productError,
    isLoading: productLoading,
  } = api.useGetProductQuery(productId, { skip: !productId });

  const {
    data: categoriesIds,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = api.useGetCategoriesIdSetQuery(undefined, { skip: !productId });

  const {
    data: linkedProducts,
    error: linkedProductsError,
    isLoading: linkedProductsLoading,
  } = api.useGetLinkedProductsQuery(
    { productId, categoriesIds, categoryId: product?.category?.id },
    { skip: !productId }
  );

  const error = productError || linkedProductsError || categoriesError;
  let errorMessage: string | null = null;

  if (error) {
    if ("status" in error) {
      errorMessage = `Error: ${error.status}`;
    } else {
      errorMessage = error.message || "An unknown error occurred";
    }
  }

  return {
    product,
    linkedProducts,
    error: errorMessage,
    loading: productLoading || linkedProductsLoading || categoriesLoading,
  };
}
