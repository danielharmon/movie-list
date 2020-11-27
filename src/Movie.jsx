import React from 'react'
import MoviePanel from './MoviePanel.jsx'

const Movie = function(props) {
  var movies = props.movies.map(movie => {
    return (
      <div key={movie.title}>

        <div onClick={() => props.onTitleClick(movie.title)}>
          {movie.title}
        </div>
        {movie.clicked && <MoviePanel onWatchedClick={props.onWatchedClick} movie={movie}/>}
      </div>

    )
    })
  if (movies.length === 0) { movies = <div>No Movies Found</div> }
  return (
    <div>{movies}</div>
  )
}

export default Movie;