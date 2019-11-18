import React from 'react';
import logo from '../img/logo.png'
function Header() {
    return (
        <header>
          <img src={logo} className="logo"></img>
          <h1>TodoList Of React Hooks</h1>
        </header>
    )
}
export default Header;

