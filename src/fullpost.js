import React, { Component } from 'react'
import Aux from'./aux'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Fullpost extends Component{
    state={
        loadedpost:null
    }
    componentDidMount(){
        if(this.props.match.params.id){
            let post_id=this.props.match.params.id
            if(!this.state.loadedpost || this.state.loadedpost.id !==post_id){
            let url=('/posts/'+post_id)
            axios.get(url).then(response=>{
            this.setState({
                loadedpost:response.data
            })
        })
    }}}

    deleteposthandler=()=>{
        let url='/posts/'+this.props.params.id
        axios.delete(url).then(resp=>console.log(resp))
    }

    render(){
        

        let postselected= <Aux><h1>select a post!</h1><p>A dummy paragraph...</p></Aux>
            if(this.props){
                postselected=<Aux><h1>Content loading ...</h1></Aux>
            }
            if(this.state.loadedpost){ 
                postselected= <Aux>
                                        <h1>{this.state.loadedpost.title}</h1>
                                        <p>{this.state.loadedpost.body}</p>
                                        <div className="edit">
                                        <button className="Delete" onClick={this.deleteposthandler}>Delete</button></div>
                                </Aux>
            }
            
        return <div style={{'margin':'10px auto','width':'600px','height':' 200px'}}>{postselected}</div>
        
             

        }
    }

export default withRouter(Fullpost)