import React from 'react';

const Card = ({ id, name, cost, attack, defense, move, characteristics, img, cardClick, clicked }) => {

    if(clicked){
        return(
            <div className='dib mv5 br3 pa3 ma3 grow bw2 shadow-5 w-20-l w-90' id={id} style={{background:"#d4d2bc",height:"20em",overflowY:"scroll", whiteSpace:'normal'}} onClick={cardClick}>
            <img className='tc' alt={name} src={process.env.PUBLIC_URL + img} />
            <div>
                <h3 className='tc'>{name}</h3>
                <p className='tl f6'><b>Characteristics: </b>{characteristics}</p>
            </div>
        </div>
        );
    }
    else{
        return (
            <div className='dib mv5 br3 pa3 ma3 grow bw2 shadow-5 w-20-l w-90' id={id} style={{background:"#d4d2bc",height:"20em",overflowY:"hidden"}} onClick={cardClick}>
                <img  className='tc' alt={name} src={process.env.PUBLIC_URL + img} />
                <div>
                    <h3 className='tc'>{name}</h3>
                    <div className='tl f5 pa0 ma0'>
                        <p><b>Cost: </b>{cost}</p>
                        <p><b>Attack: </b>{attack}</p>
                        <p><b>Defense: </b>{defense}</p>
                        <p><b>Move: </b>{move}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;