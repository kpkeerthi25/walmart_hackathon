import React from 'react';
// @ts-ignore
import {Button, Card, Divider} from '@blueprintjs/core';
import WidgetData from '../../core/types/WidgetData';
import {
  BarChart,
  RadarChart,
  PieChart,
  LineChart,
  HorizontalBarChart,
  DoughnutChart,
} from './Charts';
interface Props {
  data: WidgetData;
  height: number;
  width: number;
}

export default function (props: Props) {
  if (props.data.type === 'Bar') {
    return (
      <BarChart data={props.data} width={props.width} height={props.height} />
    );
  }
  if (props.data.type === 'Line') {
    return (
      <LineChart data={props.data} width={props.width} height={props.height} />
    );
  }
  if (props.data.type === 'Pie') {
    return (
      <PieChart data={props.data} width={props.width} height={props.height} />
    );
  }
  if (props.data.type === 'HorizontalBar') {
    return (
      <HorizontalBarChart
        data={props.data}
        width={props.width}
        height={props.height}
      />
    );
  }
  if (props.data.type === 'Radar') {
    return (
      <RadarChart data={props.data} width={props.width} height={props.height} />
    );
  }
  if (props.data.type === 'Doughnut') {
    return (
      <DoughnutChart
        data={props.data}
        width={props.width}
        height={props.height}
      />
    );
  }

  return <div />;
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
