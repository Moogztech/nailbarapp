import { Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './header-style.css'
import heart from '../app/assets/img/heart.svg';


const Header = () => {

    return (
        <Navbar className='navbarColor container-fluid sticky-nav py-3'>
            <Nav className='container'>
                <NavbarBrand className='d-flex' href='/'>
                    <img src={heart} alt='vicsnailbar logo' className='logoheart'></img>
                    <h5 className='vicslogo'>vicsnailbar</h5>
                </NavbarBrand>
                <Nav className='mx-auto'>
                    <NavItem>
                        <NavLink className='navLinks nav-link nav-link-ltr' to='/'>Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='navLinks nav-link nav-link-ltr' to='/services'>Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='navLinks nav-link nav-link-ltr' to='/staff'>Staff</NavLink>
                    </NavItem>
                </Nav>
                <NavLink type='submit' className='bookButton navLinks nav-link' to='/book'>Book</NavLink>
            </Nav>
        </Navbar>
    );
};

export default Header;