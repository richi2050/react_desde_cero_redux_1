import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">Poke API</Link>
            <div>
                <div className="d-flex">
                    <NavLink 
                        className="btn btn-dark mr-2" 
                        to="/"
                        exact
                    >
                        Pokemon
                    </NavLink>
                    <NavLink 
                        className="btn btn-dark mr-2" 
                        to="/login"
                        exact
                    >
                        Login
                    </NavLink>
                    <button
                        className="btn btn-dark"
                    >
                        cerrar Sesión
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
