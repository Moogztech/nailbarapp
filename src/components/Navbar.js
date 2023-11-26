import { Navbar, Nav, NavItem, NavLink, Button, NavbarBrand } from 'reactstrap';
import './navbar-style.css'
import heart from '../app/assets/img/heart.svg';


const NavigationBar = () => {

    return (
        <Navbar className='navbarColor container-fluid sticky-nav py-3'>
            <Nav className='container'>
                <NavbarBrand className='d-flex' href='/'>
                    <img src={heart} alt='vicsnailbar logo' className='logoheart'></img>
                    <h5 className='vicslogo'>vicsnailbar</h5>
                </NavbarBrand>
                <Nav className='mx-auto'>
                    <NavItem>
                        <NavLink className='navLinks nav-link nav-link-ltr' href='/'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='navLinks nav-link nav-link-ltr' href='/'>Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='navLinks nav-link nav-link-ltr' href='/'>Staff</NavLink>
                    </NavItem>
                </Nav>
                <Button type='submit' className='bookButton'>Book</Button>
            </Nav>
        </Navbar>
    );
};

export default NavigationBar;