import React from 'react'
import Card from './Card'
import './Home.css'

const productos = [
    {
        "id": 0,
        "nombre": "Macbook Air 13 Chip M1 256gb",
        "imagen": "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
        "precio": "$ 1499.00"
    },
    {
        "id": 1,
        "nombre": "Amazon Echo Dot (4a Gen.)",
        "imagen": "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
        "precio": "$ 14.99"
    },
    {
        "id": 2,
        "nombre": "Cámara IP Inalámbrica 360°",
        "imagen": "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
        "precio": "$ 39.00"
    },
    {
        "id": 3,
        "nombre": "Cerradura Digital Inteligente Fortezza Zigbee",
        "imagen": "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
        "precio": "$ 99.00"
    }
]

const Home = () => {


    return (
        <div className='root'>
            <h1>Productos</h1>
            <div>
                {productos.map((item) => (
                    <Card producto={item} key={item.id} />
                ))}

            </div>

        </div>
    )
}

export default Home