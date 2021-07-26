import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { appTitle } from '../globals/globals';

const PageNotFound = () => {

    useEffect(() => {
        document.title = `${appTitle} - Page Not Found`;
    }, []);

    return (
        <main>
            <section className="page-not-found-section">
                <h1>Page Not Found</h1>
		        <p>Go Back to <Link to="/">Home</Link></p>
	        </section>
        </main>
    );
};

export default PageNotFound;