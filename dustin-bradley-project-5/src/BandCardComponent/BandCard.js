import React, { Component } from 'react';

class BandCard extends Component {
    constructor() {
        super();
        this.state = {
            like: 0,
            dislike:0
        }
    }
    // onMouseOver = () => {
    //    elementID.css({})
    // }

    addLike = (e) => {
        return (
            () => {
                const likeCounter = this.state.like + 1;

                this.setState({
                    like: likeCounter
                });
            })
    }

    addDislike = (e) => {
        return (
            () => {
                const dislikeCounter = this.state.dislike + 1;

                this.setState({
                    dislike:dislikeCounter
                })
            }
        )
    }

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
                                                    type='button'
                                                    >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="likesContainer">
                                        <button className='likeTheAlbum' onClick={this.addLike()}>
                                            LIKE
                                        </button>
                                        <button className='dislikeTheAlbum' onClick={this.addDislike()}>
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


    



export default BandCard;