import React from 'react'
import {Link,NavLink} from "react-router-dom";

export const Header = () => {
  return (
    <header>
    <p>Shopping cart</p>
    <nav className="navigation">
        <NavLink to="/" className="link">Home</NavLink><br/>
        <NavLink to="/cart" className="link">cart</NavLink>
    </nav>
    <Link to="/cart2" className="items">cart2</Link>
   </header>
  )
}
