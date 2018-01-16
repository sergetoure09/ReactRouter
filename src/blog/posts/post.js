import React from 'react'
import classes from './post.css'

const Post=props=>{
    return (
        <div className={classes.post} onClick={props.clicked}>
           
            <h3> {props.info.title} </h3>
            <p>{props.info.body}</p>
            <em>Author: Serge Toure</em>
        </div>
    )
}
export default Post