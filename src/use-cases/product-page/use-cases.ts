// useCases/productUseCases.ts
import { IProductPageRepository } from "../../services/products/interfaces";
import { Product, Category, LinkedProduct } from "../../models";
import { IProductPageUseCases } from "./interfaces";

/**
 * Use case for product page, takes a gateway (fethces data from API) as a dependency.
 * Use case is used in the View layer or Redux.
 */
export class ProductPageUseCases implements IProductPageUseCases {
  constructor(private productPageRepository: IProductPageRepository) {}

  async getProduct(productId: string): Promise<Product> {
    return this.productPageRepository.getProduct(productId);
  }

  async getLinkedProducts(
    productId: string,
    categoryId: string | undefined
  ): Promise<LinkedProduct[]> {
    const products = await this.productPageRepository.getLinkedProducts(
      productId
    );
    return transformedLinkedProducts(products, categoryId);
  }

  async getCategories(): Promise<Category[]> {
    return this.productPageRepository.getCategories();
  }
}

export function transformedLinkedProducts(
  products: Product[],
  categoryId: string | undefined
): LinkedProduct[] {
  return products.map((product) => {
    const linkType = () => {
      if (!product.category?.id || !categoryId) return undefined;
      if (product.category.id === categoryId) return "analog";
      return "related";
    };
    return {
      ...product,
      linkType: linkType(),
    };
  });
}
