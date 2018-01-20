import React, { Component } from 'react';
import './App.css';
import Header from './blog/header/header'
import Post from './blog/posts/post'
import axios from 'axios'
import Fullpost from './fullpost'
import Newpost from './newpost'
import {Route,Switch,withRouter} from 'react-router-dom'
import Posts from './blog/posts/Posts'




class Blog extends Component {

  componentDidMount(){
    console.log(this.props) 
   
    
  }
  
  render() {

  
    
    return (
      
      <div className="App">
      
      <Header />
      <Switch>
      <Route exact path='/' component={Posts}/>
      <Route exact path='/New-post' component={Newpost}/>
      <Route exact path='/:id' component={Fullpost}/>
      </Switch>
    
       
      </div>
    );
  }
}

export default withRouter(Blog);
