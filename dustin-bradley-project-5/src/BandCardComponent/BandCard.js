import React, { Component } from 'react';

// MAP OVER DATA AND APPEND AS PER BELOW;
// <this className="state band"></this>
class BandCard extends Component {
   
    render() {
        console.log(this.props)
        return (
            <div className='bandCardContainer'>
                <img src={this.props.bandUrl} alt=''></img>
                <h4>{this.props.bandName}</h4> 
            </div>
        )
    }
}





export default BandCard;