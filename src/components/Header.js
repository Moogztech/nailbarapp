import { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, NavLink, Button, NavbarBrand } from 'reactstrap';
import { FaBars } from "react-icons/fa";
import heart from '../app/assets/img/heart.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar className='navbarColor'>
            <NavbarBrand className='d-flex align-items-center' href='/'>
                <a style={{ display: 'flex', alignItems: 'center' }}>
                <img src={heart} alt='vicsnailbar logo' style={{ marginLeft: '150px', marginRight: '10px'}}></img>
                <h5 style={{ margin: '0', color: 'black'}}>vicsnailbar</h5>
                </a>
            </NavbarBrand>
            <Button type='submit' className='ms-auto' style={{ marginRight: '20px', paddingRight: '40px', paddingLeft: '40px', borderRadius: '15px', color: 'black', backgroundColor: 'pink', border: 'none'}}>Book</Button>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} style={{ marginRight: '150px', color: 'black' }}><FaBars /></NavbarToggler>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink style={{ textAlign: 'center', color: 'black'}} className='nav-link' to='/'>
                            <i className='fa fa-make fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ textAlign: 'center', color: 'black'}} className='nav-link' to='/'>
                            <i className='fa fa-make fa-lg' /> Booking
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ textAlign: 'center', color: 'black'}} className='nav-link' to='/'>
                            <i className='fa fa-make fa-lg' /> Services
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        
    );
};

export default Header