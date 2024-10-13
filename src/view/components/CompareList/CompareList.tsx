import { Product as ProductType } from '../../../models';
import { Product } from '../Product/Product';
import styles from './CompareList.module.css';

type Props = {
  products: ProductType[];
}

export function CompareList({products}: Props) {
  return (
    <ul className={styles['list']}>
      {products.map(product => (
        <li key={product.id}>
          <Product product={product} role={'related'}/>
        </li>
      ))}
    </ul>
  )
}
