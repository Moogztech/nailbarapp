import { Navbar, Nav, NavItem, NavLink, Button, NavbarBrand } from 'reactstrap';
import heart from '../app/assets/img/heart.svg';
import './navbar-style.css';

const NavigationBar = () => {

    return (
        <Navbar className='navbarColor container-fluid sticky-nav py-3'>
            <Nav className='container'>
                <NavbarBrand className='d-flex' href='/'>
                    <img src={heart} alt='vicsnailbar logo' style={{ marginRight: '12px' }}></img>
                    <h5 style={{ margin: '0', color: 'black' }}>vicsnailbar</h5>
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