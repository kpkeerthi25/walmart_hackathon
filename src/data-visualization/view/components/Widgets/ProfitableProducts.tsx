import React from 'react';
import {Product} from '../../../redux/initialState';
import styles from './styles';
import {DARK} from '@blueprintjs/core/lib/cjs/common/classes';

interface Props {
  mostProfitableProductList: Product[];
}

export default function (props: Props) {
  return (
    <div style={{...styles.container}} className={DARK}>
      <div style={styles.caption}>Profitable Purchases</div>
      <table>
        {props.mostProfitableProductList.map((product: Product) => (
          <tr>
            <td>
              <img src={product.image} style={styles.image} />
            </td>
            <td>
              <div style={styles.productName}>{product.name}</div>
            </td>
            <td>
              <div style={styles.productName}>${product.price}</div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
