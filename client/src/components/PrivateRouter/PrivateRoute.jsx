import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { asyncAuthToken } from '../../redux/actions/authTokenActions';
import PropTypes from 'prop-types';

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
  asyncAuthToken: () => dispatch(asyncAuthToken()),
});

const MSTP = store => ({
  authToken: store.authToken,
});

PrivateRoute.propTypes = {
  authToken: PropTypes.bool,
};

export default connect(
  MSTP,
  MDTP,
)(PrivateRoute);
