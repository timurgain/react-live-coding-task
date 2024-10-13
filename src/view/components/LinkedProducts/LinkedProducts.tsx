import clsx from 'clsx';
import { LinkedProduct, ProductLinkType } from '../../../models/index';
import { useDispatch } from '../../../store/hooks';
import { productPageActions } from '../../../store/slices/product-page';
import styles from './LinkedProducts.module.css';

type Props = {
  products: LinkedProduct[] | undefined;
  className?: string;
}

export function LinkedProducts({ products, className }: Props) {

  const dispatch = useDispatch();

  function handleClick(product: LinkedProduct) {
    const linkType = product.linkType;
    if (linkType === 'analog') {
      dispatch(productPageActions.addProductToCompareList(product))
      return;
    }
    dispatch(productPageActions.setProductModal(product));
  }

  if (!products) return null;
  const getProductLinkType = (linkType: ProductLinkType) => {
    if (!linkType) return null;
    if (linkType === 'analog') {
      return (
        <p className={styles['product__link-type']}> - Аналог</p>
      )
    }
    if (linkType === 'related') {
      return (
        <p className={styles['product__link-type']}> - Сопутствующий товар</p>
      )
    }
  }

  return (
    <ul className={clsx(styles['list'], className)}>
      {products.map(product => (
        <li key={product.id} className={styles['product']}>
          <button className={styles['product__name-btn']} type='button' onClick={() => handleClick(product)}>{product.name}</button>
          {getProductLinkType(product.linkType)}
        </li>
      ))}
    </ul>
  )
}
