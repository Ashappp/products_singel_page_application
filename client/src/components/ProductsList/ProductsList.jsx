import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './ProductsList.module.css';
import ProductCard from '../ProductCard/ProductCard';
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
          <th className={s.th}>Description</th>
        </tr>
        {/* <tr className={s.tr}>
          <td className={s.td}>Product name</td>
          <td className={s.td}>Price</td>
          <td className={s.td}>Description</td>
        </tr> */}
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

// ProductsList.propTypes = {
//   filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default connect(MSTP)(ProductsList);
