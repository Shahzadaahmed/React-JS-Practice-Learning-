// NoteL Counter component...!

import React, { useMemo, useState } from 'react'

const Counter = () => {

    // Note: Handeling states here...!
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    // Note: Function to increament count one...!
    const increamentOne = () => {
        setCountOne(countOne + 1);
    }

    // Note: Function to increament count two...!
    const increamentTwo = () => {
        setCountTwo(countTwo + 1);
    }

    // Note: Function to check the number is even or odd...!
    const checkEvenNum = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return countOne % 2 === 0;
    }, [countOne]);

    return (
        <React.Fragment>
            <div>
                <button onClick={increamentOne}> Count one - {countOne} </button>
                <span> {(checkEvenNum) ? ('Even') : ('Odd')} </span>
                <br />
                <br />
                <button onClick={increamentTwo}> Count two - {countTwo} </button>
            </div>
        </React.Fragment>
    )
}

export default Counter;