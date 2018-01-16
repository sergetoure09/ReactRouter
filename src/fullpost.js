import React, { Component } from 'react'
import Aux from'./aux'
import axios from 'axios'

class Fullpost extends Component{
    state={
        loadedpost:null
    }
    componentDidUpdate(){
        if(this.props.id){
            if(!this.state.loadedpost || this.state.loadedpost.id !==this.props.id){
            let url='https://jsonplaceholder.typicode.com/posts/'+this.props.id
            axios.get(url).then(response=>{
            this.setState({
                loadedpost:response.data
            })
        })
    }}}

    render(){

        let postselected= <Aux><h1>select a post!</h1></Aux>
            if(this.props.id){
                postselected=<Aux><h1>Content loading ...</h1></Aux>
            }
            if(this.state.loadedpost){ 
                postselected= <Aux>
                                        <h1>{this.state.loadedpost.title}</h1>
                                        <p>{this.state.loadedpost.body}</p>
                                        <div className="edit">
                                        <button className="Delete">Delete</button></div>
                                </Aux>
            }
            
        return <div>{postselected}</div>
        
             

        }
    }

export default Fullpost