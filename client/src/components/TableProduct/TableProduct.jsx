import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './TableProduct.module.css';

const TableProduct = ({ item }) => {
  return (
    <tr className={s.tr} key={item._id}>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.description}</td>
      <NavLink className={s.NavLink} to={`/products/${item.id}`}>
        Seen More
      </NavLink>
    </tr>
  );
};

export default TableProduct;
