import { useCallback } from "react";
import { useDispatch, useSelector } from "../../../store/hooks";
import { compareListSelector } from "../../../store/selectors/product-page";
import { LinkedProduct } from "../../../models";
import { productPageActions } from "../../../store/slices/product-page";

export function useCompareProducts() {
  const dispatch = useDispatch();

  const compareProducts = useSelector(compareListSelector);
  const addToCompareList = useCallback(
    (product: LinkedProduct) => {
      dispatch(productPageActions.addProductToCompareList(product));
    },
    [dispatch]
  );

  return { compareProducts, addToCompareList };
}
