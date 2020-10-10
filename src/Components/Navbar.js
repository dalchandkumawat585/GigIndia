import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="#home">Hacker News</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#welcome">Welcome</Nav.Link>
                    <Nav.Link href="#new">New</Nav.Link>
                    <Nav.Link href="#threads">Threads</Nav.Link>
                    <Nav.Link href="#past">Past</Nav.Link>
                    <Nav.Link href="#comments">Comments</Nav.Link>
                    <Nav.Link href="#ask">Ask</Nav.Link>
                    <Nav.Link href="#show">Show</Nav.Link>
                    <Nav.Link href="#jobs">Jobs</Nav.Link>
                    <Nav.Link href="#submit">Submit</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarComponent;