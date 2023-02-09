import React, { useState } from "react";
import { PagesLinks } from "./../../utils/HeaderLinks";
import style from "./Navbar.module.scss";
import { Container, Navbar, Nav } from "react-bootstrap";
function NavBar() {
  const [linkActive, setLinkActive] = useState("Home");
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
