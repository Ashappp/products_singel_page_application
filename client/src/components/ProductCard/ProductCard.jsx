import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './ProductCard.module.css';

const ProductCard = ({ filteredData, item, deleteFilm }) => {
  return (
    <li className={s.list_item} key={item._id}>
      <h2>{item.name}</h2>
      <h3>Price: {item.price}</h3>
      <h4>description: {item.description}</h4>
      <NavLink className={s.item} to={`/products/${item.id}`}>
        Seen More
      </NavLink>
    </li>
  );
};

export default ProductCard;
