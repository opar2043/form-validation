import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CounContext } from '../App'
import auth from './_firebase.init'

const Navbar = () => {

  const {user , signOutUser} = useContext(CounContext)

  function handlesignOut(){
    signOutUser(auth)
    .then(res => {
      console.log('sognn out succesfully');
    })
    .catch(err => {
      console.log(err , 'error here');
    })
  }

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/login'}>Log In</NavLink></li>
        <li><NavLink to={'/signin'}>Sign Up</NavLink></li> 
        {
        user && <>
        <li><NavLink to={'/order'}>Order</NavLink></li>    
        <li><NavLink to={'/profile'}>Profile</NavLink></li>    
              
        </>
        }   
    </>

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu gap-4 menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Form validation</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu gap-3 menu-horizontal px-1 ">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? 
      <div>
            <button className='btn'>{user?.email}</button>
            <div className="btn" onClick={handlesignOut}><Link to={'/signin'}>Sign Out</Link></div>
      </div>  : <button className='btn'><Link to={'/login'}>Log In</Link></button>
    }
   
  </div>
</div>
  )
}

export default Navbar