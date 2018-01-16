import React, { Component } from 'react';
import './App.css';
import Header from './blog/header/header'
import Post from './blog/posts/post'
import axios from 'axios'
import Fullpost from './fullpost'
import Newpost from './newpost'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      posts:[],
      postselected:null,
      error:false
    }
  }
selectHandler=(id)=>{
  this.setState({
    postselected:id
  })

}
componentDidMount(){
  let rul='https://jsonplaceholder.typicode.com/posts'
  
  axios.get(rul).then(response=> {
   
    this.setState({
      posts:response.data.slice(0,10)
    })
  }).catch(error=>this.setState({error:error}))

}

  render() {
    let posts=<h1 style={{'color':'red'}}>Something went wrong!</h1>
   if( !this.state.error){ posts=this.state.posts.map((post)=><Post 
                  key={post.id} 
                  info={post}
                  clicked={()=>this.selectHandler(post.id)}/>)}
    return (
      <div className="App">
      <Header />
      {posts}
      <Fullpost id={this.state.postselected}/>
      <Newpost/>
       
      </div>
    );
  }
}

export default App;
