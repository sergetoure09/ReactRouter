import React, { Component } from 'react';
import Post from './post'
import axios from 'axios'
import Fullpost from '../../fullpost'
import Aux from '../../aux'

class Posts extends Component{
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
      let rul='/posts'
      
      axios.get(rul).then(response=> {
       
        this.setState({
          posts:response.data.slice(0,3)
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
          
            <Aux>
          
          {posts}
          
          <Fullpost id={this.state.postselected}/>
         
        </Aux>
           
         
        );
      }
    }
    
    export default Posts;