import React from 'react';
import './Projects.css';
import Banner from './banner.jpg';
import redditDesktop from './redditDesktop.png';
import redditMobile from './redditMobile.png';
import foodDesktop from './foodDesktop.png';
import FoodMobile from './foodMobile.png';
import Subbf from './subbf.png';
import Subaf from './sub.png';
import gameplay from './Gameplay.mp4';
import house from './House.PNG';
import abstract from './Abstract.PNG';
class Projects extends React.Component{
    componentDidMount(){
        const elementsToFadeInUpOnScroll = document.querySelectorAll(".projDesc");
        if (elementsToFadeInUpOnScroll) {
        window.addEventListener("scroll", function(event) {
            elementsToFadeInUpOnScroll.forEach(function(element) {
            if (window.scrollY >= (element.offsetTop - window.innerHeight)) {
                element.classList.add("fadeIn");
            } else {
                element.classList.remove("fadeIn");
            }
            });
        });
        } 
    }

    render(){
        return(
            <div className='Projects'>
                <div className='Header'>
                    <h1>My Projects</h1>
                    <div id="Banner">
                        <img src={Banner} alt="Project Banner"></img>
                    </div>
                    
                </div>
                <div className='ProjectList'>
                    <div className='RecentP'>
                        <h2>Recent Projects</h2>
                        <div className='recentProj'>
                            <div className='projDesc'>
                                <h3>Reddit Client (2023)</h3>
                                <h4>Program Language: HTML, CSS, JavaScript and React</h4>
                                <p>A Reddit client for viewing subreddits, searching reddit, and adding your favourite subreddits. This web app is powered by the Reddit API through fetching information from JSON files.</p>
                                <a href="https://abrahamcrewson.github.io/reddit-client/" target="_blank" rel="noreferrer">Try it out here!</a>
                            </div>
                            <div className='projPc'>
                                <img src={redditDesktop} alt="Reddit Browser Screenshot"></img>
                            </div>
                            <div className='projMobile'>
                                <img src={redditMobile} alt="Reddit Mobile Screenshot"></img>
                            </div>
                        </div>
                        <div className='divider'></div> 
                        <div className='recentProj'>
                            <div className='projDesc'>
                                <h3>Food Picker (2023)</h3>
                                <h4>Program Language: HTML, CSS, JavaScript and React</h4>
                                <p>A food selection tool for when you can't decide what you are really craving to eat or what satisfies you the most.</p>
                                <a href="https://abrahamcrewson.github.io/food-picker/" target="_blank" rel="noreferrer">Try it out here!</a>

                            </div>
                            <div className='projPc'>
                                <img src={foodDesktop} alt="Food Picker Browser Screenshot"></img>
                            </div>
                            <div className='projMobile'>
                                <img src={FoodMobile} alt="Food Picker Mobile Screenshot"></img>
                            </div>
                        </div>
                    </div>
                    <div className='bigdivider'></div>
                    <div className='UniP'>
                        <h2>University Projects</h2>
                        <div id="UniP1">
                            <div className='projDesc'>
                                <h3>Mr. Sub App Redesign (2022)</h3>
                                <h4>Program Language: React and React Native</h4>
                                <ul>
                                    <li>Developed a meal ordering IOS app using React and React Native.</li>
                                    <li>Worked with a team of peers to redesign and develop a mobile IOS app to improve overall user experience.</li>
                                    <li>Designed better user interfaces according to design principles for the business’s mobile app.</li>
                                </ul>
                            </div>
                            <div className='BeforeAfter'>
                                <div className='AppSS'>
                                    <h3>Before</h3>
                                    <img src={Subbf} alt="Sub App Before Screenshot"></img>
                                </div>
                                <div>
                                    <h2>→</h2>
                                </div>
                                <div className='AppSS'>
                                    <h3>After</h3>
                                    <img src={Subaf} alt="Sub App After Screenshot"></img>
                                </div>
                            </div> 
                        </div>
                        <div className='divider'></div>
                        <div id='UniP2'>
                            <div id='GameDemo'>
                                <video   controls>
                                    <source src={gameplay} type='video/mp4'/>
                                </video>
                            </div>
                            <div className='projDesc'>
                                <h3>Rogue-Like Game Clone (2021)</h3>
                                <h4>Program Language: C++</h4>
                                <ul>
                                    <li>Created a dungeon exploration game using C++ supported with the SFML framework.</li>
                                    <li>Worked with group members to plan and fulfil story points as part of a time managed shared git repository. </li>
                                    <li>Participated in error testing and debugging as part of the software development process.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='divider'></div>
                        <div id='UniP3'>
                            <div className='projDesc'>
                                <h3>Microsoft Paint Clone (2018)</h3>
                                <h4>Program Language: Java</h4>
                                <ul>
                                    <li>Built a paint application that mimics early Microsoft paint applications written in Java.</li>
                                    <li>Connected smaller independent components of the application to create a unified project with innovative features.</li>
                                </ul>
                            </div>
                            <div className='PaintSS'>
                                <img src={abstract} alt=""></img>
                            </div>
                            <div className='PaintSS'>
                                <img src={house} alt=""></img>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Projects;