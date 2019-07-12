const express = require('express');
const router = express.Router();
const AllProductsList = require('../controllers/ProductsListcontroller');
const Users = require('../controllers/UsersController');

router.get('/products', AllProductsList.getAllProductsList);

router.get('/product/:id', AllProductsList.getProductById);

router.post('/product/new', AllProductsList.createNewProduct);

router.post('/login', Users.LoginUser);

module.exports = router;
