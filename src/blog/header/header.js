import React from 'react'
import classes from './header.css'
import {NavLink} from 'react-router-dom'


const Header=props=>{
    return(
        <div className={classes.header}>
            <h4>MY BLOG APP</h4>
            <nav>
               
                <NavLink activeStyle={{color:'red'}} activeClassName={classes.active} to={{pathname:'/new-post',
            hash:'#submit',
            search:'?blablasearch=true'}}>New post</NavLink>
                <NavLink activeClassName={classes.my_active} to='/'>My posts</NavLink>
            </nav>
        </div>
    )
}

export default Header