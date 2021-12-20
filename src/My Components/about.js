// Note: About compoent...!

import React from 'react';
import { Outlet } from 'react-router';

const About = () => {
    return (
        <React.Fragment>
            <h1> Welcome to About component! </h1>

            <Outlet />
        </React.Fragment>
    );
}

export default About;