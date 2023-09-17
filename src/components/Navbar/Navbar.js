import React from 'react'
import logo from '../../assets/logo.png'
import { AiOutlineMenu } from 'react-icons/ai';
import './styles.css'

function Navbar() {
    return (
        <div className='Navbar'>
            <a className='logo' href="#">Icebraker Bartending</a>
            <img src={logo} width="75px" />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Contact</li>
            </ul>
            <button className='toggle-menu'><AiOutlineMenu /></button>
        </div>
    )
}

export default Navbar