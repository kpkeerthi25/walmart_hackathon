import * as React from "react";
import { Alignment, Button, Navbar } from "@blueprintjs/core";

interface Props {
  setRoute: (route: string) => void;
  className: string;
}

export default function (props: Props) {
  return (
    <Navbar fixedToTop={false} className={"bp3-dark " + props.className}>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Madras Institute of Technology</Navbar.Heading>
        <Navbar.Divider />
        <Button
          minimal={true}
          outlined={true}
          icon={"people"}
          style={{ marginRight: 10 }}
          onClick={() => {
            props.setRoute("interview");
          }}
        />
        <Button
          minimal={true}
          outlined={true}
          style={{ marginRight: 10 }}
          onClick={() => {
            props.setRoute("studentChange");
          }}
          icon={"endorsed"}
        />
        <Button
          minimal={false}
          outlined={true}
          style={{ marginRight: 10 }}
          icon={"drawer-left"}
        />
      </Navbar.Group>
    </Navbar>
  );
}