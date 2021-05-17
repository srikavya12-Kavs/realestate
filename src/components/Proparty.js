import React from 'react'
import PropertyBox from './PropertyBox';

import pImage1 from '../assets/p1.png'
import pImage2 from '../assets/p2.png'
import pImage3 from '../assets/p3.png'

const Proparty = () => {
    return (
        <div className="proparty">
            <div className="proparty-heading">
                <h3>Properties</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="proparty-container">
                <PropertyBox image={pImage1} name="House 1" price="$153,450"/>
                <PropertyBox image={pImage2} name="House 2" price="$203,600"/>
                <PropertyBox image={pImage3} name="House 3" price="$163,640"/>
            </div>
        </div>
    )
}

export default Proparty
