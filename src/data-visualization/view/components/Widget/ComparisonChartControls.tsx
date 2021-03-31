import React from 'react';
import {Button, ButtonGroup} from '@blueprintjs/core';

interface Props {
  setType: (
    type: 'Pie' | 'Doughnut' | 'Line' | 'Bar' | 'HorizontalBar',
  ) => void;
  setFull: (value: boolean) => void;
  setDataType: (type: string) => void;
}

export default function (props: Props) {
  return (
    <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginRight: 10,
        }}>
        <ButtonGroup minimal={true}>
          <Button
            onClick={() => {
              props.setDataType('items');
            }}>
            Items
          </Button>
          <Button
            onClick={() => {
              props.setDataType('cost');
            }}>
            Spent
          </Button>
          <Button
            onClick={() => {
              props.setDataType('discount');
            }}>
            Saved
          </Button>
        </ButtonGroup>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <ButtonGroup minimal={true}>
          <Button
            icon={'doughnut-chart'}
            onClick={() => {
              props.setType('Doughnut');
            }}
          />
          <Button
            icon={'pie-chart'}
            onClick={() => {
              props.setType('Pie');
            }}
          />
          <Button
            icon={'timeline-line-chart'}
            onClick={() => {
              props.setType('Line');
            }}
          />
          <Button
            icon={'timeline-bar-chart'}
            onClick={() => {
              props.setType('Bar');
            }}
          />
          <Button
            icon={'horizontal-bar-chart'}
            onClick={() => {
              props.setType('HorizontalBar');
            }}
          />
          <Button
            icon={'zoom-to-fit'}
            onClick={() => {
              props.setFull(false);
            }}
          />
        </ButtonGroup>
      </div>
    </div>
  );
}
