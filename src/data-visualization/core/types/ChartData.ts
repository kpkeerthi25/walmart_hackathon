interface ChartDataset {
  label: string;
  backgroundColor: string[] | string;
  borderColor: string[] | string;
  borderWidth: number;
  hoverBackgroundColor: string[] | string;
  hoverBorderColor: string[] | string;
  data: number[];
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataset[];
}

type ChartTypes =
  | 'Bar'
  | 'Line'
  | 'HorizontalBar'
  | 'Pie'
  | 'Doughnut'
  | 'Radar';

export function createChartData(
  type: ChartTypes,
  data: number[],
  labelList?: string[],
): ChartData {
  labelList = labelList ? labelList : [];
  labelList = data.map((value, index) =>
    // @ts-ignore
    labelList[index] ? labelList[index] : '',
  );
  if (type === 'Line' || type === 'Radar') {
    const randomColor: string = generateRandomColor();
    return {
      datasets: [
        {
          label: '',
          backgroundColor: randomColor,
          borderColor: computeBorderColor(randomColor),
          borderWidth: 1,
          hoverBackgroundColor: computeHoverColor(randomColor),
          hoverBorderColor: computeHoverBorderColor(randomColor),
          data: data,
        },
      ],
      labels: labelList,
    };
  } else {
    const randomColorList: string[] = data.map(() => generateRandomColor());
    return {
      datasets: [
        {
          label: '',
          backgroundColor: randomColorList,
          borderColor: randomColorList.map((randomColor: string) =>
            computeBorderColor(randomColor),
          ),
          borderWidth: 1,
          hoverBackgroundColor: randomColorList.map((randomColor: string) =>
            computeHoverColor(randomColor),
          ),
          hoverBorderColor: randomColorList.map((randomColor: string) =>
            computeHoverBorderColor(randomColor),
          ),
          data: data,
        },
      ],
      labels: labelList,
    };
  }
}

const generateRandomColor = (): string => {
  return (
    'hsl(' +
    360 * Math.random() +
    ',' +
    (45 + 70 * Math.random()) +
    '%,' +
    (70 + 10 * Math.random()) +
    '%)'
  );
};
const computeBorderColor = (color: string): string => color;
const computeHoverBorderColor = (color: string): string => color;
const computeHoverColor = (color: string): string => color;
