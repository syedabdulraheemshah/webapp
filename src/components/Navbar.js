import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
function Navbar() {
  return (
<>
<nav className="navbar navbar-expand-lg navbar-light bg-dark ">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">Raheem</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active bg-primary rounded" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="About">About</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Carrer</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Contact</a>
                </li>
            </ul>
            <div className="form-check form-switch text-light mx-2">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-primary" type="submit">Search</button>
            </form>

        </div>
    </div>
</nav>
</>
  )
}
export default Navbar
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    HomeText: PropTypes.string.isRequired
}