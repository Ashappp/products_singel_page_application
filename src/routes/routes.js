const express = require("express");
const router = express.Router();
const allMovieList = require("../controllers/movieListcontroller");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.get("/all", allMovieList.getAllList);

router.delete(`/delete/:id`, allMovieList.deleteMovie);

router.put("/create", allMovieList.createNewMovie);

// router.post("/upload", upload.single("file"), allMovieList.uploadFile);

module.exports = router;
