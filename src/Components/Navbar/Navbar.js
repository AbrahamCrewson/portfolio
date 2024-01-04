import React from 'react';
import './Navbar.css';
import logo from './logo.png'
import {Link} from "react-router-dom";
import Menu from './Menu';
class Navbar extends React.Component{

    render(){
        return(
            <div>
                <div className='Navbar'>
                    <Link to='/'><img id="logo" src={logo}alt='logo'></img></Link>
                    <div id="navigation">
                        <Link to="/projects"> <h2>Projects</h2></Link>
                        <Link to="/experience"> <h2>Experience</h2></Link>
                        <Link to="/contact"> <h2>Contact</h2></Link>
                        
                    </div>
                </div>
                <div id="Menu">
                    <Menu/>
                </div>
                
                
            </div>
                
        );
    }
}
export default Navbar