import React from "react"
import "../styles/Navbar.scss"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const getClass = (options) =>
        options.isActive ? "navbar__link active" : "navbar__link"

    return (
        <div className='navbar'>
            <NavLink to='/reader' className={getClass}>
                Reader
            </NavLink>
            <NavLink to='/book' className={getClass}>
                Book
            </NavLink>
            <NavLink to='/form' className={getClass}>
                Form
            </NavLink>
            <NavLink to='/borrow' className={getClass}>
                Borrow
            </NavLink>
            <NavLink to='/return' className={getClass}>
                Return
            </NavLink>
            <NavLink to='/search' className={getClass}>
                Catalog
            </NavLink>
        </div>
    )
}

export default Navbar
