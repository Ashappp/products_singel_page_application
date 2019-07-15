import React from 'react';
import { Link } from 'react-router-dom';
import s from './TableProduct.module.css';

const TableProduct = ({ item }) => {
  const { name, price, _id } = item;
  return (
    <tr className={s.tr} key={_id}>
      <td>{name}</td>
      <td>{price}</td>
      <Link className={s.link} to={`products/${_id}`}>
        Seen
      </Link>
    </tr>
  );
};

export default TableProduct;
