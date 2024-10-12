import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LinkedProduct, Product } from "../../models";

type CatalogPageState = {
  product: Product | undefined;
  linkedProducts: LinkedProduct[] | undefined;
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
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase('type', (state: CatalogPageState, action: PayloadAction<Product>) => {

    // })
  }
});

export const productPageReducer = productPageSlice.reducer;
export const productPageActions = productPageSlice.actions;
