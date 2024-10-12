import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models";

type CatalogPageState = {
  product: Product | undefined;
  linkedProducts: Product[] | undefined;
  comparingProducts: Product[] | undefined;
};

const defaultState: CatalogPageState = {
  product: undefined,
  linkedProducts: undefined,
  comparingProducts: undefined,
};

const productPageSlice = createSlice({
  name: "product-page",
  initialState: defaultState,
  reducers: {
    addProductToCompareList: (
      state: CatalogPageState,
      action: PayloadAction<Product>
    ) => {
      if (!state.comparingProducts) {
        state.comparingProducts = [];
      }
      state.comparingProducts.push(action.payload);
    },
  }
});

export const productPageReducer = productPageSlice.reducer;
export const productPageActions = productPageSlice.actions;
