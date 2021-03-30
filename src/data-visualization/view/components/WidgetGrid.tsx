import React, {useState} from 'react';
import GridLayout, {Layout} from 'react-grid-layout';
import './WidgetGrid.css';
import WidgetData from '../../core/types/WidgetData';
import Widget from './Widget';
import {Card} from '@blueprintjs/core';
import {BarChart} from './Charts';

interface Props {
  widgetDataList: WidgetData[];
}

const WidgetGrid = (props: Props) => {
  const ResponsiveReactGridLayout = GridLayout.WidthProvider(
    GridLayout.Responsive,
  );
  const gridItems = [
    {id: 1, name: 'Item One'},
    {id: 2, name: 'Item Two'},
    {id: 3, name: 'Item Three'},
    {id: 4, name: 'Item Four'},
    {id: 5, name: 'Item Five'},
    {id: 6, name: 'Item Six'},
    {id: 7, name: 'Item Seven'},
    {id: 8, name: 'Item Eight'},
    {id: 9, name: 'Item Nine'},
  ];
  const defaultLayout = [
    {i: '1', x: 0, y: 0, w: 5, h: 2},
    {i: '2', x: 5, y: 0, w: 3, h: 2},
    {i: '3', x: 8, y: 0, w: 3, h: 2},
    {i: '4', x: 0, y: 3, w: 5, h: 2},
    {i: '5', x: 5, y: 3, w: 3, h: 2},
    {i: '6', x: 8, y: 3, w: 3, h: 2},
    {i: '7', x: 0, y: 6, w: 5, h: 2},
    {i: '8', x: 5, y: 6, w: 3, h: 2},
    {i: '9', x: 8, y: 6, w: 3, h: 2},
  ];
  const [layout, setLayout] = useState(defaultLayout);
  return (
    <ResponsiveReactGridLayout
      layouts={{lg: layout}}
      measureBeforeMount={true}
      className="layout"
      onLayoutChange={(layout: Layout[]) => {
        setLayout(layout);
      }}
      // rowHeight={this.props.rowHeight}
      isResizable={true}
      // onDrag={this.onDragging}
      // onDragStop={this.onMoveCard}
      // onResizeStop={this.onResizeCard}
      margin={[20, 20]}>
      {props.widgetDataList.map((item, i) => {
        return (
          <div key={i} className="grid-item">
            <Widget data={item} height={layout[i].h} width={layout[i].w} />
          </div>
        );
      })}
    </ResponsiveReactGridLayout>
  );
};

export default WidgetGrid;
