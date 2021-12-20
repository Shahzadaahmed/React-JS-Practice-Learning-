// Note: Navigation compoent...!

import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <React.Fragment>
            <ul>
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
                <Link to="/learning-useCallBack"> learning-useCallBack </Link>
                <Link to="/learning-useMemo"> learning-useMemo </Link>
            </ul>
        </React.Fragment>
    );
}

export default Navigation;