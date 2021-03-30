import React from 'react';
import WidgetData from '../../../core/types/WidgetData';
import {Pie} from 'react-chartjs-2';

interface Props {
  data: WidgetData;
  width: number;
  height: number;
}

export default function (props: Props) {
  return (
    <Pie
      data={{
        ...props.data.data,
        datasets: [
          {
            ...props.data.data.datasets[0],
            data: [...props.data.data.datasets[0].data],
          },
        ],
      }}
      options={{maintainAspectRatio: false}}
    />
  );
}
