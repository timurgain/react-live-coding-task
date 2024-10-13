import { productPageApi as api } from "../../store/api/product-page";

export function useFetchProductData(id: string | undefined) {
  if (!id)
    return { product: null, linkedProducts: null, error: null, loading: false };

  const {
    data: product,
    error: productError,
    isLoading: productLoading,
  } = api.useGetProductQuery(id, { skip: !id });
  const {
    data: linkedProducts,
    error: linkedProductsError,
    isLoading: linkedProductsLoading,
  } = api.useGetLinkedProductsQuery(id, { skip: !id });

  const error = productError || linkedProductsError;
  let errorMessage: string | null = null;
  
  if (error) {
    if ('status' in error) {
      errorMessage = `Error: ${error.status}`;
    } else {
      errorMessage = error.message || 'An unknown error occurred';
    }
  }

  return {
    product,
    linkedProducts,
    error: errorMessage,
    loading: productLoading || linkedProductsLoading,
  };
}
