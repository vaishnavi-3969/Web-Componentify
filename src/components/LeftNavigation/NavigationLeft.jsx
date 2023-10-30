import React from "react"
import { NavLink } from "react-router-dom"
import "./NavigationLeft.css"

export const NavigationLeft = () => {
    return (
        <>
            <div className="nav-container">
                <NavLink className="navlink" to="/" >Home</NavLink>
                <NavLink className="navlink" to="/button" >Button</NavLink>
                <NavLink className="navlink" to="/Modal" >Modal</NavLink>
                <NavLink className="navlink" to="/Footer" >Footer</NavLink>
                <NavLink className="navlink" to="/avatar" >Avatar</NavLink>
                <NavLink className="navlink" to="/card" >Card</NavLink>
                <NavLink className="navlink" to="/alert" >Alert</NavLink>
                <NavLink className="navlink" to="/badge" >Badge</NavLink>
                <p>more add below</p>
            </div>
        </>
    )
}