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
  
  includeSearch = (str) => {
    return str.toLowerCase().includes(this.state.search)
  }

  filterMovies = () => {
    const movies = this.state.movies.slice(0)
    return movies.filter((movie) => this.includeSearch(movie.title) || this.includeSearch(movie.genres.toString()))
  }


  render() {
    return (
      <>
        <Search onSearch={this.onSearch} />
        <MovieCollection movies={this.filterMovies()}/>
      </>
    )
  }
}