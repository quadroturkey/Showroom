import React, { Component } from 'react';
import MovieCollection from './MovieCollection'
import MovieCard from './MovieCard';
import Search from './Search';

// const key = "123e2f78bfa3cc8be6fbaf3324b4409f"
// const API = `https://api.themoviedb.org/3/movie/550?api_key=${key}`

export default class MainPage extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      search: ''
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = () => {
    fetch(`http://localhost:3000/movies`)
      .then(resp => resp.json())
      .then(movies => {
        this.setState({ movies })
      })
  }

  onSearch = (e) => {
    console.log(e.target.value)
    this.setState({
      search: e.target.value
    })
    
  }

  filterMovies = () => {
    
  }

  render() {
    return (
      <>
        <Search onSearch={this.onSearch} />
        <MovieCollection movies={this.state.movies.filter((movie) => movie.title.includes(this.state.search) || movie.genres.map((genre) => genre.includes(this.state.search)) )} />
      </>

      // this.state.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
    )

  }

}