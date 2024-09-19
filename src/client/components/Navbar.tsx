import React from "react";
import { NavLink } from "react-router-dom";

const Navbar =() => {
    return(
    <div className='bg-dark'>
        <NavLink className='btn btn-outline-success m-2'to={'/'}>Home</NavLink>
        <NavLink className='btn btn-outline-success m-2'to={'/chirps'}>Fresh New Chirps!</NavLink>
    </div>
    );
};

export default Navbar