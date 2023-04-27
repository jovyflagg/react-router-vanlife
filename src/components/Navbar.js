import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className='nav--main'>
                <NavLink to='/' className='nav--home'>#VANLIFE</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/vans'>Vans</NavLink>
            </nav>

        </>
    )
}
