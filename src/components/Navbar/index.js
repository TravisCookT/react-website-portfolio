import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLinks} from './NavbarElements'

const Navbar= ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">Travis</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='work'>WORK</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact'>CONTACT</NavLinks>
                        </NavItem>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar
