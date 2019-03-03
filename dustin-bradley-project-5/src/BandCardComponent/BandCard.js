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
                
                        const altText1 = albumInfo.artistName;
                        const altText2 = albumInfo.albumBandName;
                        const mainAltText = `${altText2} by ${altText1}`;
                        return ( 
                            <li className='bandCardContainer' key={i} tabIndex='0'>
                                <img src={albumInfo.albumImgUrl} alt={mainAltText}></img>
                                <div className='overlay'>
                                    <h4>Artist: {albumInfo.artistName}</h4>
                                    <h5>Album: {albumInfo.albumBandName}</h5>
                                    <a href={albumInfo.albumUrl} target='_blank'><i class="fas fa-play"></i></a>

                                    <div className="buttonContainer" key={i}>
                                        <div className="removeCustomButton">
                                            <div className="buttonBackground">
                                                <button className="removeButton"
                                                    type='button' onClick={() => this.props.removeAlbum(albumInfo.albumKey)}
                                                    >
                                                    <i class="fas fa-trash-alt"></i>
                                                    
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="likesContainer">
                                        <button className='likeTheAlbum' onClick={()=> this.props.addLike(albumInfo.albumKey)}>
                                            <i class="fas fa-heart"><p>{albumInfo.albumLikes}</p></i>
                                          
                                        </button>
                                        <button className='dislikeTheAlbum' onClick={() => this.props.addDislike(albumInfo.albumKey)}>  
                                            <i class="far fa-thumbs-down"><p>{albumInfo.albumDislikes}</p></i>
                                            
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