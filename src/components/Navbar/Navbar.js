import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState('');



    const changeNavbar = () => {
        if (window.scrollY > 20) {
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeNavbar);

    return (
        <div>

<nav className={navbar ? 'navsection active' : 'navsection'}>
    <div className="container">
            <div className="max-width">
                <div className="logo">
                    <a href="/">Logo</a>
                </div>

                <ul className={toggle ? 'menu toggle' : 'menu'}>
                    <li>
                        <a href="/" className={active === 'home' ? 'nav-active' : ''} onClick={() => setActive('home')}>Home</a>
                    </li>
                    <li>
                        <a href="#about" className={active === 'about' ? 'nav-active' : ''} onClick={() => setActive('about')}>About</a>
                    </li>
                    <li>
                        <a href="#services" className={active === 'services' ? 'nav-active' : ''} onClick={() => setActive('services')}>Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" className={active === 'portfolio' ? 'nav-active' : ''} onClick={() => setActive('portfolio')}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" className={active === 'contact' ? 'nav-active' : ''} onClick={() => setActive('contact')}>Contact</a>
                    </li>
                    <li>
                        <Link to="/manageImage" className={active === 'manageImage' ? 'nav-active' : ''} onClick={() => setActive('uploadImage')}>Manage Image</Link>
                    </li>
                    <li>
                        <Link to="/textOnTshirt" className={active === 'textOnTshirt' ? 'nav-active' : ''} onClick={() => setActive('writeText')}>Text On Tshirt</Link>
                    </li>
                </ul>

                <div className="menu-btn">
                    {toggle ? <span onClick={() => setToggle(!toggle)}>X</span> : <span onClick={() => setToggle(!toggle)}></span>}
                </div>
            </div>
            </div>
        </nav>              
        </div>
    );
};

export default Navbar;