import React from 'react';
import styles from './styles';
import {DARK} from '@blueprintjs/core/lib/cjs/common/classes';

interface Props {
  title: String;
}

export default function (props: Props) {
  return (
    <div style={styles.container} className={DARK}>
      <div style={styles.caption}>Walmart Title</div>
      <div style={styles.value}>{props.title}</div>
    </div>
  );
}
