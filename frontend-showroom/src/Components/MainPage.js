import React, { Component } from 'react';
import MovieCollection from './MovieCollection'
import Search from './Search';

const apiKey=`123e2f78bfa3cc8be6fbaf3324b4409f`

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
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
      .then(resp => resp.json())
      // .then(data => console.log(data.results[0]))
      .then(data => {
        console.log(data.results[0])
        this.setState({ movies: data.results })
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