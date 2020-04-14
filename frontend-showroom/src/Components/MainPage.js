import React, { Component } from 'react';
import MovieCollection from './MovieCollection'
import Search from './Search';



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
      search: e.target.value.toLowerCase()
    })
    
  }

  filterMovies = (searchTerm) => {
    
  }

  render() {
    return (
      <>
        <Search onSearch={this.onSearch} />
        <MovieCollection movies={this.state.movies.filter((movie) => movie.title.toLowerCase().includes(this.state.search) || movie.genres.toString().toLowerCase().includes(this.state.search))} />
      </>

      // this.state.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
    )


  }

}