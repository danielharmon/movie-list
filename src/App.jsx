import React from 'react';
import Search from './Search.jsx'
import AddTitle from './AddTitle.jsx'
import Movie from './Movie.jsx'
import stockMovies from './stockMovies.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    search: '',
    movies: stockMovies,
    active: "watched"
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
    this.onWatchedClick = this.onWatchedClick.bind(this);
    this.activate = this.activate.bind(this);
  }

  onWatchedClick(title) {
    var movies = this.state.movies;
    movies.forEach(movie => {
      if (movie.title === title) {
        movie['watched'] === 'unwatched' ? movie['watched'] = 'watched' : movie['watched'] = 'unwatched';
      }});
    this.setState({movies: movies});
  }

  onAddSubmit(event) {
    var movies = this.state.movies;
    movies.push({title: event.target[0].value, watched: "unwatched"});
    this.setState({movies: movies});
    event.preventDefault();
  }

  onSearchSubmit(event) {
    this.setState({search: event.target[0].value.toLowerCase()});
    event.preventDefault();
  }

  filter() {
    return this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.search) && movie.watched === this.state.active);
  }
  activate() {
    var state = this.state.active === "watched" ? "unwatched" : "watched";
    this.setState({active: state});
  }

  render() {
    var movies = this.filter()
    return (
      <div>
        <h1>I Like Movies</h1>
        <AddTitle onSubmit={this.onAddSubmit}/>
        <br/>
        <button className={this.state.active === "watched" ? "active" : "inactive"} onClick={this.activate}>Watched</button><button onClick={this.activate} className={this.state.active === "unwatched" ? "active" : "inactive"}>Unwatched</button>
        <Search onSubmit={this.onSearchSubmit} placeholder={this.state.search || '...Search'}/>
        <br/>
        <Movie movies={movies} onClick={this.onWatchedClick}/>
      </div>
    );
  }
};

export default App;