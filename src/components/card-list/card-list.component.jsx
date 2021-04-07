import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

//Props is monster json 
//We have something like Props children and it's body of element we had before
export const CardList = (props) => ( //If u use => you don't need return. obvious asf
    <div className="card-list"> 
            { props.monsters.map(monster => (
               <Card key={monster.id} monster={monster} /> //We get monster from monster list from props
            ))} 
    </div>
);