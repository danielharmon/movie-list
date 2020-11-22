import React from 'react'

const Movie = function(props) {
  var movies = props.movies.map(movie => <div key={movie.title}>{movie.title} <button className={movie.watched} onClick={()=> props.onClick(movie.title)}>Watched</button></div>)
  if (movies.length === 0) { movies = <div>No Movies Found</div> }
  return (
    <div>{movies}</div>
  )
}

export default Movie;