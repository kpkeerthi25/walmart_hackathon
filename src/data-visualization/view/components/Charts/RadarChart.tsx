import React from 'react';
import WidgetData from '../../../core/types/WidgetData';
import {Bar, Radar} from 'react-chartjs-2';

interface Props {
  data: WidgetData;
  height: number;
  width: number;
}

export default function (props: Props) {
  return (
    <Radar
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
