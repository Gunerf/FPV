import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <div className='header'>
        <img className='logo' alt='logo de drone du site internet SHVP ' src='logo-en-gros.png'></img>
        <span className='separation'></span>
        <h1 className='title'>shvp.</h1>
    </div>
  )
}

export default Header