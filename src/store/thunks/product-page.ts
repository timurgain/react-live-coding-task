import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProductPageRepository } from "../../services/products/interfaces";


export class ProductPageThunks {
  constructor(private productPageUseCases: IProductPageRepository) {}

  getProduct = createAsyncThunk(
    "product-page/get-product",
    async (id: string) => this.productPageUseCases.getProduct(id)
  )

  getLinkedProducts = createAsyncThunk(
    "product-page/get-linked-product",
    async (id: string) => this.productPageUseCases.getLinkedProducts(id)
  )

  getCategories = createAsyncThunk(
    "product-page/get-categories",
    async () => this.productPageUseCases.getCategories()
  )
}
