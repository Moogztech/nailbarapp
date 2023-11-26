import { Container, Col } from 'reactstrap';
import './footer-style.css';
import heart from '../app/assets/img/heart.svg';

const Footer = () => {
    return (
        <footer className='footDesign container-fluid'>
            <Container className='footLogo'>
                <Col className='brand'>
                    <img src={heart} alt='vicsnailbar logo' style={{ marginRight: '12px' }} />
                    <h4>vicsnailbar</h4>
                </Col>
                <Col>
                    <ul className='list-unstyled footLinks'>
                        <li>
                            <a className='links' href="/">Home</a>
                        </li>
                        <li>
                            <a className='links' href="/">Services</a>
                        </li>
                        <li>
                            <a className='links' href="/">Staff</a>
                        </li>
                    </ul>
                </Col>
                <Col>
                    <a href='https://www.instagram.com/vicsnailbar/'>
                        <i className='fa fa-instagram fa-lg faIcons' />
                    </a>
                    <a href='https://www.twitter.com/vicsnailbar/'>
                        <i className='fa fa-twitter fa-lg faIcons' />
                    </a>
                    <a href='https://www.pinterest.com/vicsnailbar/'>
                        <i className='fa fa-pinterest fa-lg faIcons' />
                    </a>
                </Col>
            </Container>
        </footer>
    );
};

export default Footer;