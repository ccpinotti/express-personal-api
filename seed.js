// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var movies_list = [
  {
    title: "Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    actors:"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    releaseDate:"March 31, 1999 ",
    description: "Sci-fi, Action"
  },
  {
    title: "Goodfellas",
    director: "Martin Scorsese",
    actors:"Ray Leotta, Robert DeNiro, Joe Pesci",
    releaseDate:"September 19, 1990",
    description: "Crime, Drama"
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    actors:"John Travolta, Uma Thermon, Samuel Jackson",
    releaseDate:"October 14, 1994",
    description: "Crime, Drama"
  },
  {
    title: "Star Wars: The Force Awakens",
    director: "J.J. Abrams",
    actors:"Daisy Ridley, John Boyega, Oscar Isaac",
    releaseDate:"Decemeber 18, 2015",
    description: "Action, Adventure, Fantasy"
  }
];
// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
