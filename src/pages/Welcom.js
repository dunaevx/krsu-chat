import React from 'react'
import '../css and scss/login.css'
import { Link } from 'react-router-dom'
import Background from '../Background'

function Welcom() {
  return (
    <div>
    <Background/>
    <div className='containerW'>
      <div className='border-screen1'>
        <div>
          <p style={{fontSize:'14px', margin:'0', marginLeft: '10px',}}>Welcome to</p>
          <h1>KRSU CHAT</h1>
        </div>
        <div className='central-btn'>
        <Link to="/login" style={{color:'#ffffffd1', textDecoration:'none'}}>
          <button style={{width:'200px'}} className="button login__submit w-btn-log">
            <span className="button__text ">Войти</span>
          </button>
        </Link>
          
        </div>
        <div className='central-btn'>
        <Link to="/signup" style={{color:'#ffffffd1', textDecoration:'none'}}>
          <button className="button login__submit w-btn-log">
            <span className="button__text">Зарегистрироватся</span>
          </button>
        </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Welcom