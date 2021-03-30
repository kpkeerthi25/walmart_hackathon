import React from 'react';
import WidgetData from '../../../core/types/WidgetData';
import {Bar, HorizontalBar} from 'react-chartjs-2';

interface Props {
  data: WidgetData;
  height: number;
  width: number;
}

export default function (props: Props) {
  return (
    <HorizontalBar
      data={{
        ...props.data.data,
        datasets: [
          {
            ...props.data.data.datasets[0],
            data: [...props.data.data.datasets[0].data],
          },
        ],
      }}
      options={{legend: {display: false}}}
    />
  );
}
