import React from 'react';
import styles from './styles';

interface Props {
  totalProducts: number;
  totalSaved: number;
  title: string;
}

export default function (props: Props) {
  return (
    <div style={{...styles.container, marginBottom: 0}}>
      <div style={styles.caption}>Products Purchased</div>
      <div style={styles.value}>
        {props.totalProducts.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </div>
    </div>
  );
}
