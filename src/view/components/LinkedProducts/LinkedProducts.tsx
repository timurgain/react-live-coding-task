import { LinkedProduct, Product, ProductLinkType } from '../../../models/index';
import styles from './LinkedProducts.module.css';

type Props = {
  products: LinkedProduct[] | undefined;
}

export function LinkedProducts({ products }: Props) {

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
          <button className={styles['product__name-btn']} type='button'>{product.name}</button>
          {getProductLinkType(product.linkType)}
        </li>
      ))}
    </ul>
  )
}
