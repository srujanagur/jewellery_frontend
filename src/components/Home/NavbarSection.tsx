import React from 'react'
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { rootState } from '../../redux/reducers'
import { BsFillBrightnessHighFill, BsFillMoonFill } from 'react-icons/bs'

import { switchTheme } from '../../redux/Actions/themeAction'


import "./Home.css"

export default function NavbarSection() {
    const theme = useSelector((state: rootState) => state.themeReducer.theme)
    const dispatch = useDispatch();
    return (
        <div className='navbarsection'>
            <Navbar collapseOnSelect expand={false}>
                <Container>
                    <Navbar.Brand ><Link className='cartbtn' to={"/"}>Home</Link></Navbar.Brand>
                    <Navbar.Brand ><Link className='cartbtn' to={"/products"}>Products</Link></Navbar.Brand>
                    <Navbar.Brand ><Link className='cartbtn' to={"/Cart"}>My Cart</Link></Navbar.Brand>
                    <Navbar.Brand ><Link className='cartbtn' to={"/login"}>Login</Link></Navbar.Brand>
                    {theme === "light" ? <BsFillBrightnessHighFill onClick={() => dispatch(switchTheme())} /> : <BsFillMoonFill className='sun' onClick={() => dispatch(switchTheme())} />}                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel" className='cartbtn'>Beauty Collections</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-2">
                                <Link className='cartbtn' to={"/"}>Home</Link>
                                <Link className='cartbtn' to={"/products"}>Products</Link>

                                <Link className='cartbtn' to={"/Cart"}>My Cart</Link>
                                <Link className='cartbtn' to={"/login"}>Login</Link>

                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
