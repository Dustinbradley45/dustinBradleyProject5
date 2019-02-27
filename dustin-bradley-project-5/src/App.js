import React, { Component } from 'react';
import axios from 'axios';
// import firebase from './firebase.js';
import './App.css';
import Header from './HeaderComponents/Header.js';
import BandCard from './BandCardComponent/BandCard.js';
import Footer from './FooterComponents/Footer.js';





class App extends Component {
  constructor() {
    super();
    this.state = {
      artistQuery: '',
      results: '',
      userChoice: ''
    }
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    const userQuery = this.state.artistQuery
    this.search(userQuery);
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
      //  const dbRef = firebase.database().ref();
       const userResponse = response.data.results.albummatches.album
       
         this.setState({
           results: userResponse,
         })
       
       })
       
       }
       
      //  this.setState({
      //    band: response
      //  }) 
      //  dbRef.push(this.state.band)
      
  
  
 

  render() {
    return (
      <div className="App">
        <Header
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
          initialResponse={this.state.results}
          />
        <main>
          <BandCard
            bandObject={this.state.band}/>
        </main>
        <Footer /> 
      </div>
    );
  }
}

export default App;
