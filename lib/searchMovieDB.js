import MOVIEDB_API_KEY from '../dist/config/moviedbAPI.js'

var searchMovieDB = function(query) {
  var url = 'https://api.themoviedb.org/3/search/movie?api_key='+ MOVIEDB_API_KEY+'&query='+ query.split(' ').join('+')
  console.log(url);
  return fetch(url)
    .then(result => result.json())
}

export default searchMovieDB;