import React, { Fragment } from "react";
import { Nav } from "react-bootstrap";

const Header = (event) => {
  return (
    <Fragment>
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/mail">MailBox</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/inbox" eventKey="link-1">Inbox</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Coming Soon-2</Nav.Link>
      </Nav.Item>
    </Nav>
    </Fragment>
  );
};

export default Header;
