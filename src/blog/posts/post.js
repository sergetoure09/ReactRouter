import React from 'react'
import classes from './post.css'

const Post=props=>{
    return (
        <div className={classes.post}>
            <img src={props.info.avatar} alt="here"/>
            <h3> {props.info.title} </h3>
            <p>{props.info.text}</p>
            <address>{props.info.author}</address>
        </div>
    )
}
export default Post