import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { authToken } from '../../servises/helpers';
import asyncAuthToken from '../../redux/actions/authTokenActions';

class PrivateRoute extends Component {
  componentDidMount() {
    this.props.asyncAuthToken();
  }
  render() {
    const { component: Component, authToken } = this.props;
    return (
      <Route
        render={() =>
          authToken ? <Component /> : <Redirect to={{ pathname: '/login' }} />
        }
      />
    );
  }
}

const MDTP = dispatch => ({
  asyncAuthToken: boolean => dispatch(asyncAuthToken(boolean)),
});

const MSTP = store => ({
  authToken: store.authToken,
});

//   CreteProduct.propTypes = {
//     addProduct: PropTypes.func.isRequired,
//   };

export default connect(
  MSTP,
  MDTP,
)(PrivateRoute);
