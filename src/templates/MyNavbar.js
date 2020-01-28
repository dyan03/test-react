import React, {Fragment, useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink } from 'react-router-dom';
import RootRouter from '../routers/RootRouter'

function MyNavbar(){

    const [login, setLogin]=useState(false);

    function handleSubmit(){
        setLogin(!login)
    }

return(
    <Fragment>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">서비스 이름</Navbar.Brand>
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
            { 
            login
            ?
            <div style ={{display:'flex'}}>
                <Nav.Link href="signIn">로그인</Nav.Link>
                <Nav.Link href="signUp">회원가입</Nav.Link>
            </div>
            :
            <Nav.Link href="signUp">회원가입</Nav.Link>

            }
        <button type="submit" style={{width:100, height:30}} onClick={handleSubmit}>check</button>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
    <RootRouter/>
    </Fragment>
    )
}

export default MyNavbar