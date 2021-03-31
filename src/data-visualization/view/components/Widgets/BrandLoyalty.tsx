import React from 'react';
// @ts-ignore
import {Button, Card, Divider} from '@blueprintjs/core';
import {Brand} from '../../../redux/initialState';
import styles from './styles';
import {DARK} from '@blueprintjs/core/lib/cjs/common/classes';

interface Props {
  brandList: Brand[];
}

export default function (props: Props) {
  return (
    <div
      style={{
        ...styles.container,
        paddingLeft: 30,
        justifyContent: 'flex-start',
      }}
      className={DARK}>
      <div style={{...styles.caption, fontSize: 50}}>Top Brands</div>
      <div
        style={{
          alignSelf: 'center',
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          padding: 5,
        }}>
        <img src={'https://logo.clearbit.com/nike.com'} style={styles.logo} />
        <img src={'https://logo.clearbit.com/google.com'} style={styles.logo} />
        <img src={'https://logo.clearbit.com/apple.com'} style={styles.logo} />
        <img
          src={'https://logo.clearbit.com/microsoft.com'}
          style={styles.logo}
        />
        <img src={'https://logo.clearbit.com/amul.com'} style={styles.logo} />
        <img src={'https://logo.clearbit.com/nestle.com'} style={styles.logo} />
        <img src={'https://logo.clearbit.com/pepsi.com'} style={styles.logo} />
        <img
          src={'https://logo.clearbit.com/netflix.com'}
          style={styles.logo}
        />
      </div>
    </div>
  );
}
