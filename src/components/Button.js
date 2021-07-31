import React from 'react';

const Button = ({ name, buttonClick }) => {
    return(
        <button className='tc pa1 ma1 f4 br3 grow shadow-5 w-10-l w-20' onClick={buttonClick} id={name}> {name} </button>
    );
}

export default Button;
