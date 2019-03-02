import React, { Component } from 'react';

class BandCard extends Component {
   
    // onMouseOver = () => {
    //    elementID.css({})
    // }

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

                                    <div className="buttonContainer" key={i}>
                                        <div className="removeCustomButton">
                                            <div className="buttonBackground">
                                                <button className="removeButton"
                                                    type='button' onClick={() => this.props.removeAlbum(albumInfo.albumKey)}
                                                    >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="likesContainer">
                                        <button className='likeTheAlbum' onClick={()=> this.props.addLike(albumInfo.albumKey)}>
                                            LIKE
                                        </button>
                                        <button className='dislikeTheAlbum' onClick={() => this.props.addDislike(albumInfo.albumKey)}>
                                            DISLIKE
                                        </button>
                                    </div>

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

//STOP ANIMATION ON HOVER HMMMMM
//  PUSHING LIKE/DISLIKE TO FIREBASE AND PROCESSING INFO


    



export default BandCard;