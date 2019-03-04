import React, { Component } from "react";
import axios from "axios";
import firebase from "./firebase.js";
import "./App.css";
import Header from "./HeaderComponents/Header.js";
import BandCard from "./BandCardComponent/BandCard.js";
import Footer from "./FooterComponents/Footer.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingScreen: false,
      artistQuery: "",
      results: [],
      userChoice: "",
      bandInfo: [],
      isHidden: false,
      like: 0,
      dislike: 0,
      keys: []
    };
  };

  checkUserResponse = (e) => {
    this.setState({
      userChoice: e.target.value
    }, () => {
      const albumChoice = this.state.results.filter(item => {
        return item.name === this.state.userChoice
      });

      const playlistItem = {
        bandUrl: albumChoice[0].image[3]["#text"],
        bandName: albumChoice[0].name,
        artistName: albumChoice[0].artist,
        albumUrl:albumChoice[0].url,
        like: 0,
        dislike: 0,
      };

      const dbRef = firebase.database().ref();
      dbRef.push(playlistItem);
    });
  };

  // FOR LIKE FUNCTION - NOT WORKING 100%
  addLike = (key) => {
        
    const likeCounter = this.state.like + 1;
   
    this.setState({
      like: likeCounter
    });

    const dbRef = firebase.database().ref(`${key}/`);
    dbRef.update({
      like: this.state.like
    });
  };

  // FOR DISLIKE FUNCTION - ALSO NOT WORKING !100%
  addDislike = (key) => {
    
    const dislikeCounter = this.state.dislike + 1;

    this.setState({
      dislike: dislikeCounter
    });
    
    const dbRef = firebase.database().ref(`${key}/`);
    dbRef.update({
      dislike: this.state.dislike
    });
  };
        
    // REMOVE FUNCTION - WORKING
  removeAlbum = (key) => {
    const dbRef = firebase.database().ref(`${key}`);
    dbRef.remove();
  };

  componentDidMount() {
    // GET DATA FROM FIREBASE
    const dbRef = firebase.database().ref();
    dbRef.on("value", response => {
    
      // THROW IN NEW ARRAY AND MAP OVER
      const newArray = [];
      const data = response.val();

      for (let key in data) {
        newArray.push({
          albumImgUrl: data[key].bandUrl,
          albumBandName: data[key].bandName,
          artistName: data[key].artistName,
          albumUrl: data[key].albumUrl,
          albumLikes: data[key].like,
          albumDislikes: data[key].dislike,
          albumKey: key,
          
        });

        
        this.setState({
          bandInfo: newArray
        });
      };
    });
  };

    // TO TOGGLE THE SELECT BUTTON 
  toggleHidden = (e) => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };
  
  // TO RETURN AND GET THE INFO NEEDED FROM THE ARRAY STORED UNDER RESULT
  useChoiceData = () => {
    this.state.clickedData.map(album => {
      return album.bandUrl, album.bandName
    });
  };

  // CHANGE HANDLER FOR FORM INPUT
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // SUBMIT HANDLER FOR FORM - FIRES AXIOS
  submitHandler = (e) => {
    e.preventDefault();
    const userQuery = this.state.artistQuery
    this.search(userQuery);

    this.setState({
      text: "",
      isHidden: !this.state.isHidden
    });
  };

  // AXIOS CALL
  search = (query) => {
    axios({
      method: "GET",
      url: "http://ws.audioscrobbler.com/2.0/",
      dataResponse: "json",
      params: ({
        method: "album.search",
        album: query,
        format: "json",
        api_key: "d2765512b20f78bf45d71651adbe2075"
      })
    }).then((response) => {

      const userResponse = response.data.results.albummatches.album
      // FILTERS SO THAT ALWAYS IMAGES ARE INCLUDED 
      const userResponseWithImage = userResponse.filter(withImages => {
        return withImages.image[0]["#text"].length > 0
      });
       
      this.setState({
        results: userResponseWithImage,
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
          initialResponse={this.state.results}
          toggleHidden={this.state.isHidden}
          checkUserResponse={this.checkUserResponse}
          />
        <main>
          <BandCard
            bandInfo={this.state.bandInfo}
            removeAlbum={this.removeAlbum}
            addLike={this.addLike}
            likes={this.state.likes}
            addDislike={this.addDislike}
            dislikes={this.state.dislikes}

            />
        </main>
        <Footer /> 
      </div>
    );
  };
};

export default App;
