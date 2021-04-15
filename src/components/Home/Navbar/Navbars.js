import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './Navbar.css'
const Navbars = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Link className="mr-5" to="/">Home</Link>
        <Link className="mr-5" to="/about">About</Link>
        <Link className="mr-5" to="/projects">Project</Link>
        <Link className="mr-5" to="/contact">Contact Us</Link>
        <Link className="mr-5" to="/admin">Admin</Link>
        <button className="btn btn-dark mr-5"><Link className="mr-5 text-white" to="/login">Login</Link></button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default Navbars;
