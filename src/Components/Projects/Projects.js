import React from 'react';
import './Projects.css';
import before from './subbf.png';
import after from './sub.png';
import gameplay from './Gameplay.mp4';
import showcase1 from './Abstract.PNG';
import showcase2 from './House.PNG';
import redditD from './redditDesktop.png';
import redditM from './redditMobile.png';
import foodD from './foodDesktop.png';
import foodM from './foodMobile.png';
class Projects extends React.Component{

    render(){
        return (
            <div className='Projects' id="Projects">
                <div className='hOne'>
                    <h1>Projects</h1>
                    <div className='line'></div>
                    
                </div>
                <div id="Recent">
                    <h2>Recent Projects</h2>
                    <div id="Reddit">
                        <div>
                            <h3>Reddit Client (2023)</h3>
                            <h4>Program Language: HTML, CSS, JavaScript and React</h4>
                            <h5>A Reddit client for viewing subreddits, searching reddit, and adding your favourite subreddits.
                                 This web app is powered by the Reddit API through fetching information from JSON files.
                            </h5>
                            <a href="https://abrahamcrewson.github.io/reddit-client/" target="_blank" rel="noreferrer">Try it out here!</a>
                        </div>
                        <div className='desktopMobile'>
                            <img src ={redditD}alt="App Desktop View" className="desktop"></img>
                            <img src ={redditM}alt="App Mobile View" className="mobile"></img>
                        </div>
                    </div>
                    <hr className='divider'/>
                    <div id="Food">
                        <div>
                            <h3>Food Picker (2023)</h3>
                            <h4>Program Language: HTML, CSS, JavaScript and React</h4>
                            <h5>A food selection tool for when you can't decide what you are really craving to eat or what satisfies you the most.</h5>
                            <a href="https://abrahamcrewson.github.io/food-picker/" target="_blank" rel="noreferrer">Try it out here!</a>
                        </div>
                        <div className='desktopMobile'>
                            <img src ={foodD} alt="App Desktop View"  className="desktop"></img>
                            <img src = {foodM} alt="App Mobile View" className="mobile"></img>
                        </div>
                        
                    </div>
                </div>
                <hr/>
                <div id="Uni">
                   <h2>University Projects</h2>
                   <div id="Sub">
                        <div>
                            <h3>Mr. Sub App Redesign (2022)</h3>
                            <h4>Program Language: React and React Native</h4>
                            <ul>
                                <li>Developed a meal ordering IOS app using React and React Native.</li>
                                <li>Worked with a team of peers to redesign and develop a mobile IOS app to improve overall user experience.</li>
                                <li>Designed better user interfaces according to design principles for the business’s mobile app.</li>
                            </ul>
                        </div>
                        <div id="bfafter">
                            <div className='label'>
                                <h3>Before</h3>
                                <img src={before} alt='before'></img>
                            </div>
                            <h1>&#8594;</h1>
                            <div className='label'>
                                <h3>After</h3>
                                <img src={after}alt='after'></img>
                            </div>
                            
                        </div>
                    </div>
                    <hr className='divider'/>
                    <div id="Game">
                        <div id="gameplay">
                            <video   controls>
                                <source src={gameplay} type='video/mp4'/>
                            </video>
                        </div>
                        <div>
                            <h3>Rogue-Like Game Clone (2021)</h3>
                            <h4>Program Language: C++</h4>
                            <ul>
                                <li>Created a dungeon exploration game using C++ supported with the SFML framework.</li>
                                <li>Worked with group members to plan and fulfil story points as part of a time managed shared git repository. </li>
                                <li>Participated in error testing and debugging as part of the software development process.</li>
                            </ul>  
                        </div>
                        
                    </div>
                    <hr className='divider'/>
                    <div id="Paint">
                        <div>
                            <h3>Microsoft Paint Clone (2018)</h3>
                            <h4>Program Language: Java</h4>
                            <ul>
                                <li>Built a paint application that mimics early Microsoft paint applications written in Java.</li>
                                <li>Connected smaller independent components of the application to create a unified project with innovative features.</li>
                            </ul> 
                        </div>
                        <div id="showcase">
                            
                            <img src={showcase1} alt='before'></img>
                            <img src={showcase2}alt='after'></img>
                           
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}
export default Projects;