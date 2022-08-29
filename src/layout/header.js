import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-right">
                    <NavLink to="/" className="nav-link">Student List</NavLink>
                    <NavLink to="/addStudent" className="nav-link">Add Student</NavLink>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default Header