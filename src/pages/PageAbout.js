import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import CallAboutMe from '../components/CallAboutMe';

const PageAbout = () => {

    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <div>
            <CallAboutMe/>
        </div>
    );
    
};

export default PageAbout;