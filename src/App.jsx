import React from 'react';
import Search from './Search.jsx'
import AddTitle from './AddTitle.jsx'
import Movie from './Movie.jsx'
import stockMovies from './stockMovies.js'
import searchMovieDB from '../lib/searchMovieDB.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    search: '',
    movies: stockMovies,
    active: false
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
    this.onWatchedClick = this.onWatchedClick.bind(this);
    this.activate = this.activate.bind(this);
    this.onTitleClick= this.onTitleClick.bind(this);
  }

  onTitleClick(title) {
    var movies = this.state.movies;
    movies.forEach(movie => {
      if (movie.title === title) {
        movie['clicked'] = !movie['clicked']
      }
    })
    this.setState({movies: movies});
  }

  onWatchedClick(title) {
    var movies = this.state.movies;
    movies.forEach(movie => {
      if (movie.title === title) {
        movie['watched'] = !movie['watched'];
      }});
    this.setState({movies: movies});
  }

  onAddSubmit(event) {
    event.preventDefault();
    var movies = this.state.movies;
    searchMovieDB(event.target[0].value)
      .then(data => {
        console.log(data.results)
        var result = data.results[0]
        result.watched = false;
        result.clicked = false;
        movies.push(result)
        this.setState({movies: movies});
      })
  }

  onSearchSubmit(event) {
    this.setState({search: event.target[0].value.toLowerCase()});
    event.preventDefault();
  }

  filter() {
    return this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.search) && movie.watched === this.state.active);
  }
  activate() {
    this.setState({active: !this.state.active});
  }

  render() {
    var movies = this.filter()
    return (
      <div>
        <h1>I Like Movies</h1>
        <AddTitle onSubmit={this.onAddSubmit}/>
        <br/>
        <button className={this.state.active === true ? "active" : "inactive"} onClick={this.activate}>Watched</button><button onClick={this.activate} className={this.state.active === false ? "active" : "inactive"}>Unwatched</button>
        <Search onSubmit={this.onSearchSubmit} placeholder={this.state.search || '...Search'}/>
        <br/>
        <Movie movies={movies} onTitleClick={this.onTitleClick} onWatchedClick={this.onWatchedClick}/>
      </div>
    );
  }
};

export default App;