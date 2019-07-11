const ProductsListModel = require('../models/ProductsList');

module.exports.getAllProductsList = async (req, res) => {
  try {
    const data = await ProductsListModel.find({});
    console.log(data);
    res.json({
      success: true,
      data,
      message: 'ok',
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'error on server',
    });
  }
};

module.exports.createNewProduct = async (req, res) => {
  try {
    console.log(req.body);
    const newProduct = new ProductsListModel(req.body);
    await newProduct.save().then(doc =>
      res.json({
        success: true,
        message: 'product created',
        createdProduct: doc,
      }),
    );
  } catch (err) {
    res.json({
      err,
      success: false,
      message: 'product is not created',
    });
  }
};
