import React from 'react';
// @ts-ignore
import {Button, Card, Divider, Text} from '@blueprintjs/core';
import {Brand} from '../../../redux/initialState';
import styles from './styles';
import {DARK} from '@blueprintjs/core/lib/cjs/common/classes';

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
        ₹{' '}
        {(props.totalSaved + 15698)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </div>
    </Card>
  );
}
