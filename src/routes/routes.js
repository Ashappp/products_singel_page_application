const express = require('express');
const router = express.Router();
const AllProductsList = require('../controllers/ProductsListcontroller');
const User = require('../controllers/UsersController');

router.get('/all', AllProductsList.getAllProductsList);

router.put('/product/new', AllProductsList.createNewProduct);

module.exports = router;
