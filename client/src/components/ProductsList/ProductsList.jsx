import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './ProductsList.module.css';
import TableProduct from '../TableProduct/TableProduct';

class ProductsList extends Component {
  render() {
    const { dataProducts } = this.props;
    return (
      <table className={s.table}>
        <caption>Products list</caption>
        <tr className={s.tr}>
          <th className={s.th}>Product name</th>
          <th className={s.th}>Price</th>
          <th className={s.th}>Seen More</th>
        </tr>
        {dataProducts.length
          ? dataProducts.map(el => <TableProduct item={el} key={el._id} />)
          : null}
      </table>
    );
  }
}

const MSTP = store => ({
  dataProducts: store.dataProducts,
});

ProductsList.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(MSTP)(ProductsList);
