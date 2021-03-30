interface ChartDataset {
  label: string;
  backgroundColor: string[] | string;
  borderColor: string[] | string;
  borderWidth: number;
  hoverBackgroundColor: string[] | string;
  hoverBorderColor: string[] | string;
  data: number[];
}

interface ChartData {
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

interface WidgetData {
  id: number;
  data: ChartData;
  type: ChartTypes;
}

export function formatWidgetData(
  type: ChartTypes,
  data: number[],
  labelList?: string[],
): WidgetData {
  labelList = labelList ? labelList : [];
  labelList = data.map((value, index) =>
    // @ts-ignore
    labelList[index] ? labelList[index] : '',
  );
  if (type === 'Line' || type === 'Radar') {
    const randomColor: string = generateRandomColor();
    return {
      type,
      id: 0,
      data: {
        datasets: [
          {
            label: '',
            backgroundColor: randomColor,
            borderColor: computeBorderColor(randomColor),
            borderWidth: 1,
            hoverBackgroundColor: computeHoverColor(randomColor),
            hoverBorderColor: computeHoverBorderColor(randomColor),
            data: [65, 59, 80, 81, 56, 155, 40],
          },
        ],
        labels: labelList,
      },
    };
  } else {
    const randomColorList: string[] = data.map(() => generateRandomColor());
    return {
      type,
      id: 0,
      data: {
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
            data: [65, 59, 80, 81, 56, 155, 40],
          },
        ],
        labels: labelList,
      },
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

export default WidgetData;
