// Note: Count component...!

import React from 'react';

const Count = ({ text, countAge }) => {
    console.log(`Rendering ${text}`);
    return (
        <React.Fragment>
            <h3> {text} - {countAge} </h3>
        </React.Fragment>
    );
}

export default React.memo(Count);