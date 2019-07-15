import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ProductPage.module.css';
import API from '../../servises/Api';
import ProductCard from '../../components/ProductCard/ProductCard';

const createObjId = props => {
  const id = props.match.params.productId;
  const objId = {
    _id: id,
  };
  return objId;
};

class ProductPage extends Component {
  state = { product: null };

  componentDidMount() {
    const id = createObjId(this.props);
    API.fetchProductById(id).then(res =>
      this.setState({ product: res.data.data }),
    );
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <h1 className={s.title}>Product</h1>
        {product && <ProductCard {...product} />}
      </div>
    );
  }
}

ProductPage.propTypes = {
  id: PropTypes.string,
};

export default ProductPage;
