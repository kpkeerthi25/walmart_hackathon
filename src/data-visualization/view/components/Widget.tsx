import React from 'react';
// @ts-ignore
import {Button, Card, Divider} from '@blueprintjs/core';
import WidgetData from '../../core/types/WidgetData';

interface Props {
  data: WidgetData;
}

export default function (props: Props) {
  return (
    <Card style={styles.container} interactive={true} onClick={() => {}} />
  );
}

const styles = {
  container: {
    margin: 10,
    marginBottom: 0,
    marginRight: 10,
    alignItems: 'center',
    maxWidth: '95%',
    display: 'flex',
    flexDirection: 'column' as 'column',
  },
  image: {
    height: 200,
    width: 320,
    maxWidth: '100%',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  company: {
    fontWeight: 'bold' as 'bold',
    marginTop: 10,
  },
  text: {
    color: '#888',
    fontWeight: 'bold' as 'bold',
  },
  button: {
    margin: 10,
  },
};
