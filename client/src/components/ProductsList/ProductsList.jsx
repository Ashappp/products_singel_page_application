import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './ProductsList.module.css';
import ProductCard from '../ProductCard/ProductCard';

class ProductsList extends Component {
  render() {
    const { dataProducts } = this.props;
    return (
      <ul className={s.movie_list}>
        {dataProducts.length
          ? dataProducts.map(el => <ProductCard item={el} key={el._id} />)
          : null}
      </ul>
    );
  }
}

const MSTP = store => ({
  dataProducts: store.dataProducts,
});

// ProductsList.propTypes = {
//   filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default connect(MSTP)(ProductsList);
