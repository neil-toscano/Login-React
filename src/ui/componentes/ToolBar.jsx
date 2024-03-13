import React from 'react'
import { NavLink } from 'react-router-dom'

export const ToolBar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" >Codeando Gris</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/productos">Productos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/soluciones">Soluciones</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/developers">Developers</NavLink>
        </li>
      </ul>
      <ul className='nav'>
        <li className='nav-item'>
            <NavLink to='/login'><button className='btn btn-success'>Log In</button></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
