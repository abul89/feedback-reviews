import React from "react";
import { NavLink,Link } from "react-router-dom";
import logo from "../logo/Logo.png";
import { v4 as uuidv4 } from "uuid";
const Header = () => {
    const id = uuidv4();
  return (
    <div>
      <header>
        <div className="logo">
            <Link to={{ pathname: "/", search: `?id=${id}` }}>  <img src={logo} alt="" /></Link>
        
        </div>
        <ul className="navBar" >
          <li>
            <NavLink activeclassname="active" to={{ pathname: "/", search: `?id=${id}` }}>Home</NavLink>
          </li>
          <li>
            {/* Pass the UUID as a query parameter */}
            <NavLink activeclassname="active" to={{ pathname: "/about", search: `?id=${id}` }}>About</NavLink>
          </li>
          {/* <li>
            <NavLink activeclassname="active" to={{ pathname: "/ComponoentLevel" , search: `?id=${id}` }}>Component</NavLink>
          </li> */}
          {/* <li>
            <a href="/ComponoentLevel">Component</a>
          </li> */}
          
        </ul>
      </header>
     
    </div>
  );
};

export default Header;
