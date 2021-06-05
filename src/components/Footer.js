import React from 'react';
import Button from './Button';
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to recieve our best vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
                </p>
                <div className='input-area'>
                    <form className='input-area'>
                        <input type='email' name='email' placeholder='Your email' className='footer-input' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items'>
                        <h2>About Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Inverters</Link>
                        <Link to='/'>Terms </Link>
                    </div>
                    <div className='footer-links-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Inverters</Link>
                        <Link to='/'>Terms </Link>
                    </div>
                </div>
                <div className='footer-links-wrapper'>
                    <div className='footer-links-items-r'>
                        <h2>Social media</h2>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Career</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>LinkedIn </Link>
                    </div>
                    <div className='footer-links-items-r'>
                        <h2>Videos</h2>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Experiences</Link>
                        <Link to='/'>Path to go</Link>
                        <Link to='/'>Inverters</Link>
                        <Link to='/'>Tripi</Link>
                    </div>
                </div>
            </div>
            <section classNmae='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/travelwebsite' className='social-logo'>
                            <i class="fas fa-umbrella-beach"></i> TRIPERS
                        </Link>
                    </div>    
                    <small className='website-rights'>TRIPERS © 2021</small>
                    <div className='social-icons'>
                        <Link className='social-icon-links facebook' to='/' target='blank' aria-label='Facebook'>
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link className='social-icon-links instagram' to='/' target='blank' aria-label='Instagaram'>
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link className='social-icon-links twitter' to='/' target='blank' aria-label='Twitter'>
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link className='social-icon-links youtube' to='/' target='blank' aria-label='Youtube'>
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link className='social-icon-links LinkedIn' to='/' target='blank' aria-label='Linkedin'>
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
