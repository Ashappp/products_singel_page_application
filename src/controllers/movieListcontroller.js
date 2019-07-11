const ProductsListModel = require('../models/ProductsList');
const fs = require('fs');

module.exports.getAllProductsList = async (req, res) => {
  try {
    const data = await ProductsListModel.find({});
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

// module.exports.deleteMovie = async (req, res) => {
//   try {
//     const movieToDelete = await MovieListModel.findByIdAndDelete(req.params.id);
//     res.json({
//       success: true,
//       message: "movie deleted",
//       movieToDelete
//     });
//   } catch (err) {
//     res.json({ err, success: true, message: "movie is not deleted" });
//   }
// };

module.exports.createNewMovie = async (req, res) => {
  try {
    console.log(req.body);
    const newMovie = new MovieListModel(req.body);
    await newMovie.save().then(doc =>
      res.json({
        success: true,
        message: 'movie created',
        createdFilm: doc,
      }),
    );
  } catch (err) {
    res.json({
      err,
      success: false,
      message: 'movie is not created',
    });
  }
};

module.exports.uploadFile = (req, res) => {
  fs.readFile(`./uploads/${req.file.filename}`, 'utf8', function(err, data) {
    if (err) throw err;
    let obj = {};
    let arr = [];
    let splitted = data.toString().split('\n');
    for (let i = 0; i < splitted.length; i++) {
      let splitLine = splitted[i].split(':');
      if (splitLine[0] !== '') obj[splitLine[0]] = splitLine[1];
      if (splitLine[0] === '') {
        if (Object.keys(obj).length > 0) {
          arr.push(obj);
        }
        obj = {};
      }
    }

    arr = arr.map(obj => ({
      title: obj.Title,
      releaseYear: obj['Release Year'],
      format: obj.Format,
      stars: obj.Stars.split(','),
    }));
    MovieListModel.insertMany(arr, function(error, docs) {
      if (error) {
        res.json({
          success: false,
          message: 'file is not ulpoad',
          error,
        });
      }
      res.json({
        success: true,
        message: 'file upload',
        createdMovies: docs,
      });
    });
  });
};
