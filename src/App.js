import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './blog/header/header'
import Post from './blog/posts/post'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      posts:[]
    }
  }
componentDidMount(){
  let url='https://my.api.mockaroo.com/postscheme.json'
  axios.get(url).then(response=> {
    this.setState({
      posts:response.data
    })
  })

}

  render() {
    let posts=this.state.posts.map((post)=><Post key={post.id} info={post}/>)
    return (
      <div className="App">
      <Header />
      {posts}
       
      </div>
    );
  }
}

export default App;
