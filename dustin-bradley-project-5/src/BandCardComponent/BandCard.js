import React, { Component } from 'react';

// MAP OVER DATA AND APPEND AS PER BELOW;

class BandCard extends Component {
    render() {
        return (
                <div className='bandCardContainer'>
                    <div className='imagePlaceholder'>
                        
                    </div>
                    <h2>Band Name Goes Here</h2>
                    <p>Date</p>
                    <p>Dollar Value Maybe</p>
                    <p>Tix inventory?</p>
                <p>Venue</p>
                <a href="#">More Info</a>
                </div>
        )
    }
}

export default BandCard;