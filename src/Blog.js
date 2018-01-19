import React, { Component } from 'react';
import './App.css';
import Header from './blog/header/header'
import Post from './blog/posts/post'
import axios from 'axios'
import Fullpost from './fullpost'
import Newpost from './newpost'
import {Route,Switch} from 'react-router-dom'
import Posts from './blog/posts/Posts'

class Blog extends Component {
  
  render() {
   
    return (
      <div className="App">
      <Header />
      <Route exact path='/' component={Posts}/>
      <Route exact path='/New-post' component={Newpost}/>
    
       
      </div>
    );
  }
}

export default Blog;
