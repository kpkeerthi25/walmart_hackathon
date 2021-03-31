import React from 'react';
// @ts-ignore
import {Button, Card, Divider} from '@blueprintjs/core';
import {Brand, Product} from '../../../redux/initialState';
import styles from './styles';
import {DARK} from '@blueprintjs/core/lib/cjs/common/classes';

interface Props {
  mostProfitableProductList: Product[];
}

export default function (props: Props) {
  return (
    <div style={{...styles.container}} className={DARK}>
      <div style={styles.caption}>Costliest Purchases</div>
      <table>
        {[1, 2, 3].map((product: number) => (
          <tr>
            <td>
              <img
                src={
                  'https://i5.walmartimages.com/asr/2f57503c-c67f-49ae-ac4e-b31609eba7a1.a8309f04fbbc16354279f7790d7744bd.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'
                }
                style={styles.image}
              />
            </td>
            <td>
              <div style={styles.productName}>
                Verizon iPhone 12 mini 64GB Black
              </div>
            </td>
            <td>
              <div style={styles.productName}>₹1000</div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
