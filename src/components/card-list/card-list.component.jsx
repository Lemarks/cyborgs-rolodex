import React from 'react';
import "./card-list.styles.css"
import { Card } from '../card/card.component';

export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.cyborgs.map(cyborg => (
                <Card key={cyborg.id} cyborg={cyborg} />
            ))}
        </div>
    );
}