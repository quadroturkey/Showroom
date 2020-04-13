import React, {Component} from 'react';
import MovieCard from './MovieCard';

export default class MovieCollection extends Component {
  render () {
    return <div>
      {this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  }
}