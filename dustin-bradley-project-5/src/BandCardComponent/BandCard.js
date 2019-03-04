import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

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
                            <li className='bandCardContainer' key={i} tabIndex='0' data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="false"
                                data-aos-once="true"
                                data-aos-anchor-placement="top-center"
                                data-aos-anchor='.bandCardContainer'>
                                <img src={albumInfo.albumImgUrl} alt={mainAltText}></img>
                                <div className='overlay'>
                                    <h4>Artist: {albumInfo.artistName}</h4>
                                    <h5>Album: {albumInfo.albumBandName}</h5>
                                    <a href={albumInfo.albumUrl} target='_blank' className='linkToPlay'><i class="fas fa-play"></i></a>

                                    <div className="buttonContainer" key={i} tabIndex='0' role='button' aria-pressed='false'>
                                        <div className="removeCustomButton">
                                            <div className="buttonBackground">
                                                <button className="removeButton"
                                                    type='button' aria-label='Remove this Album' onClick={() => this.props.removeAlbum(albumInfo.albumKey)}
                                                    >
                                                    <i class="fas fa-trash-alt" aria-hidden='true'></i>
                                                    
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="likesContainer">
                                        <button className='likeTheAlbum' aria-label='like this album' onClick={()=> this.props.addLike(albumInfo.albumKey)}>
                                            <i class="fas fa-heart" aria-hidden='true'><p>{albumInfo.albumLikes}</p></i>
                                          
                                        </button>
                                        <button className='dislikeTheAlbum' aria-label='dislike this album' onClick={() => this.props.addDislike(albumInfo.albumKey)}>  
                                            <i class="far fa-thumbs-down" aria-hidden='true'><p>{albumInfo.albumDislikes}</p></i>
                                            
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