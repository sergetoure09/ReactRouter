import React, { Component } from 'react';
import classes from './App.css';
import Blog from './Blog'
import { BrowserRouter } from 'react-router-dom'
  


const App=props=>{
    return(
        <div className={classes.App}>
        <BrowserRouter>
        <Blog/>
        </BrowserRouter>
        </div>
       
    )
}

export default App