import React, {useState} from 'react';
// @ts-ignore
import {Button, ButtonGroup, Card, Divider, Text} from '@blueprintjs/core';
import {ImportData} from '../../../redux/initialState';
import styles from './styles';
import {ChartData, createChartData} from '../../../core/types/ChartData';
import {
  BarChart,
  DoughnutChart,
  HorizontalBarChart,
  LineChart,
  PieChart,
} from '../Charts';
import {DARK} from '@blueprintjs/core/lib/cjs/common/classes';

interface Props {
  importData: ImportData;
}

export default function (props: Props) {
  const [type, setType] = useState<'Pie' | 'Doughnut'>('Doughnut');
  const chartData: ChartData = createChartData(
    'Pie',
    [props.importData.local, props.importData.imported],
    ['Local', 'Imported'],
  );
  return (
    <div style={styles.container} className={DARK}>
      <div style={styles.caption}>Local vs. Imported</div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <ButtonGroup minimal={true}>
          <Button
            icon={'doughnut-chart'}
            onClick={() => {
              setType('Doughnut');
            }}
          />
          <Button
            icon={'pie-chart'}
            onClick={() => {
              setType('Pie');
            }}
          />
        </ButtonGroup>
      </div>
      {type === 'Pie' ? (
        <PieChart data={chartData} />
      ) : (
        <DoughnutChart data={chartData} />
      )}
    </div>
  );
}
