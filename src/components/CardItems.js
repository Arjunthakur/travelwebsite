import React from 'react'
// import {Link} from 'react-router-dom'
import './CardItems.css'

function CardItems(props) {
    return(
        // <Link to={props.path}>
            <div className='card-container'>
                <div className='image-container'>
                    <img src={props.src} alt='' />
                </div>
                <div className='card-text'>
                    <p className='card-content'>{props.text}</p>
                </div>
            </div>
        // </Link>
    )
}

export default CardItems;