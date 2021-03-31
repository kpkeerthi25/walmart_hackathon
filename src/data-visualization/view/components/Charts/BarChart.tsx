import React from 'react';
import {Bar} from 'react-chartjs-2';
import {ChartData} from '../../../core/types/ChartData';

interface Props {
  data: ChartData;
}

export default function (props: Props) {
  return (
    <Bar
      data={{
        ...props.data,
        datasets: [
          {
            ...props.data.datasets[0],
            data: [...props.data.datasets[0].data],
          },
        ],
      }}
      options={{legend: {display: false}}}
    />
  );
}
