import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './ProductPage.module.css';
import API from '../../servises/Api';
import ProductCard from '../ProductCard/ProductCard';
import getOneProduct from '../../redux/actions/getOneProductById';

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
        <h1>Product</h1>
        {product && <ProductCard {...product} />}
      </div>
    );
  }
}

export default ProductPage;
