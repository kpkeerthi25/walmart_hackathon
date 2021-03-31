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
      style={{display: 'flex', flex: 1, backgroundColor: '#737373'}}>
      <div
        className="container-fluid-nav text-center"
        style={{
          flex: 1,
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 30,
        }}>
        WalMart Hackathon
      </div>

      {/* <Button
          minimal={true}
          outlined={true}
          icon={'people'}
          style={{marginRight: 10}}
          onClick={() => {
            props.setRoute('interview');
          }}
        />
        <Button
          minimal={true}
          outlined={true}
          style={{marginRight: 10}}
          onClick={() => {
            props.setRoute('studentChange');
          }}
          icon={'endorsed'}
        />
        <Button
          minimal={false}
          outlined={true}
          style={{marginRight: 10}}
          icon={'drawer-left'}
        /> */}
    </Navbar>
  );
}
