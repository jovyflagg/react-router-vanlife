import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const HostLayout = () => {
  return (
    <>  
    <nav>
        <Link to='/host'>Dashboard</Link>
        <Link to='income'>Income</Link>
        <Link to='reviews'>Reviews</Link>
    </nav>
      <Outlet />
    </>
  )
}
