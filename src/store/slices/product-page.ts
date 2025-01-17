import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models";

type CatalogPageState = {
  modalProduct: Product | undefined;
  linkedProducts: Product[] | undefined;
  comparingProducts: Product[] | undefined;
};

const defaultState: CatalogPageState = {
  modalProduct: undefined,
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
      if (state.comparingProducts.some((p) => p.id === action.payload.id))
        return;
      state.comparingProducts.push(action.payload);
    },
    removeProductFromCompareList: (
      state: CatalogPageState,
      action: PayloadAction<Product>
    ) => {
      if (!state.comparingProducts) return;
      state.comparingProducts = state.comparingProducts.filter(
        (p) => p.id !== action.payload.id
      );
    },
    setProductModal: (state: CatalogPageState, action: PayloadAction<Product | undefined>) => {
      state.modalProduct = action.payload;
    }
  },
});

export const productPageReducer = productPageSlice.reducer;
export const productPageActions = productPageSlice.actions;
