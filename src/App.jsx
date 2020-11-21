import React from 'react';
import Search from './Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    search: '',
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(event) {
    this.setState({search: event.target[0].value.toLowerCase()})
    event.preventDefault();
  }
  filter() {
    return this.props.movies.filter(movie => movie.title.toLowerCase().includes(this.state.search))
  }
  render() {
    var movies = this.filter();
    if (movies.length > 0) {
      movies = movies.map(movie => <div key={movie.title}>{movie.title}</div>)
    } else {
      movies = <div>No Movies by that Name</div>
    }
    return (
      <div>
        <h1>I Like Movies</h1>
        <Search onSubmit={this.onSubmit} placeholder={this.state.search || '...Search'}/>
        <br/>
        <div>{movies}</div>
      </div>
    );
  }
};

export default App;