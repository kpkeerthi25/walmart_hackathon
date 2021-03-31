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
  onPress: () => void;
  full?: boolean;
  changeWidget: (widgetData: WidgetData) => void;
}

export default function (props: Props) {
  const styles = {
    container: {
      margin: 10,
      marginBottom: 0,
      marginRight: 10,
      alignItems: 'center',
      width: props.full ? '90%' : 500,
      display: 'flex',
      flexDirection: 'column' as 'column',
    },
  };
  if (props.data.type === 'Bar') {
    return (
      <Card interactive style={styles.container} onClick={props.onPress}>
        <select
          onChange={(e) =>
            // @ts-ignore
            props.changeWidget({...props.data, type: e.target.value})
          }>
          <option value={'Bar'}>Bar</option>
          <option value={'Line'}>Line</option>
          <option value={'Horizontal Bar'}>Horizontal Bar</option>
        </select>
        <BarChart data={props.data} width={props.width} height={props.height} />
      </Card>
    );
  }
  if (props.data.type === 'Line') {
    return (
      <Card interactive style={styles.container} onClick={props.onPress}>
        <LineChart
          data={props.data}
          width={props.width}
          height={props.height}
        />
      </Card>
    );
  }
  if (props.data.type === 'Pie') {
    return (
      <Card interactive style={styles.container} onClick={props.onPress}>
        <PieChart data={props.data} width={props.width} height={props.height} />
      </Card>
    );
  }
  if (props.data.type === 'HorizontalBar') {
    return (
      <Card interactive style={styles.container} onClick={props.onPress}>
        <HorizontalBarChart
          data={props.data}
          width={props.width}
          height={props.height}
        />
      </Card>
    );
  }
  if (props.data.type === 'Radar') {
    return (
      <Card interactive style={styles.container} onClick={props.onPress}>
        <RadarChart
          data={props.data}
          width={props.width}
          height={props.height}
        />
      </Card>
    );
  }
  if (props.data.type === 'Doughnut') {
    return (
      <Card interactive style={styles.container} onClick={props.onPress}>
        <DoughnutChart
          data={props.data}
          width={props.width}
          height={props.height}
        />
      </Card>
    );
  }

  return <div />;
}
