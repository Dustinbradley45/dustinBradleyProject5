import React, { Component } from 'react';
import './App.css';
import Header from './HeaderComponents/Header.js';
import BandCard from './BandCardComponent/BandCard.js';
import Footer from './FooterComponents/Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <BandCard />
          <BandCard />
          <BandCard />
        </main>
        <Footer/ > 
      </div>
    );
  }
}

export default App;
