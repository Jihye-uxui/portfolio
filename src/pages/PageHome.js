import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import Works from '../components/Works';
import LogoCircle from '../images/jihyechoe-logo-circle.png';

const PageHome = () => {

    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    return (
        <div>
            <section className="home-hero">
                <img className="home-hero-logo" src={LogoCircle} alt="Jihye Choe Circle Brand Logo"/>
            </section>
            <section className="home-intro">
                <div><h3>Some of<br/>My Selected<br/><span class="circle-sketch-highlight">Works</span></h3></div>
            </section>

            <Works/>
        </div>
    );
    
};

export default PageHome;