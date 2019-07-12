import React, { Component } from 'react';
// import API from '../../services/api';
import { connect } from 'react-redux';
// import addMovie from "../../redux/actions/addMovieAction";
import PropTypes from 'prop-types';
import s from './CreateProduct.module.css';

class AddMoviesPage extends Component {
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
    const { created } = this.props;
    const createObj = {
      name: nameProductInput,
      price: Number(priceInput),
      description: descriptionInput,
      createdBy: created,
    };

    // API.createMovie(createObj)
    //   .then(res => {
    //     addMovie(res.data.createdFilm);
    //     this.props.history.push('/movies');
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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

// const MSTP = store =>({
//     created: store.createdBy
// })

// const MDTP = dispatch => ({
//   addMovie: data => dispatch(addMovie(data))
// });

AddMoviesPage.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default connect(
  null,
  null,
)(AddMoviesPage);
