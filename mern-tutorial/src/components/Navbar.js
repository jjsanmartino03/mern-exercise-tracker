import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const NavigationBar = (props) => {
  let currentLocation = props.global.currentLocation;
  return (
    <Navbar
    collapseOnSelect={true}
    expand="md"
    className="justify-content-md-around border-bottom"
    sticky="top"
    bg="dark"
    variant="dark"
    >
      <Navbar.Brand>Exercise Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-nav-navbar"  className="flex-grow-0"/>
      <Navbar.Collapse id="responsive-nav-navbar" className="flex-grow-0">
        <Nav className="justify-content-around">
          {props.navbar.links.map((link, index) => (
            <Nav.Item key={index}>
              <Nav.Link
              className={(currentLocation === link.path ? "activate " : "")+"py-0"}
              as={Link}
              to={link.path}
              eventKey={link.path}
              >
                {link.text}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = ({navbar, global}) => ({navbar, global});

export default connect(mapStateToProps)(NavigationBar);