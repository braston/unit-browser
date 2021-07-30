import React from 'react';

const Card = ({ id, name, cost, attack, defense, move, characteristics, img, cardClick, clicked }) => {

    if(clicked){
        return(
            <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 w-20' id={id} style={{background:"#d4d2bc",height:"20em",overflowY:"scroll"}} onClick={cardClick}>
            <img alt={name} src={img} />
            <div>
                <h3 className='tc'>{name}</h3>
                <p className='f5'><b>Characteristics: </b>{characteristics}</p>
            </div>
        </div>
        );
    }
    else{
        return (
            <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 w-20' id={id} style={{background:"#d4d2bc",height:"20em",overflowY:"hidden"}} onClick={cardClick}>
                <img alt={name} src={img} />
                <div>
                    <h3 className='tc'>{name}</h3>
                    <p><b>Cost: </b>{cost}</p>
                    <p><b>Attack: </b>{attack}</p>
                    <p><b>Defense: </b>{defense}</p>
                    <p><b>Move: </b>{move}</p>
                </div>
            </div>
        );
    }
}

export default Card;