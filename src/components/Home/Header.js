import { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header-style.css';
import heart from '../../app/assets/img/heart.svg';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar className='navbarColor container-fluid sticky-nav py-3' expand='md'>

            <NavbarBrand className='ms-5 d-flex' href='/home'>
                <img src={heart} alt='vicsnailbar logo' className='logoheart'></img>
                <h5 className='vicslogo'>vicsnailbar</h5>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto centernav' navbar>
                    <NavItem>
                        <NavLink className='navLinks nav-link' to='/Home'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='navLinks nav-link' to='/services'>Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='navLinks nav-link' to='/staff'>Staff</NavLink>
                    </NavItem>
                </Nav>
                <NavLink type='submit' className='bookButton navLinks nav-link' to='/book'>Book</NavLink>
            </Collapse>
        </Navbar>
    );
};

export default Header;