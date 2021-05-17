import React from 'react'
import About from './components/About'
import Header from './components/Header'
import HowItWorks from './components/HowItWorks'
import './styles/app.scss'

const App = () => {
    return (
        <div>
            <Header />
            <HowItWorks />
            <About />
        </div>
    )
}

export default App
