import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import Works from '../components/Works';

const PageWork = () => {

    useEffect(() => {
        document.title = `${appTitle} - Work`;
    }, []);

    return (
        <div>
            <Works/>
        </div>
    );
    
};

export default PageWork;