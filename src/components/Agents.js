import React from 'react'
import AgentBox from './AgentBox'
import agent1 from '../assets/s1.png'
import agent2 from '../assets/s2.png'
import agent3 from '../assets/s3.png'

const Agents = () => {
    return (
        <div className="agent">
            <div className="agent-heading">
                <h1>Agents</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="agent-container">
                <AgentBox image={agent1} title="Ayan Roy" />
                <AgentBox image={agent2} title="Sayan Ghosh" />
                <AgentBox image={agent3} title="Sneha Saha" />
            </div>
        </div>
    )
}

export default Agents
