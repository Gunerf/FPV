import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='contact'>
            <h2>Mon adresse mail</h2>
            <h1>contact@shvp.fr</h1>
        </div>
        <div className='reseau'>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin-in"></i>
        </div>
    </div>
  )
}

export default Footer