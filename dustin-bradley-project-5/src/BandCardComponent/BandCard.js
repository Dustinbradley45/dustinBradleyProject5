import React, { Component } from 'react';

// MAP OVER DATA AND APPEND AS PER BELOW;
// this.state.band
class BandCard extends Component {
    render() {
       
        return (
            <div className='bandCardContainer'>
                <img src={this.props.imageUrl} alt=''></img>
                <h4>{this.props.name}</h4> 
            </div>
        )
    }
}





export default BandCard;