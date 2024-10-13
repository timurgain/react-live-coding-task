import { Category, LinkedProduct, Product } from "../../models";

export interface IProductPageUseCases {
  /**
   * Возвращает данные о товаре для страницы товара
   */
  getProduct(productId: string): Promise<Product>;
  /**
   * Возвращает связанные товары для товара с идентификатором productId
   */
  getLinkedProducts(productId: string, categoryId: string): Promise<LinkedProduct[]>;
  /**
   * Возвращает список категорий
   */
  getCategories(): Promise<Category[]>;
}
