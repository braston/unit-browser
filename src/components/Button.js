import React from 'react';

const Button = ({ name, buttonClick, isSelected }) => {
    if(isSelected.toLowerCase() === name.toLowerCase())
    {
        return(
            <button className='tc pa1 ma1 f4 br3 grow shadow-5 w-10-l w-20 bg-light-yellow' onClick={buttonClick} id={name}> {name} </button>
        );  
    } 
    else {
        return(
            <button className='tc pa1 ma1 f4 br3 grow shadow-5 w-10-l w-20' onClick={buttonClick} id={name}> {name} </button>
        );
    }
}

export default Button;
