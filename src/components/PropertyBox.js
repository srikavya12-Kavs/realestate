import React from 'react'

const PropertyBox = ({ image, title, price }) => {
    return (
        <div className="propartybox">
            <img src={image} alt={title} />
            <p>{title}</p>
            <a href="/" className="price">{price}</a>
            <a href="/" className="buy-btn">Add to List</a>
        </div>
    )
}

export default PropertyBox
