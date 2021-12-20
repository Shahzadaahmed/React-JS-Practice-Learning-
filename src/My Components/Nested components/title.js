// Note: Title component...!

import React from 'react';

const Title = () => {
    console.log("Rendering Title!");
    return (
        <React.Fragment>
            <h2> useCallBack Hook! </h2>
        </React.Fragment>
    );
}

export default React.memo(Title);