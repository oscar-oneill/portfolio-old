import React from 'react'
import About from './About'
import Intro from './Intro'
import Portfolio from './Portfolio'
import Navigation from './Navigation'

export default function Main () {
    return(
        <>
            <Navigation/>
            <Intro/>
            <About/>
            <Portfolio/>
        </>
    )
}