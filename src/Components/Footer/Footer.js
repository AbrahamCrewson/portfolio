import React from 'react';
import './Footer.css';
import logo from '../Navbar/logo.png'

class Footer extends React.Component{

    render(){
        return (
            <div className='Footer'> 
                <div>
                    <img id="logoBottom" src={logo}alt='logo'></img>
                </div>
            </div>
        );
    }
}
export default Footer;