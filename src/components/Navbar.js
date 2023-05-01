import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className='nav--main'>
                <Link to='/react-router-vanlife' className='site-logo'>#VANLIFE</Link>
                <NavLink to='/host'>Host</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/vans'>Vans</NavLink>
            </nav>

        </>
    )
}
