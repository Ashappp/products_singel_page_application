import React from 'react';
import s from './ProductCard.module.css';

const ProductCard = ({ name, price, description, _id }) => {
  return (
    <article className={s} key={_id}>
      <h2>{name}</h2>
      <span>Price: {price}</span>
      <p>{description}</p>
      <button>Back to Products</button>
    </article>
  );
};

export default ProductCard;
