import React, { useState, useEffect } from 'react'
import coverMobile from '../../../assets/bg-cover-mobile.jpg'
import coverDesktop from '../../../assets/bg-cover.jpg'
import './styles.css'

function Hero() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Update the windowWidth state when the window is resized
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Determine which image to display based on screen width
    const backgroundImage = windowWidth <= 600 ? coverMobile : coverDesktop;

    return (
        <div className='Hero'>
            <img src={backgroundImage} width="100%" alt="Hero Background" />
            <div className='title-name'>
                <h1>ICEBREAKER BARTENDING</h1>
                <h1>WE MIX. YOU MINGLE.</h1>
            </div>
        </div>
    )
}

export default Hero
