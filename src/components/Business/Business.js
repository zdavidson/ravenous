import React from 'react';
import './Business.css';


const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipcode: '10101',
    rating: 4.5,
    reviewCount: 90
}

class Business extends React.Component {
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <img src={this.imageSrc} alt=''/>
                </div>
                <h2>{this.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                    <p>{this.address}</p>
                    <p>{this.city}</p>
                    <p>{this.state} {this.zipcode}</p>
                    </div>
                    <div className="Business-reviews">
                    <h3>ITALIAN</h3>
                    <h3 className="rating">{this.rating} stars</h3>
                    <p>{this.reviewCount} reviews</p>
                    </div>
                </div>
                </div>
        )
    }
}

export default Business;