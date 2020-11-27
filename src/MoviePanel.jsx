import React from 'react'

const MoviePanel = function(props) {
  var attributes = Object.keys(props.movie).map(key => {
    if (key === 'watched') {
      return <li key={key}>{key}: <input type="checkbox" onChange={()=>props.onWatchedClick(props.movie.title)} checked={props.movie[key]}/></li>
    } else if (key === 'title' || key === 'clicked') {
      return;
    } else {
      return <li key={key}>{key}: {props.movie[key]}</li>
    }})
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w92${props.movie.poster_path}`} alt={props.movie.title}/>
      <ul>
    {attributes}
      </ul>
    </div>
  )
}

export default MoviePanel;