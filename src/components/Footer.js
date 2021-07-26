import { getYear } from '../utilities/utilities';
import ScrollToTop from './ScrollToTop';
import SNSIcons from './SNSIcons';
import AnimatedArrow from './AnimatedArrow';

const Footer = () => (
    <footer>
        <div className="wrapper">

            <div className="footer-heading">
                <div className="footer-text">
                    <h4>Let's Create<br/>Something Together</h4>
                    <p>or Say a Simple Hello!</p>
                </div>
                <AnimatedArrow/>
            </div>
            <SNSIcons/>

            <p className="copyright">&copy; {getYear()} Designed & Developed by Jihye Choe.</p>
            <ScrollToTop/>
        </div>
    </footer>
);

export default Footer;