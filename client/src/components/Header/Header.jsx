import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.list}>
          <li>
            <NavLink className={style.item} to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className={style.item} to="/product/new">
              Add New Product
            </NavLink>
          </li>
          <li>
            <NavLink className={style.item} to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
