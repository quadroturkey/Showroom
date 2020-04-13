import React, {Component} from 'react';
import MovieCollection from './MovieCollection'



// const key = "123e2f78bfa3cc8be6fbaf3324b4409f"
// const API = `https://api.themoviedb.org/3/movie/550?api_key=${key}`

export default class MainPage extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = () => {
    fetch(`http://localhost:3000/movies`)
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