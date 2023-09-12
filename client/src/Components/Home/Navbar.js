import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav>
                <div className="container1">
                    <h1 className='heading'>LegalEase</h1>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/steps">How it Works? </a></li>
                        <li><a href="/team">Our Team</a></li>
                        <li><a href="/getstarted">Get Started</a></li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
