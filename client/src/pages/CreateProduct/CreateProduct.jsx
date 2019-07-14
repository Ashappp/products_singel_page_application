import React, { Component } from 'react';
import API from '../../servises/Api';
import { connect } from 'react-redux';
import addNewProduct from '../../redux/actions/getCreatedProduct';
import PropTypes from 'prop-types';
import s from './CreateProduct.module.css';

class CreteProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameProductInput: '',
      priceInput: '',
      descriptionInput: '',
      submitDisabled: true,
    };
  }

  handlerOnSubmit = e => {
    e.preventDefault();
    const { nameProductInput, priceInput, descriptionInput } = this.state;
    const { addNewProduct } = this.props;
    const created = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const createObj = {
      name: nameProductInput,
      price: Number(priceInput),
      discription: descriptionInput,
      createdBy: created,
    };
    console.log(createObj);
    API.fetchCreateProduct(createObj, token)
      .then(res => {
        if (res.data.message === 'Token is not valid') {
          this.props.history.push('/login');
        }
        addNewProduct(res.data.createdProduct);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({
      nameProductInput: '',
      priceInput: '',
      descriptionInput: '',
      submitDisabled: true,
    });
  };

  handleChange = e => {
    const { nameProductInput, priceInput, descriptionInput } = this.state;
    const disable =
      nameProductInput.length > 0 &&
      priceInput.length > 0 &&
      descriptionInput.length > 0;
    this.setState({
      [e.target.name]: e.target.value,
      submitDisabled: !disable,
    });
  };

  render() {
    const {
      nameProductInput,
      priceInput,
      descriptionInput,
      submitDisabled,
    } = this.state;
    return (
      <form className={s.form} onSubmit={this.handlerOnSubmit}>
        <input
          className={s.input}
          type="text"
          onChange={e => this.handleChange(e)}
          name="nameProductInput"
          placeholder="Product Name"
          value={nameProductInput}
          required
        />
        <input
          className={s.input}
          type="text"
          onChange={e => this.handleChange(e)}
          name="priceInput"
          placeholder="Price"
          value={priceInput}
          required
        />
        <input
          className={s.input}
          type="text"
          onChange={e => this.handleChange(e)}
          name="descriptionInput"
          placeholder="Description"
          value={descriptionInput}
          required
        />
        <input
          className={s.btn}
          type="submit"
          value="Create Product"
          disabled={submitDisabled ? true : false}
        />
      </form>
    );
  }
}

const MDTP = dispatch => ({
  addNewProduct: data => dispatch(addNewProduct(data)),
});

CreteProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default connect(
  null,
  MDTP,
)(CreteProduct);
