import React, { Component } from 'react';

class Header extends Component {

    render() {
    
        return (
            <header tabIndex='0'>
                <div className="headerLeft">
                    <h1>This thing I made.</h1>
                </div>
                <nav>
                    {
                        !this.props.toggleHidden &&   
                            <form action="submit" onSubmit={this.props.submitHandler}>
                                <input
                                    type="text"
                                    placeholder='Search By Artist' name='artistQuery'
                                    onChange={this.props.changeHandler} />
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
            </header>
            
        )
    }
}

export default Header;

