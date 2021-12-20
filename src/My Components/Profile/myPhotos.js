// Note: MyPhotos component...!

import React from 'react';
import { useParams } from 'react-router';

const MyPhotos = () => {
    const { index } = useParams();
    console.log(index);

    return (
        <React.Fragment>
            <h1> Welcome to my photo component! </h1>
            <h2> {`You clicked on ${index}`} </h2>
        </React.Fragment>
    );
}

export default MyPhotos;