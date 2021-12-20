// Note: Button component...!

import React from 'react';

const Button = ({ handleClick, children }) => {
    console.log(`Rendering button - ${children}`);
    return (
        <React.Fragment>
            <button onClick={handleClick}>
                {children}
            </button>
        </React.Fragment>
    );
}

export default React.memo(Button);