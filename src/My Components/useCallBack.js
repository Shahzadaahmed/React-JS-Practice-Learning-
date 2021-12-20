// Note: LearningUseCallBack component...!

import React, { useState, useCallback } from 'react';
// Note: Importing reuseable components...!
import Title from "./Nested components/title";
import Count from "./Nested components/count";
import Button from "./Nested components/button";

const LearningUseCallBack = () => {

    // Note: Handeling states here...!
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    // Note Function to increament age...!
    const increamentAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    // Note Function to increament salary...!
    const increamentSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);

    return (
        <React.Fragment>
            <Title />
            <Count text="Age" countAge={age} />
            <Button handleClick={increamentAge}> Increament Age </Button>
            <Count text="Salary" countAge={salary} />
            <Button handleClick={increamentSalary}> Increament Salary </Button>
        </React.Fragment>
    );
}

export default LearningUseCallBack;