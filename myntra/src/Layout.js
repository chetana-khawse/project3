import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div align ='center'> 
    <h2>  <Link to="/">Home</Link>  <br/> <Link to="/About">about</Link> <br/>    <Link to="/Register">Register</Link><br/>       <Link to="/Blogs">Blogs</Link>
    </h2>
     <Outlet />
  </div>
  )
}

export default Layout