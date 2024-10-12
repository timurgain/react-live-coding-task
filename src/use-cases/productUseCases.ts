// useCases/productUseCases.ts
import { IProductPageRepository } from '../services/products/interfaces';
import { Product, Category } from '../models';

/**
 * Use case for product page, takes a gateway (fethces data from API) as a dependency.
 * Use case is used in the View layer or Redux.
 */
export class ProductUseCases {
  constructor(private productPageRepository: IProductPageRepository) {}

  async getProduct(id: string): Promise<Product> {
    return this.productPageRepository.getProduct(id);
  }

  async getLinkedProducts(id: string): Promise<Product[]> {
    return this.productPageRepository.getLinkedProducts(id);
  }

  async getCategories(): Promise<Category[]> {
    return this.productPageRepository.getCategories();
  }
}