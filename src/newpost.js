import React, { Component } from 'react'
import Aux from './aux'
import axios from 'axios'
import classes from './newpost.css'


class Newpost extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            body:"",
            author:""
        }
    }
    handletext=(e)=>{
        this.setState({
            body:e.target.value
        })
    }
    resetstate=()=>{
        this.setState({
            title:"",
            body:"",
            author:""
        })
    }
    handletitle=(e)=>{
        this.setState({
            title:e.target.value
        })
    }
    datahandler=()=>{
        let url='posts'
        let postdata={...this.state}
        const promise=axios.post(url,postdata)
        promise.then(response=>console.log(response.data))
        this.resetstate()


    }

    render(){
        return(
            <Aux classes={classes.npost}>
                <h2>Add a post</h2>
                <label>title</label>
                <input type='text' value={this.state.title} onChange={this.handletitle}/> <br/>
                <label>content</label>
                <textarea value={this.state.body} onChange={this.handletext}></textarea><br/>
                <label>title</label>
                <select value={this.state.author} onChange={(e)=>this.setState({author:e.target.value})}>
                    <option value="Abou">Abou</option>
                    <option value="Karla">Karla</option>
                    <option value="Rokya">Rokya</option>
                </select>
                <button onClick={this.datahandler}>Submit</button>

                </Aux>
        )
    }
}
export default Newpost