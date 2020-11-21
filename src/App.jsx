import React from 'react';
import Search from './Search.jsx'
import AddTitle from './AddTitle.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    search: '',
    movies: []
    }
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }

  onAddSubmit(event) {
    var movies = this.state.movies;
    movies.push({title: event.target[0].value});
    this.setState({movies: movies});
    event.preventDefault();
  }

  onSearchSubmit(event) {
    this.setState({search: event.target[0].value.toLowerCase()});
    event.preventDefault();
  }

  filter() {
    return this.state.movies.filter(movie => movie.title.toLowerCase().includes(this.state.search));
  }

  render() {
    var movies = this.filter();
    if (movies.length > 0) {
      movies = movies.map(movie => <div key={movie.title}>{movie.title}</div>);
    } else {
      movies = <div>No Movies by that Name</div>
    }
    return (
      <div>
        <h1>I Like Movies</h1>
        <AddTitle onSubmit={this.onAddSubmit}/>
        <br/>
        <Search onSubmit={this.onSearchSubmit} placeholder={this.state.search || '...Search'}/>
        <br/>
        <div>{movies}</div>
      </div>
    );
  }
};

export default App;