import React from 'react';
import './Hero.css';
import profile from './profile.png';
class Hero extends React.Component{

    render(){
        return(
            <div className='Hero'>
                <div className='Name'>
                    <div className='NameInfo'>
                        <h1>Hey! 👋</h1>
                        <h2>Welcome to my digital portfolio -- where skills meet creativity. Let's explore my journey together!</h2>
                    </div>
                    
                    <img src={profile} alt=' 'id="profile"></img>
                </div>
                
            </div>
        );
    }
}
export default Hero;