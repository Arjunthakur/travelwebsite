import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './Navbar.css';
import Button from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);
    

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/travelwebsite' className='navbar-logo'>
                        <i class="fas fa-umbrella-beach"></i> TRIPERS
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-items'>
                            <Link to='/travelwebsite' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/product' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-items'>
                            <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                                SIGN UP
                            </Link>
                        </li>
                        
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>  
            </nav>  
        </div>
    )
}

export default Navbar
