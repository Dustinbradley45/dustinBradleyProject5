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
      artistQuery: '',
      results: [],
      userChoice: '',
      bandInfo: [],
      isHidden: false,
      like: 0,
      dislike: 0
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
        likes: 0,
        dislikes: 0
      };

      const dbRef = firebase.database().ref();
      dbRef.push(playlistItem);
    });
  };

      addLike = (e) => {
        return (
          () => {
            const likeCounter = this.state.like + 1;
            this.setState({
              like: likeCounter
            });

            for (let album in this.state.bandInfo) {
              const dbRef = firebase.database().ref('album/' + album.likes).set({
                likes: this.state.likes + 1
              });
              
              dbRef.push(this.state.like);
              
            }
            console.log(this.state.like);

          })
      }

      addDislike = (e) => {
        return (
          () => {
            const dislikeCounter = this.state.dislike + 1;

            this.setState({
              dislike: dislikeCounter
            }) 
          }
        )
      }
   

    removeAlbum = (e) => {
      const dbRef = firebase.database().ref( );
      dbRef.remove();
    }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', response => {
    
      const newArray = [];
      const data = response.val();

      for (let album in data) {
        newArray.push({
          albumImgUrl : data[album].bandUrl,
          albumBandName: data[album].bandName,
          albumKey: album,
          
        })
     
        this.setState({
         bandInfo: newArray
        })
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
      console.log(userQuery);
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
            addLike={this.addLike}
            removeAlbum={this.removeAlbum}
            addDislike={this.addDislike}
            likes={this.state.likes}
            dislikes={this.state.dislikes}
            stopAnimation={this.stopAnimation}
            />
        </main>
        <Footer /> 
      </div>
    );
  }
}

export default App;
