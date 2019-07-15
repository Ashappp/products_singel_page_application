import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './AllProducts.module.css';
import TableProduct from '../../components/TableProduct/TableProduct';

class ProductsList extends Component {
  render() {
    const { dataProducts } = this.props;
    return (
      <table className={s.table}>
        <caption>Products list</caption>
        <tbody>
          <tr className={s.tr}>
            <th className={s.th}>Product name</th>
            <th className={s.th}>Price</th>
            <th className={s.th}>Seen More</th>
          </tr>
          {dataProducts.length
            ? dataProducts.map(el => <TableProduct item={el} key={el._id} />)
            : null}
        </tbody>
      </table>
    );
  }
}

const MSTP = store => ({
  dataProducts: store.dataProducts,
});

ProductsList.propTypes = {
  dataProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(MSTP)(ProductsList);
