import React from 'react';
import './card.styles.css';

//URL PARAMETERS HERE
//Props named monster is get from Card-List
export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img> 
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
        
    </div>
);