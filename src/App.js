import React from 'react'
import About from './components/About'
import Agents from './components/Agents'
import Header from './components/Header'
import HowItWorks from './components/HowItWorks'
import Proparty from './components/Proparty'
import './styles/app.scss'

const App = () => {
    return (
        <div>
            <Header />
            <HowItWorks />
            <About />
            <Agents />
            <Proparty />
        </div>
    )
}

export default App
