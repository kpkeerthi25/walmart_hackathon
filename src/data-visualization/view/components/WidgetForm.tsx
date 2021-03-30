import classNames from 'classnames';
import * as React from 'react';
import {Button, Classes, Overlay} from '@blueprintjs/core';

interface Props {
  open: boolean;
  changeOpen: (value: boolean) => void;
}

export default function (props: Props) {
  if (!props.open) {
    return <div />;
  } else {
    return (
      <Overlay
        isOpen={props.open}
        onClose={() => {
          props.changeOpen(false);
        }}
        className={Classes.OVERLAY_SCROLL_CONTAINER}>
        <div
          className={classes}
          style={{
            width: 'fit-content',
            margin: 'auto',
            position: 'relative',
            marginTop: 50,
            marginBottom: 50,
          }}>
          <Button minimal={true} outlined={true} icon={'floppy-disk'}>
            Save
          </Button>
        </div>
      </Overlay>
    );
  }
}

const OVERLAY_EXAMPLE_CLASS = 'docs-overlay-example-transition';

const classes = classNames(
  Classes.CARD,
  Classes.ELEVATION_4,
  OVERLAY_EXAMPLE_CLASS,
);

const styles = {
  container: {
    content: {
      width: 'fit-content',
      maxHeight: '95%',
      alignSelf: 'center',
      overflowY: 'visible' as 'initial',
    },
  },
  button: {
    alignSelf: 'right',
    margin: 5,
    marginRight: 20,
    padding: 15,
    borderWidth: 0,
    float: 'right' as 'right',
  },
};

const OVERLAY_TALL_CLASS = 'docs-overlay-example-tall';
