import { LinkedProduct, Product, ProductLinkType } from '../../../models/index';
import { useDispatch } from '../../../store/hooks';
import { productPageActions } from '../../../store/slices/product-page';
import styles from './LinkedProducts.module.css';

type Props = {
  products: LinkedProduct[] | undefined;
}

export function LinkedProducts({ products }: Props) {

  const dispatch = useDispatch();

  function handleClick(product: LinkedProduct) {
    const linkType = product.linkType;
    if (linkType === 'analog') {
      dispatch(productPageActions.addProductToCompareList(product))
    }
    if (linkType === 'related') {
      console.log('Сопутствующий');
    }
    if (!linkType) {
      console.log('Неизвестный');
    }
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
    <ul className={styles['list']}>
      {products.map(product => (
        <li key={product.id} className={styles['product']}>
          <button className={styles['product__name-btn']} type='button' onClick={() => handleClick(product)}>{product.name}</button>
          {getProductLinkType(product.linkType)}
        </li>
      ))}
    </ul>
  )
}
