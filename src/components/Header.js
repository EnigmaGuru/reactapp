import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './component.css'

export class Header extends Component {
    render() {
        return (
            <div className="ui center aligned header ">
                <h1 style={{marginTop:"1em", background:"#eee",padding:"0.5em", borderRadius:"5px"}}>Chain <i className=" chain red icon "></i>Link
                
                </h1>
                <div className="ui two item menu">
                    <Link className="item" to="/">Home</Link>
                    <Link className="item" to="/about">About</Link>
                    
                </div>
            </div>
        )
    }
}

export default Header
