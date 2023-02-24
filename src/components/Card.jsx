import React from 'react'
import './Card.css'

const Card = ({producto}) => {
    const {nombre, imagen, precio} = producto

    return (
        <div className='card'>
            <h2>{nombre}</h2>
            <img src={imagen} className='card-img' />
            <h3>{precio}</h3>
        </div>
    )
}

export default Card