## MoviesList attachment

This is a full stack React/Redux-Node/Express Movies list attachment
## The application can:
- get a list of movies from the database,
- add a new movie,
- filter the list by title, actors, sort alphabetically,
- upload a file with a list of movies to the server and database;
- receive from the server a list of movies,


## Quick Start
```
# Install dependencies server/client
npm install
cd client
npm install
cd ..
npm start

# Server on localhost:3000
# Client on localhost:3003

```
## BackEnd documentation
#get all list of movies
```
@metod: GET,    URL: http://localhost:3003/api/all


You get res.json 

if success
{
statusCode: 200
success": true,
"data": [{"stars": [string],
"_id": string",
"title": number,
"releaseYear": number,
"format": string,
},"message": "ok"
}

if error 
{
statusCode: 500
success: false,
message: "error on server"
 })
```
#delete movie by id

```
@metod: DELETE,   URL: http://localhost:3003/api/delete/:id
You get res.json 
     
if success
{
statusCode: 200
success: true,
message: "movie deleted",
deleteMovie
});

if error 
{
err,
statusCode: 400,
success: false,
message: "movie is not delete"
};
```
#create a new movie

```
@metod: PUT,  URL: http://localhost:3003/api/create

req.body: {
  title: String,
  releaseYear: Number,
  format: String,
  stars: String
  }
  
You get res.json 

if success
{
statusCode: 200,
success: true,
message: "Movie create"
createdFilm:doc
}
  
  
 if error
{
 statusCode: 400,
 success: false,
 message: "Movie is not create",
 error
 }
```
#upload file in BD

```
@metod: POST,  URL: http://localhost:3003/api/upload 
form-data: file.txt
   
You get res.json   

if success
{
statusCode: 200
success: true,
message: ""file  ulpoad"",
createdMovies
}


if error
{
statusCode: 400
success: false,
message: "file is not ulpoad",
eror
}


```
