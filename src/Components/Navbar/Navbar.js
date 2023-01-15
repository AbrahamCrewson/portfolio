import React from 'react';
import './Navbar.css';
import logo from './logo.png'

class Navbar extends React.Component{

    render(){
        return(
            <div className='Navbar'>
                <img id="logo" src={logo}alt='logo'></img>
                <div id="navigation">
                    <a href="#About"><h2>About Me</h2></a>
                    <a href="#Projects"> <h2>Projects</h2></a>
                    <a href="#Contact"><h2>Contact Me</h2></a>
                   
                    
                </div>
            </div>
        );
    }
}
export default Navbar