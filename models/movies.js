var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MovieSchema = new Schema({
  name: String,
  alive: Boolean,
  image: String
});

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;
