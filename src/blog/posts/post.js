import React, { Component } from 'react'
import classes from './post.css'
import {withRouter} from 'react-router-dom'


class Post extends Component{
    componentDidMount(){
        console.log(this.props)
        
    }
    render(){

    return (
        <div className={classes.post} onClick={this.props.clicked}>
           
            <h3> {this.props.info.title} </h3>
            <p>{this.props.info.body}</p>
           
        </div>
    )
}
}
export default withRouter(Post)