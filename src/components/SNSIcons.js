import SvgGithub from '../icons/SvgGithub';
import SvgLinkedIn from '../icons/SvgLinkedIn';
import SvgCodepen from '../icons/SvgCodepen';
import SvgDribbble from '../icons/SvgDribbble';


const SNSIcons = () => (
    <div className="sns-icons">
        <a href="https://github.com/jihye-uxui" target="_blank" rel="noreferrer">               
            <SvgGithub />
        </a>
        <a href="https://www.linkedin.com/in/jihye-choe-uxui/" target="_blank" rel="noreferrer">
            <SvgLinkedIn />
        </a>
        <a href="https://codepen.io/JihyeChoe" target="_blank" rel="noreferrer">                
            <SvgCodepen />
        </a>
        <a href="https://dribbble.com/Jihye-design/about" target="_blank" rel="noreferrer">
            <SvgDribbble />
        </a>
    </div>
);

export default SNSIcons;