import * as React from 'react';
import {Alignment, Button, Navbar} from '@blueprintjs/core';

interface Props {
  setRoute: (route: string) => void;
  className: string;
}

export default function (props: Props) {
  return (
    <Navbar fixedToTop={false} className={'bp3-dark ' + props.className}>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>WalMart Hackathon</Navbar.Heading>
        <Navbar.Divider />
        <Button
          minimal={true}
          outlined={true}
          icon={'chart'}
          style={{marginRight: 10}}
          onClick={() => {
            props.setRoute('interview');
          }}>
          Data Visualization
        </Button>
        <Button
          minimal={true}
          outlined={true}
          icon={'shopping-cart'}
          style={{marginRight: 10}}
          onClick={() => {
            props.setRoute('studentChange');
          }}>
          Products
        </Button>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Button
          icon={'drawer-left'}
          // minimal={false}
          // outlined={true}
          style={{marginRight: 10}}>
          Logout
        </Button>
      </Navbar.Group>
    </Navbar>
  );
}
