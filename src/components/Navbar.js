import React, { Component } from 'react';
import {NavLink} from "react-router-dom"; 
import "./Navbar.css";


class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <NavLink exact to="/" className="navbar-item" activeClassName="is-active">
        Home
      </NavLink>
      <NavLink to="/categories" className="navbar-item" activeClassName="is-active">
        Categories
      </NavLink>
      <NavLink to="/quizzes" className="navbar-item" activeClassName="is-active">
        Quizz
      </NavLink>
      <NavLink to="/litterature" className="navbar-item" activeClassName="is-active">
        Littérature
      </NavLink>  
      <NavLink to="/history" className="navbar-item" activeClassName="is-active">
        Histoire
      </NavLink>  
      <NavLink to="/cinema" className="navbar-item" activeClassName="is-active">
        Cinéma
      </NavLink>      
    </div>
  </div>
</nav>
        );
     }
}
export default Navbar;