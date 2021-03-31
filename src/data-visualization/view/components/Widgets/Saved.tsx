import React from 'react';
// @ts-ignore
import {Card} from '@blueprintjs/core';
import styles from './styles';

interface Props {
  totalSaved: number;
}

export default function (props: Props) {
  return (
    <Card
      elevation={2}
      style={{...styles.container, justifyContent: 'flex-start'}}>
      <div style={styles.caption}>Saved</div>
      <div style={styles.value}>
        ${props.totalSaved.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </div>
    </Card>
  );
}
