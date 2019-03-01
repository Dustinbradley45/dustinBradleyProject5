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
            <ul>
                 {
                    this.props.bandInfo.map((albumInfo, i) => {
                    
                            return (
                                <li className='bandCardContainer' key={i}>
                                        <img src={albumInfo.albumImgUrl} alt=''></img>
                                    <div className= 'overlay'>
                                        <h4>{albumInfo.albumBandName}</h4>
                                    </div>
                                </li>
                            )
                        }
             
                     )
                    
                }
            </ul>
        )
    }
}




export default BandCard;