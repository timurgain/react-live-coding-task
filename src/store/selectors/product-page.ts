import { RootState } from '..';
import { Product } from '../../models';

const productPageSelector = (state: RootState) => state.productPage;

export const productSelector = (state: RootState) => productPageSelector(state).product;

export const compareListSelector = (state: RootState): Product[] =>
  productPageSelector(state).comparingProducts || [];
