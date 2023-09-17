import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Gallery from './Gallery/Gallery'
import Contact from './Contact/Contact'
import './styles.css'
import Reviews from './Reviews/Reviews'

function Home() {
    return (
        <section className='Home'>
            <Hero />
            <div className='home-wrapper'>
                <About />
                <Services />
                <Gallery />
                <Reviews />
                <Contact />
            </div>

        </section>
    )
}

export default Home