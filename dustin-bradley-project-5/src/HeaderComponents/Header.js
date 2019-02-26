import React, { Component } from 'react';
import Nav from "./../SearchComponents/Nav.js"

class Header extends Component {
    render() {
        return (
            <header>
                <div className = "headerLeft">
                    <h1>Concert<span className ='lowerCase'>Hub</span></h1>
                </div>
                <Nav />
             
            </header>
        )
    }
}

export default Header;

