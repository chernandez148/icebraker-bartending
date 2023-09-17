import React from 'react'
import cover from '../../../assets/cover.jpg'
import './styles.css'

function Hero() {
    return (
        <div className='Hero'>
            <img src={cover} width="100%" />
            <div className='title-name'>
                <h1>ICEBRAKER BARTENDING</h1>
                <h1>WE MIX. YOU MINGLE.</h1>
            </div>
        </div>
    )
}

export default Hero