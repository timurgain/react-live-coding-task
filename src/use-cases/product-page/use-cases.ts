// useCases/productUseCases.ts
import { IProductPageRepository } from "../../services/products/interfaces";
import { Product, Category, LinkedProduct } from "../../models";
import { categoryId, IProductPageUseCases } from "./interfaces";

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
    categoryId: string | undefined,
    categoriesSet: Set<categoryId> | undefined
  ): Promise<LinkedProduct[]> {
    const products = await this.productPageRepository.getLinkedProducts(
      productId
    );
    return addlinkTypeToProducts(products, categoryId, categoriesSet);
  }

  async getCategoriesIdSet(): Promise<Set<categoryId>> {
    const categories = await this.productPageRepository.getCategories();
    return extractCategoriesIds(categories);
  }
}

function addlinkTypeToProducts(
  products: Product[],
  categoryId: string | undefined,
  categoriesSet: Set<categoryId> | undefined
): LinkedProduct[] {
  return products.map((product) => {
    const linkType = () => {
      const linkedProductCategoryId = product.category?.id
      if (
        !linkedProductCategoryId ||
        !categoryId ||
        !categoriesSet ||
        !categoriesSet.has(linkedProductCategoryId)
      )
        return undefined;
      if (linkedProductCategoryId === categoryId) return "analog";
      if (linkedProductCategoryId && categoryId) return "related";
    };

    return {
      ...product,
      linkType: linkType(),
    };
  });
}

export function extractCategoriesIds(categories: Category[]) {
  const result: Set<categoryId> = new Set();

  function extract(categories: Category[], ids: Set<categoryId>) {
    for (const category of categories) {
      ids.add(category.id);
      if (category.children) {
        extract(category.children, ids);
      }
    }
  }
  extract(categories, result);
  return result;
}
