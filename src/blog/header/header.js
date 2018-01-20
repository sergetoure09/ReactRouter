import React from 'react'
import classes from './header.css'
import {NavLink} from 'react-router-dom'
import { withRouter } from 'react-router-dom'


const Header=props=>{
    console.log(props)
    return(
        <div className={classes.header}>
            <h4>MY BLOG APP</h4>
            <nav>
               
                <NavLink  exact activeClassName={classes.active}  to={{
            pathname:props.match.url+'new-post',
            hash:'#submit',
            search:'?blabla=true'}}>New post</NavLink>
                <NavLink  exact activeClassName={classes.my_active}  to='/'>My posts</NavLink>
                
            </nav>
        </div>
    )
}

export default withRouter(Header)