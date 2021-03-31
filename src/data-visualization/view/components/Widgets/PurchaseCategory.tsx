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
import {ChartData, createChartData} from '../../../core/types/ChartData';
import styles from './styles';
import {DARK} from '@blueprintjs/core/lib/cjs/common/classes';
import {CategoryData} from '../../../redux/initialState';
interface Props {
  categoryDataList: CategoryData[];
}

export default function (props: Props) {
  const [type, setType] = useState('Pie');
  const [dataType, setDataType] = useState('cost');
  const [full, setFull] = useState<boolean>(false);
  const [chartData, setChartData] = useState<ChartData>(
    createChartData(
      'Pie',
      props.categoryDataList.map(
        (categoryData: CategoryData) => categoryData.cost,
      ),
      props.categoryDataList.map(
        (categoryData: CategoryData) => categoryData.label,
      ),
    ),
  );

  useEffect(() => {
    setChartData(
      dataType === 'items'
        ? createChartData(
            'Pie',
            props.categoryDataList.map(
              (categoryData: CategoryData) => categoryData.items,
            ),
            props.categoryDataList.map(
              (categoryData: CategoryData) => categoryData.label,
            ),
          )
        : dataType === 'cost'
        ? createChartData(
            'Pie',
            props.categoryDataList.map(
              (categoryData: CategoryData) => categoryData.cost,
            ),
            props.categoryDataList.map(
              (categoryData: CategoryData) => categoryData.label,
            ),
          )
        : createChartData(
            'Pie',
            props.categoryDataList.map(
              (categoryData: CategoryData) => categoryData.discount,
            ),
            props.categoryDataList.map(
              (categoryData: CategoryData) => categoryData.label,
            ),
          ),
    );
  }, [dataType]);

  return (
    <div style={styles.container} className={DARK}>
      <div style={styles.caption}>Category Break-up</div>
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
