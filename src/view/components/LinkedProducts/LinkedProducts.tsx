import { LinkedProduct, Product, ProductLinkType } from '../../../models/index';
import { useDispatch } from '../../../store/hooks';
import styles from './LinkedProducts.module.css';

type Props = {
  products: LinkedProduct[] | undefined;
}

export function LinkedProducts({ products }: Props) {

  const dispatch = useDispatch();

  function handleClick(linkType: ProductLinkType) {
    if (linkType === 'analog') {
      console.log('Аналог');
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
          <button className={styles['product__name-btn']} type='button' onClick={() => handleClick(product.linkType)}>{product.name}</button>
          {getProductLinkType(product.linkType)}
        </li>
      ))}
    </ul>
  )
}
