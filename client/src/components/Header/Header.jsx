import React, { Component } from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
// import authenticator from '../../servises/servises';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  //  authenticator = () => {
  //   const tokenIsValid = message => {
  //     if (message === 'Token is not valid') return false;
  //   };
  //   const token = localStorage.getItem('token');
  //   axios
  //     .post(
  //       `http://localhost:3009/api/product/new`,
  //       {},
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${token}`,
  //         },
  //       },
  //     )
  //     .then(res => tokenIsValid(res.data.message));
  // };

  IsToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return this.props.history.push('/product/new');
    } else {
      this.props.history.push('/login');
    }
  };

  render() {
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
  }
}

export default Header;
