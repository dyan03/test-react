import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom';

function MyNavbar(){
return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="home">서비스 이름</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Nav>
        {/* <Nav.Link href="signIn">로그인</Nav.Link> */}
        <NavLink to= '/signIn'>로그인</NavLink>
        {/* <a href="" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target={SignIn}>로그인</a> */}
        <Nav.Link eventKey={2} href="signUp">
            회원가입
        </Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    )
}

export default MyNavbar