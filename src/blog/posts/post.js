import React from 'react'
import classes from './post.css'

const Post=props=>{
    return (
        <div className={classes.post} onClick={props.clicked}>
            <img src={props.info.avatar} alt="here"/>
            <h3> {props.info.title} </h3>
            <p>{props.info.body}</p>
            <address>{props.info.author}</address>
        </div>
    )
}
export default Post