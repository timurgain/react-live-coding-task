import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "../../../store/hooks";
import { productModalSelector } from "../../../store/selectors/product-page";
import { useLessThenMediaQuery } from "../media-query";
import { LinkedProduct } from "../../../models";
import { productPageActions } from "../../../store/slices/product-page";

export function useProductModal() {
  const dispatch = useDispatch();
  const productModal = useSelector(productModalSelector);
  const isMobileViewPort = useLessThenMediaQuery(450);

  const openModal = useCallback(
    (product: LinkedProduct) => {
      dispatch(productPageActions.setProductModal(product));
      if (isMobileViewPort) window.history.pushState({ modalOpened: true }, "");
    },
    [dispatch, isMobileViewPort]
  );

  const closeModal = useCallback(() => {
    dispatch(productPageActions.setProductModal(undefined));
    if (isMobileViewPort) window.history.replaceState({ modalOpened: false }, "");
  }, [dispatch, isMobileViewPort]);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.modalOpened === false) closeModal();
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [dispatch, productModal]);

  useEffect(() => closeModal, []);

  return { productModal, openModal, closeModal };
}
