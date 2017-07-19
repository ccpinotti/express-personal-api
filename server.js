// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

var profile = [
  {
  name : "Chris Pinotti",
  githubUsername : "cpinotti",
  githubLink : "https://github.com/ccpinotti",
  githubProfileImage : "https://avatars2.githubusercontent.com/u/28356319?v=4&s=460",
  personalSiteLink : "https://github.com/ccpinotti/ccpinotti.github.io",
  currentCity : "San Francisco"
}];
/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/ccpinotti/express-personal-api",
    baseUrl: "http://powerful-retreat-77505.herokuapp.com/api",
    endpoints: [
      {
        method: "GET",
        path: "/api",
        description: "Describes all available endpoints"
    },
      {
        method: "GET",
        path: "/api/profile",
        description: "Data about me"
    },
      {
        method: "GET",
        path: "/api/movies",
        description: "Movies I like"
      },
      {
        method: "POST",
        path: "api/movies",
        description: "Add movies Ive seen"
      },
      {
        method: "PUT",
        path: "api/movies/:id",
        description: "modify movies I've seen"
      },
      {
        method: "DELETE",
        path: "api/movies/:id",
        description: " destroy movies"
      }
    ]
  })
});
app.get('/', function(req, res){
  res.sendFile('views/index.html' , { root : __dirname});
});
// get profile
app.get('/api/profile', function(req, res) {
  res.json(profile)
});
// get all movies
app.get('/api/movie',function (req, res){
  db.Movie.find({}, function(err, movies){
    if (err){
      res.status(500).json({error:err.message});
    }
    else {
      res.json(movies);
    }
  })
});
// get one movies
app.get('/api/movie/:id', function (req, res){
  db.Movie.findOne({_id: req.params.id}, function(err, data){
    res.json(data);
  });
});
// create new movies
app.post('/api/movies', function (req, res){
  var newMovie = new db.Movie({
    title: req.body.title,
    director: req.body.director,
    actors: req.body.actors,
    releaseDate: req.body.realeaseDate,
    description: req.body.description
  });
  Movie.save(function(err, book){
    if (err) {
      return console.log("save error: " + err);
    }
    console.log("saved ", Movie.title);
    // send back the book!
    res.json(movie);
  });
});
// delete movie
app.delete('/api/books/:id', function(req, res){
  var movieId = req.params.title;
  db.Movies.findOneAndRemove({title: movieTitle })
  .exec(function (err, deletedMovie){
    res.json(deletedMovie)
  });
});
/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
