import React, {useEffect, useState} from 'react';
// @ts-ignore
import {
  PieChart,
  DoughnutChart,
  BarChart,
  LineChart,
  HorizontalBarChart,
} from '../Charts';
import ComparisonChartControls from '../Widget/ComparisonChartControls';
import {MonthlyPurchaseData} from '../../../redux/initialState';
import {ChartData, createChartData} from '../../../core/types/ChartData';
import styles from './styles';
import {DARK} from '@blueprintjs/core/lib/cjs/common/classes';
interface Props {
  monthList: MonthlyPurchaseData;
}

const monthList: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function (props: Props) {
  const [type, setType] = useState('Bar');
  const [dataType, setDataType] = useState('cost');
  const [full, setFull] = useState<boolean>(false);
  const [chartData, setChartData] = useState<ChartData>(
    createChartData('Pie', props.monthList.cost, monthList),
  );

  useEffect(() => {
    setChartData(
      createChartData(
        'Pie',
        // @ts-ignore
        props.monthList[dataType],
        monthList,
      ),
    );
  }, [dataType]);

  return (
    <div style={styles.container} className={DARK}>
      <div style={styles.caption}>Monthly Break-up</div>
      <ComparisonChartControls
        setDataType={setDataType}
        setType={setType}
        setFull={setFull}
      />
      {type === 'Bar' ? (
        <BarChart data={chartData} />
      ) : type === 'Pie' ? (
        <PieChart data={chartData} />
      ) : type === 'Doughnut' ? (
        <DoughnutChart data={chartData} />
      ) : type === 'Line' ? (
        <LineChart data={chartData} />
      ) : type === 'HorizontalBar' ? (
        <HorizontalBarChart data={chartData} />
      ) : (
        <div />
      )}
    </div>
  );
}
