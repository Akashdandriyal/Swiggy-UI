import React from 'react'
import './Card.css';

const Card = (props) => {
    return (
        <div className="cardComponent">
            <div className="cardComponentPicture">
                <img src={props.picture} alt=""/>
            </div>
            <div className="cardComponentContent">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card
