import React, { Component } from 'react';
import Post from './post'
import axios from 'axios'

import Aux from '../../aux'
import {Link} from 'react-router-dom'

class Posts extends Component{
    constructor(props){
        super(props);
        this.state={
          posts:[],
         
        }
      }
    selectHandler=(id)=>{
      this.props.history.push({pathname:'/'+id}) //push a new page on to the stack of the web app, you can goBack() or goForward()
    
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
       if(!this.state.error){ 
                      posts=this.state.posts.map((post)=>{
                        return(
                          //<Link style={{textDecoration:'none',color:'black',fontFamily:'sans-serif'}} key={post.id} to={{pathname:'/'+post.id}}>
                                            
                                <Post  
                                              info={post}
                                              clicked={()=>this.selectHandler(post.id)}/>
                             //  </Link> 
                            )
       })}
                               
        return (
          
            <Aux>
          
          {posts}
          
          
         
        </Aux>
           
         
        );
      }
    }
    
    export default Posts;