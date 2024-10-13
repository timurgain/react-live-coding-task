import { Category, LinkedProduct, Product } from "../../models";

export type categoryId = string;

export interface IProductPageUseCases {
  /**
   * Возвращает данные о товаре для страницы товара
   */
  getProduct(productId: string): Promise<Product>;
  /**
   * Возвращает связанные товары (подготовленные для отображения) для товара с идентификатором productId
   */
  getLinkedProducts(
    productId: string,
    categoryId: string,
    categoriesIds: categoryId[]
  ): Promise<LinkedProduct[]>;
  /**
   * Возвращает Set из id всех категорий, в том числе вложенных
   */
  getCategoriesIdSet(): Promise<categoryId[]>;
}
