import React from 'react';
import Card from './Card';

const CardList = ({ units, cardClick }) => {   
    // if(true){
    //     throw new Error('CardList Failed!');
    // }   
return (
    <div>
        {
            units.map((user, i) => {
                return (
                    < Card 
                        key={i} 
                        id={units[i].id} 
                        name={units[i].name} 
                        cost={units[i].cost}
                        attack={units[i].attack} 
                        defense={units[i].defense}
                        move={units[i].move}
                        characteristics={units[i].characteristics}
                        img={units[i].img}
                        cardClick={cardClick}
                        clicked={units[i].clicked}
                        />
                    );
            })
        }
  </div>
);
}

export default CardList;