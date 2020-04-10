import React, {Component} from 'react';

export default class MovieCollection extends Component {
  render () {
    return <div>
      {'map over movies to <MovieCard key={movie.id} movie={movie} />'}
    </div>
  }
}