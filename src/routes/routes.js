const express = require('express');
const router = express.Router();
const AllProductsList = require('../controllers/ProductsListcontroller');
const Users = require('../controllers/UsersController');
const { authCheck } = require('../middelware/authCheck');

router.get('/products', AllProductsList.getAllProductsList);

router.post('/products/:id', AllProductsList.getProductById);

router.post('/product/new', authCheck, AllProductsList.createNewProduct);

router.post('/login', Users.LoginUser);

module.exports = router;
