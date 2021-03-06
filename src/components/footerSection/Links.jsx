import React from 'react'
import uuid from 'react-uuid'
import './Links.css';

const Links = (props) => {
    return (
        props.data.hasOwnProperty('title') ? <div className="linkContainer">
            <p>{props.data.title}</p>
            <ul>
            {           
                props.data.links.map(link => <li key={uuid()} ><a href={link} >{link}</a></li>)
            }
            </ul>
        </div> :
        <div className="linkContainer deliveryPlacelinkContainer">
            <ul>
                {
                    props.data.map(link => <li key={uuid()} ><a href={link} >{link}</a></li>)
                }
            </ul>
        </div>
    )
}

export default Links
