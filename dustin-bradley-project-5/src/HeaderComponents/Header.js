import React, { Component } from 'react';


//conditionally render select element based on props.initialresponse.length. 
// In select, map through and get name as content to display on dropdown.
class Header extends Component {
    // console.log(options.image[0]["#text"]);
 

    render() {
    
        return (
            <header>
                <div className="headerLeft">
                    <h1>Concert<span className='lowerCase'>Hub</span></h1>
                </div>
                <nav>
                    <form action="submit" onSubmit={this.props.submitHandler}>
                        <input
                            type="text"
                            placeholder='Search By Artist' name='artistQuery'
                            onChange={this.props.changeHandler} />
                        <button type="submit">Submit</button>
                    </form>
                </nav>
                <select>
                    {this.props.initialResponse.length > 0 ? 
                        this.props.initialResponse.map((options, i) => {
                            return <option key={i} onClick={this.props.checkUserResponse}>{options.name}</option>
                        })
                    : null
                    }
                </select>
            </header>
            
        )
    }
}

export default Header;

