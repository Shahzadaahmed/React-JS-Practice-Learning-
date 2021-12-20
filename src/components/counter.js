// Note: Counter component...!

import React, { useState } from 'react';
import useCustomHook from "./customHook";

const Counter = () => {

    // Note: Handeling states here...!
    const [count, setCount] = useState(0);

    // Note: Calling custom hook...!
    useCustomHook(count);

    // Note: Function to increament count...!
    const clickCount = () => {
        setCount(count + 1);
    }

    return (
        <React.Fragment>
            <h1> Counter App using Custom Hook! </h1>
            <h2> {count} </h2>
            <button onClick={clickCount}> Click Me <span role="img" aria-label="information"> 😄 </span>  </button>
        </React.Fragment>
    );
}

export default Counter;