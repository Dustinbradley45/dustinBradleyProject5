import React, { Component } from "react";

class Header extends Component {

    render() {
    
        return (
            <header tabIndex="0" className="wrapper">
                <div className="headerContainer">
                    <div className="headerLeft">
                        <h1>playlist maker
                            <span className="headerIcon">
                                <i class="fas fa-compact-disc" aria-hidden='true'></i>
                            </span>
                        </h1>
                    </div>
                    <nav>
                        {
                            !this.props.toggleHidden &&   
                            <form action="submit" onSubmit={this.props.submitHandler}>
                                <label htmlFor="searchBar" class="visuallyhidden">Search Records</label>
                                    <input
                                        type="text"
                                        placeholder="Search By Artist" name="artistQuery"
                                        onChange={this.props.changeHandler}
                                        id="searchBar"
                                    />
                                    <button type="submit">Submit</button>
                                </form>
                        }

                        {
                            this.props.initialResponse.length > 0 && 
                        
                                <select>
                                    <option value="chooseAlbum">- - - Choose Album - - -</option>
                                {
                                    
                                    this.props.initialResponse.map((options, i) => {
                                            
                                        return <option key={i} onClick={this.props.checkUserResponse}>{options.name}</option>
                                    })
                                    }
                                    
                                </select>
                        }

                    </nav> 
                </div>
            </header>
            
        )
    }
}

export default Header;

