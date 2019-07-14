import React from 'react';
import { Link } from 'react-router-dom';
import s from './ProductCard.module.css';

const ProductCard = ({ name, price, description, _id }) => {
  return (
    <article className={s} key={_id}>
      <h2>Name:{name}</h2>
      <span>Price: {price}</span>
      <p>Discription:{description}</p>
      <Link to={`/products`}>Back to Products</Link>
    </article>
  );
};

export default ProductCard;
