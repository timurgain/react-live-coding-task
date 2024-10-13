import { RootState } from '..';
import { Product } from '../../models';

const productPageSelector = (state: RootState) => state.productPage;

export const productModalSelector = (state: RootState) => productPageSelector(state).modalProduct;

export const compareListSelector = (state: RootState): Product[] =>
  productPageSelector(state).comparingProducts || [];
