import React, {useEffect, useState} from 'react';
// @ts-ignore
import {Card} from '@blueprintjs/core';
import {
  PieChart,
  DoughnutChart,
  BarChart,
  LineChart,
  HorizontalBarChart,
} from '../Charts';
import ComparisonChartControls from '../Widget/ComparisonChartControls';
import {CategoryDataWrapper} from '../../../redux/initialState';
import {ChartData, createChartData} from '../../../core/types/ChartData';
import styles from './styles';
import {DARK} from '@blueprintjs/core/lib/cjs/common/classes';
interface Props {
  categoryData: CategoryDataWrapper;
}

export default function (props: Props) {
  const [type, setType] = useState('Pie');
  const [dataType, setDataType] = useState('cost');
  const [full, setFull] = useState<boolean>(false);
  const [chartData, setChartData] = useState<ChartData>(
    createChartData(
      'Pie',
      props.categoryData.cost.data,
      props.categoryData.cost.labels,
    ),
  );

  useEffect(() => {
    setChartData(
      dataType === 'items'
        ? createChartData(
            'Pie',
            props.categoryData.items.data,
            props.categoryData.items.labels,
          )
        : dataType === 'cost'
        ? createChartData(
            'Pie',
            props.categoryData.cost.data,
            props.categoryData.cost.labels,
          )
        : createChartData(
            'Pie',
            props.categoryData.discount.data,
            props.categoryData.discount.labels,
          ),
    );
  }, [dataType]);

  return (
    <div style={styles.container} className={DARK}>
      <div style={styles.caption}>Category Break-up</div>
      <ComparisonChartControls setType={setType} setFull={setFull} />
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
