import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
const Footer = () => {
    return (
        <Navbar bg="light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ml-auto footer">
                    <Nav.Link href="#guidelines">Guidelines</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                    <Nav.Link href="#support">Support</Nav.Link>
                    <Nav.Link href="#api">API</Nav.Link>
                    <Nav.Link href="#security">Security</Nav.Link>
                    <Nav.Link href="#lists">Lists</Nav.Link>
                    <Nav.Link href="#bookmarklet">Bookmarklet</Nav.Link>
                    <Nav.Link href="#legal">Legal</Nav.Link>
                    <Nav.Link href="#applyToYc">Apply to YC</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Footer;