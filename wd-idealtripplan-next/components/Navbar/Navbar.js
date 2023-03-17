import React, { useState } from "react";
import { PagesLinks } from "./../../utils/HeaderLinks";
import { useRouter } from "next/router";
import style from "./Navbar.module.scss";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
const url = require("url");
function NavBar() {
  const [linkActive, setLinkActive] = useState("Home");
  const [Input, setInput] = useState("");

  const router = useRouter();
  const url_parts = url.parse(router.asPath, true);
  const { query, pathname } = url_parts;
  function handleSubmit(e) {
    e.preventDefault();
    router.push({
      pathname: "/bookingconfirm",
      query: {
        booking_confirm: Input,
      },
    });
  }
  return (
    <Navbar expand="lg">
      <Container className={style.container}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${style.navlinks}`}>
            {PagesLinks.map((link) => (
              <Nav.Link
                href=""
                onClick={() => setLinkActive(link.name)}
                key={link.id}
                className={link.name === linkActive ? style.navlinkActive : ""}
              >
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search your Booking"
              className="me-2"
              value={Input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
