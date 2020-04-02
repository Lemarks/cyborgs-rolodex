import React from 'react';
import "./card.styles.css"

export const Card = (props) => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.cyborg.id}?set=set3&size=180x180`} alt="cyborg" />
            <h2>{props.cyborg.name}</h2>
            <p>{props.cyborg.email}</p>
        </div>
    )
} 