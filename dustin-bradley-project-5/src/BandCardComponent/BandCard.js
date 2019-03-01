import React, { Component } from 'react';


// MAP OVER DATA AND APPEND AS PER BELOW;
// <this className="state band"></this>
class BandCard extends Component {
   
   
    render() {
      
        
        return (
            <ul>
                {
                    this.props.bandInfo.map((albumInfo, i) => {
                        return (
                            <li className='bandCardContainer' key={i}>
                                <img src={albumInfo.albumImgUrl} alt=''></img>
                                <div className='overlay'>
                                    <h4>{albumInfo.albumBandName}</h4>
                                    {
                                        albumInfo.map((checkButton, i => {
                                            return (
                                                <div className="buttonContainer" key={i}>
                                                    <div className="removeCustomButton">
                                                        <div className="buttonBackground">
                                                            <button className="removeButton"
                                                                type='button'
                                                                onClick={() => this.props.removeAlbum(checkButton.i)}>
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        ))
                                    }
                                </div>
                            </li>
                        )
                    }
             
                    )
                    
                }
                )
            }
            </ul>
        )
    }
}
    



export default BandCard;