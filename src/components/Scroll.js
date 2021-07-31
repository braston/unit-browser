
import React from 'react';

const Scroll = (props) => {
    return (
           <div style={{whiteSpace: 'nowrap', overflowY: 'hidden', overflowX: 'scroll', border: '5px solid black', height: '30em', width:'auto'}}>
               {props.children}
           </div>
    );
};

export default Scroll;