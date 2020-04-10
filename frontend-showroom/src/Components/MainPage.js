import React, {Component} from 'react';
import MovieCollection from './MovieCollection'


const key = ""
const API = `https://api.themoviedb.org/3/movie/550?api_key=${key}`

export default class MainPage extends Component {
  constructor() {
    super()
    this.state = {
      movies: ['die hard']
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(movies => {this.setState({movies})
    })
  }


  render () {
    return <div>
      <MovieCollection movies={this.state.movies}/>
    </div>
  }

}