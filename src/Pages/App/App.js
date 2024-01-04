import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Start from '../Start/Start';
import Layout from '../Layout/Layout';
import Project from '../Project/Project';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';

class App extends React.Component {
  render (){
    return(
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Start/>}/>
            <Route path='projects' element={<Project/>}/>
            <Route path='experience' element={<Experience/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
export default App;
