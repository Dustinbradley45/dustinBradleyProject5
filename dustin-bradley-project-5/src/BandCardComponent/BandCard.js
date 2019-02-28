import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';

// MAP OVER DATA AND APPEND AS PER BELOW;
// <this className="state band"></this>
class BandCard extends Component {
    constructor() {
        super();
        
        ScrollReveal().reveal('.bandCardContainer')
    }
   
    render() {
        
        return (
            <React.Fragment>
                 {
                    this.props.bandInfo.map((albumInfo, i) => {
                    
                            return (
                                <div class='bandCardContainer' key={i}>
                                    <img src={albumInfo.albumImgUrl} alt=''></img>
                                    <h4>{albumInfo.albumBandName}</h4>
                                </div>
                            )
                        }
             
                     )
                    
                }
            </React.Fragment>
        )
    }
}




export default BandCard;