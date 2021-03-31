import * as React from 'react';
import {Alignment, Button, Navbar} from '@blueprintjs/core';

interface Props {
  setRoute: (route: string) => void;
  className: string;
}

export default function (props: Props) {
  return (
    <Navbar
      fixedToTop={false}
      className={'bp3-dark ' + props.className}
      style={{backgroundColor: '#737373'}}>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading style={{fontWeight: 'bold', fontSize: 30}}>
          WalMart Hackathon
        </Navbar.Heading>
        <Navbar.Divider />
        {/* <Button
          outlined={true}
          icon={'chart'}
          style={{marginRight: 10, background: 'green'}}
          onClick={() => {
            props.setRoute('interview');
          }}>
          Data Visualization
        </Button>
        <Button
          outlined={true}
          icon={'shopping-cart'}
          style={{marginRight: 10, background: 'green'}}
          onClick={() => {
            props.setRoute('studentChange');
          }}>
          Products
        </Button> */}
      </Navbar.Group>
    </Navbar>
  );
}
