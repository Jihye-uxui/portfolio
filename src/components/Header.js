import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import Nav from './Nav';
import Logo from '../images/jihyechoe-logo-s.svg';

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

    function isDesktop(e) {
        if(e.matches) {
           setNavOpen(false); 
        }
    }

    useEffect(() => { 
        // media query
        // When the width is over 600px, close the mobile nav bar
        let mq = window.matchMedia('(min-width: 680px)');
        mq.addListener(isDesktop)
        return () => mq.removeListener(isDesktop);
    }, [])

    function showHideNav() {
        setNavOpen(!navOpen);
    }

    return (
        <header className={navOpen ? 'show' : undefined}>
            <Link to="/"><img className="header-logo" src={Logo} alt="Jihye Choe Brand Logo"/></Link>
            <Nav handleShowHideNav={showHideNav}/>
        </header>
    );

};

export default Header;