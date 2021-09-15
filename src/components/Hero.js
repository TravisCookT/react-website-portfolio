import React from 'react'
import '../App.css'
import { Button } from './Button'
import './Hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            {
            // todo: fix this image tag
            }
            <img/> 

            <h1>Still Working on this website</h1>
            <p>Sorry</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                    BUTTON 1
                </Button>
                <Button className='btns' buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                    BUTTON 2 <i className='far
                    fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default Hero
