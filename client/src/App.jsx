import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import s from './App.module.css';
import Header from './components/Header/Header';
import ProductsList from './components/ProductsList/ProductsList';
import getData from './redux/actions/getAllProductsAction';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Login from './components/Login/Login';
import ProductsPage from './components/ProductPage/ProductPage';

class App extends Component {
  componentDidMount() {
    this.props.getData();
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
            <Route exact path="/products/:productId" component={ProductsPage} />
            <Route exact path="/products" component={ProductsList} />
            <Route exact path="/login" component={Login} />
            <Route path="/product/new" component={CreateProduct} />
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
  getData: data => dispatch(getData.asyncDataAction(data)),
});

export default connect(
  MSTP,
  MDTP,
)(App);
