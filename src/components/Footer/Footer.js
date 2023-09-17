import React from 'react'
import { FaFacebookF, FaYelp, FaInstagram } from 'react-icons/fa';
import './styles.css'

function Footer() {

    const media_feed = [
        { name: "Facebook", icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=100063512383527&sk=reviews" },
        { name: "Yelp", icon: <FaYelp />, url: "" },
        { name: "Instagram", icon: <FaInstagram /> }
    ]

    return (
        <section className='Footer'>
            <div className='hours'>
                <h1>OPEN HOURS</h1>
                <span>Monday-Friday: 9am-5pm</span>
                <span>Saturday: 11am - 3pm</span>
                <span>Sundays: Closed</span>
            </div>
            <div className='contact'>
                <h1>CONTACT</h1>
                <span>Phone Number: (999) 999-9999</span>
                <span>email: info@example.com</span>
            </div>
            <div className='follow'>
                <h1>FOLLOW</h1>
                <ul>
                    {media_feed.map((info, index) => (
                        <li key={index}>{info.icon}</li>
                    ))}
                </ul>
            </div>
            <div className='service-area'>
                <h1>SERVICE AREA</h1>
                <p>We proudly serve clients throughout Southern California.</p>
            </div>
        </section>
    )
}

export default Footer