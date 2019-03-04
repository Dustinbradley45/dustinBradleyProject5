import React, { Component } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

AOS.init({

    disable: false, 
    startEvent: "DOMContentLoaded", 
    initClassName: "aos-init", 
    animatedClassName: "aos-animate", 
    useClassNames: true,
    disableMutationObserver: false,
    debounceDelay: 50, 
    throttleDelay: 99, 
    offset: 120,
    delay: 0,
    duration: 400, 
    easing: "ease", 
    once: false,  
    mirror: true,
    anchorPlacement: "top-right",

});

class BandCard extends Component {

    render() {

        return (
            <ul>
                {
                this.props.bandInfo.map((albumInfo, i) => {
                
                    const altText1 = albumInfo.artistName;
                    const altText2 = albumInfo.albumBandName;
                    const mainAltText = `${altText2} by ${altText1}`;
                    return (
                        <li className="bandCardContainer"
                            key={i}
                            tabIndex="0"
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="false"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-center"
                            data-aos-anchor=".bandCardContainer">
                            <img src={albumInfo.albumImgUrl} alt={mainAltText}></img>
                            <div className="overlay">
                                <h4>Artist: {albumInfo.artistName}</h4>
                                <h5>Album: {albumInfo.albumBandName}</h5>
                                <a href={albumInfo.albumUrl}
                                    target="_blank"
                                    className="linkToPlay">
                                    <i class="fas fa-play"></i>
                                </a>

                                <div className="buttonContainer"
                                    key={i}
                                    tabIndex="0"
                                    role="button"
                                    aria-pressed="false">
                                        <div className="removeCustomButton">
                                            <div className="buttonBackground">
                                                <button className="removeButton"
                                                type="button" aria-label="Remove this Album"
                                                onClick={() => this.props.removeAlbum(albumInfo.albumKey)}
                                                >
                                                    <i class="fas fa-trash-alt" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="likesContainer">
                                        <button
                                            className="likeTheAlbum" aria-label="like this album"
                                            onClick={() => this.props.addLike(albumInfo.albumKey)}>
                                            <i class="fas fa-heart" aria-hidden="true">
                                                <p>{albumInfo.albumLikes}</p>
                                            </i>
                                        </button>
                                    
                                        <button className="dislikeTheAlbum" aria-label="dislike this album"
                                        onClick={() => this.props.addDislike(albumInfo.albumKey)}>
                                            <i class="far fa-thumbs-down" aria-hidden="true">
                                                <p>{albumInfo.albumDislikes}</p>
                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                    }
            </ul>    
        )
    };                
};


    



export default BandCard;