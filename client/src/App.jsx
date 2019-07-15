import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import s from './App.module.css';
import Header from './components/Header/Header';
import AllProducts from './pages/AllProducts/AllProducts';
import getAllProductsAction from './redux/actions/getAllProductsAction';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import Login from './pages/Login/Login';
import ProductsPage from './pages/ProductPage/ProductPage';
import PrivateRoute from './components/PrivateRouter/PrivateRoute';
import { asyncAuthToken } from './redux/actions/authTokenActions';

class App extends Component {
  componentDidMount() {
    this.props.getData();
    this.props.asyncAuthToken();
  }

  render() {
    const { dataProducts } = this.props;
    return (
      <div>
        <Header />
        {!dataProducts.length ? (
          <p className={s.loader}>...Loading</p>
        ) : (
          <Switch>
            <Redirect exact from="/" to="/products" />
            <Route path="/products/:productId" component={ProductsPage} />
            <Route path="/products" component={AllProducts} />
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/product/new" component={CreateProduct} />
          </Switch>
        )}
      </div>
    );
  }
}

const MSTP = store => ({
  dataProducts: store.dataProducts,
});

const MDTP = dispatch => ({
  getData: data => dispatch(getAllProductsAction(data)),
  asyncAuthToken: () => dispatch(asyncAuthToken()),
});

export default connect(
  MSTP,
  MDTP,
)(App);
