import clsx from 'clsx';
import { Product as ProductType } from '../../../models';
import { Product } from '../Product/Product';
import styles from './CompareList.module.css';

type Props = {
  products: ProductType[];
  className?: string;
}

export function CompareList({products, className}: Props) {
  return (
    <ul className={clsx(styles['list'], className)}>
      {products.map(product => (
        <li key={product.id} className={styles['list__item']}>
          <Product product={product} role={'related'}/>
        </li>
      ))}
    </ul>
  )
}
