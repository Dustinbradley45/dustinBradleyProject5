import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebase.js';
import './App.css';
import Header from './HeaderComponents/Header.js';
import BandCard from './BandCardComponent/BandCard.js';
import Footer from './FooterComponents/Footer.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingScreen:false,
      artistQuery: '',
      results: [],
      userChoice: '',
      bandInfo: [],
      isHidden: false,
      like: 0,
      dislike: 0,
      keys: []
    }
  }

  checkUserResponse = (e) => {
    this.setState({
      userChoice: e.target.value
    }, () => {
      const albumChoice = this.state.results.filter(item => {
        return item.name === this.state.userChoice
      });

      const playlistItem = {
        bandUrl: albumChoice[0].image[3]['#text'],
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

  addLike = (key) => {
        
    const likeCounter = this.state.like + 1;
   
    this.setState({
      like: likeCounter
    });

    const dbRef = firebase.database().ref(`${key}/`);
    dbRef.update({
     like: this.state.like
    })          
  }

  addDislike = (key) => {
    
  const dislikeCounter = this.state.dislike + 1;

        this.setState({
          dislike: dislikeCounter
        }) 
    
    const dbRef = firebase.database().ref(`${key}/`);
    dbRef.update({
      dislike: this.state.dislike
    }) 
  }
        
    
  removeAlbum = (key) => {
    const dbRef = firebase.database().ref(`${key}`);
    dbRef.remove();
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', response => {
    
      const newArray = [];  
      const data = response.val();

      for (let key in data) {
        newArray.push({
          albumImgUrl : data[key].bandUrl,
          albumBandName: data[key].bandName,
          artistName: data[key].artistName,
          albumUrl: data[key].albumUrl,
          albumLikes: data[key].like,
          albumDislikes: data[key].dislike,
          albumKey: key,
          
        });

        
        this.setState({
         bandInfo: newArray
        })

        console.log(this.state.bandInfo)
      }
    })
  }

  toggleHidden = (e) => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  
  useChoiceData = () => {
    this.state.clickedData.map(album => {
      return album.bandUrl, album.bandName
    })
  }

    changeHandler = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    submitHandler = (e) => {
      e.preventDefault();
      const userQuery = this.state.artistQuery
      this.search(userQuery);

      this.setState({
        text: '',
        isHidden: !this.state.isHidden
      });
    }

    search = (query) => {
      axios({
        method: 'GET',
        url: 'http://ws.audioscrobbler.com/2.0/',
        dataResponse: 'json',
        params: ({
          method: 'album.search',
          album: query,
          format: 'json',
          api_key: 'd2765512b20f78bf45d71651adbe2075'
        })
      }).then((response) => {

       
        const userResponse = response.data.results.albummatches.album

        const userResponseWithImage = userResponse.filter(withImages => {
          return withImages.image[0]['#text'].length > 0 
        })
       
        this.setState({
          results: userResponseWithImage,
        })

        console.log(this.state.results);
      })
    }

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
  }
}

export default App;
