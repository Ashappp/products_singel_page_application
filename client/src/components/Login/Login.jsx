import React, { Component } from 'react';
// import API from '../../services/api';
import { connect } from 'react-redux';
// import addMovie from "../../redux/actions/addMovieAction";
import PropTypes from 'prop-types';
import s from './Login.module.css';

class AddMoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginInput: '',
      passwordInput: '',
      submitDisabled: true,
    };
  }

  handlerOnSubmit = e => {
    e.preventDefault();
    const { loginInput, passwordInput } = this.state;
    const createObj = {
      login: loginInput,
      password: Number(passwordInput),
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
      loginInput: '',
      passwordInput: '',
      submitDisabled: true,
    });
  };

  handleChange = e => {
    const { loginInput, passwordInput } = this.state;
    const disable = loginInput.length > 0 && passwordInput.length > 0;
    this.setState({
      [e.target.name]: e.target.value,
      submitDisabled: !disable,
    });
  };

  render() {
    const { loginInput, passwordInput, submitDisabled } = this.state;
    return (
      <form className={s.form} onSubmit={this.handlerOnSubmit}>
        <input
          className={s.input}
          type="text"
          onChange={e => this.handleChange(e)}
          name="loginInput"
          placeholder="Login"
          value={loginInput}
          required
        />
        <input
          className={s.input}
          type="text"
          onChange={e => this.handleChange(e)}
          name="passwordInput"
          placeholder="Password"
          value={passwordInput}
          required
        />
        <input
          className={s.btn}
          type="submit"
          value="Login"
          disabled={submitDisabled ? true : false}
        />
      </form>
    );
  }
}

export default AddMoviesPage;
