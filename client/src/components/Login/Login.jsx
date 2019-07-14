import React, { Component } from 'react';
import API from '../../servises/Api';
import { connect } from 'react-redux';
import getUserID from '../../redux/actions/userIdAction';
import PropTypes from 'prop-types';
import s from './Login.module.css';

class Login extends Component {
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
    const { getUserID } = this.props;
    const createObj = {
      login: loginInput,
      password: Number(passwordInput),
    };

    API.fetchLogin(createObj)
      .then(res => {
        getUserID(res.data.userId);
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/product/new');
      })
      .catch(err => {
        console.log(err);
      });
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
        {/* <p className={s.p}>Invalid email/password!!!</p> */}
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

const MDTP = dispatch => ({
  getUserID: userId => dispatch(getUserID(userId)),
});

export default connect(
  null,
  MDTP,
)(Login);
