import React from 'react';
import h from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return <header className={h.header}>
    <img src = "https://i.pinimg.com/474x/d3/0a/19/d30a19c7f5c494218deb98202f3f6422.jpg" alt = 'logo'/>

    <div className={h.loginBlock}>
      { props.isAuth ? props.login
       : <NavLink to={'/login'}>Login</NavLink>
      }
    </div>
  </header>
}

export default Header;
