import React from 'react';
import {Link} from "react-router-dom";
import { useState } from 'react';
import './Menu.css';
import Ham from './menu.png';
export default function Menu (){
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
    }

    return(
        <div id='menu'>
            <img src={Ham} id="ham" alt="Menu"onClick={toggleMenu}></img>
            <div id="menuNav">
                
                <Link to="/projects"> <h2>Projects</h2></Link>
                <Link to="/experience"> <h2>Experience</h2></Link>
                <Link to="/contact"> <h2>Contact</h2></Link>
            </div>
            <style jsx>{`
                #menuNav{
                    display: ${menuOpen ? 'flex': 'none'};
                }
            `}</style>
        </div>
        
    )
}