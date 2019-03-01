import React, { Component } from 'react';


//conditionally render select element based on props.initialresponse.length. 
// In select, map through and get name as content to display on dropdown.
class Header extends Component {

    hoverMakeBig = () => {

    }
 
 

    render() {
    
        return (
            <header tabIndex='0'>
                <div className="headerLeft">
                    <h1>This thing I made.</h1>
                </div>
                <nav>
                        {!this.props.toggleHidden &&
                          
                    <form action="submit" onSubmit={this.props.submitHandler}>
                                <input
                                    type="text"
                                    placeholder='Search By Artist' name='artistQuery'
                                    onChange={this.props.changeHandler} />
                                <button type="submit">Submit</button>
                    </form>
                          
                    }
                {this.props.initialResponse.length > 0 && 
                    <select>
                        {this.props.initialResponse.map((options, i) => {
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

